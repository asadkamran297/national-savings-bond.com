import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import FlashMassage from 'react-flash-message'
import axios from 'axios';
import swal from 'sweetalert';
import Footer from './../Footer.js';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import GLOBAL from './../global.js';
import { Button,Modal } from 'react-bootstrap';


export default class List extends Component {

    constructor(props){
        super(props);
        
        this.state={
            data:[],
            pages:[],
            message:'',
            button:'Add',
            modal:GLOBAL.modal
        }

        console.log('This is here:   '+this.state.modal);

    }

    async fetch_data(page=1){
       axios.get(GLOBAL.url+'bondtype/list/'+page,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
        .then(response=>{
            this.setState({
              data:response.data.data,
              pages:response.data.total_pages
            },function(){
                console.log(this.state.data)
            });
        });
    }

    sweet_alert_action(){
        console.log('button clicked');
        swal({
              title: "Are you sure?",
              text: "Once deleted, you will not be able to recover this imaginary file!",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                 console.log('This is deleted');
              } 
              else {
                 console.log('This is not deleted');
              }
        });
    }

    componentDidMount(){

        this.fetch_data();

        if(this.props.location.state != undefined)
        {
            this.setState({
               message:this.props.location.state.message
            });
        }

        this.pusher_run();        

    }

    modalToggle(check){
        /*this.setState({
             modal: check
       });*/
       GLOBAL.modal = true;
       console.log(GLOBAL.modal);
    }

    pusher_run(){
        
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('c4a08f4726d206f07602', {
            cluster: 'ap1',
            forceTLS: true
        });

        const this2=this;

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function(data) {

                this2.setState({
                  button:'Pusher'
                },function(){
                    console.log(this.state.button)
                });

            });
    }

    goBack(){
        this.props.history.goBack();  
    }

    onDelete(id){

          swal({
              title: "Are you sure?",
              text: "Are you sure you want to delete this Record",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                 
                 
                     /*const data = {
                        id:id
                     }*/
                    
                      axios.delete(GLOBAL.url+'bondtype/delete/'+id,{ headers: { Authorization: `Bearer ${GLOBAL.token}` } })
                      .then(res=>{
                            console.log(res.data);
                            if(res.data.status)
                            {
                                this.fetch_data();
                            }

                      });



              } 
          });      
    }


    render(){
            return (
                
                 <div class="page-wrapper">
            
                        <div class="container-fluid">

                            <div class="row">
                                
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">

                                            <Button variant="primary" onClick={this.modalToggle.bind(this,true)}>
                                              Launch demo modal
                                            </Button>

                                            <Modal show={GLOBAL.modal}>
                                              <Modal.Header closeButton>
                                                <Modal.Title>Modal heading</Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                              <Modal.Footer>
                                                <Button variant="secondary" onClick={this.modalToggle.bind(this,false)}>
                                                  Close
                                                </Button>
                                                <Button variant="primary">
                                                  Save Changes
                                                </Button>
                                              </Modal.Footer>
                                            </Modal>

                                            <h4 class="card-title">Bond Types</h4>
                                            <h6 class="card-subtitle">This is the listing for Bond types</h6>
                                            <div style={{ textAlign: 'right' }}>
                                                <Link to="/bond/add"><button type="button" class="btn waves-effect waves-light btn-primary">{this.state.button}</button></Link>
                                            </div>

                                            {
                                                this.state.message !='' ? (
                                                    <FlashMassage duration={2000}>
                                                        <div class="alert alert-success">{this.state.message}</div>
                                                    </FlashMassage>
                                                 ):'' 
                                            }
                                            <br/>

                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Amount</th>
                                                            <th>First Prize</th>
                                                            <th>Second Prize</th>
                                                            <th>Third Prize</th>
                                                            <th class="text-nowrap">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                            {
                                                                this.state.data.map((value,i)=>{

                                                                  return(

                                                                        <tr>
                                                                            <td>{value.amount}</td>
                                                                            <td>{value.first_prize}</td>
                                                                            <td>{value.second_prize}</td>
                                                                            <td>{value.third_prize}</td>
                                                                            <td class="text-nowrap">
                                                                                <Link to={`/bond/edit/${value.id}`} > <i class="fa fa-pencil text-inverse m-r-10"></i> </Link>
                                                                                {/*<a href="#" data-toggle="tooltip" data-original-title="Edit">  </a>*/}
                                                                                <a href="javascript:;" onClick={ this.onDelete.bind(this,value.id) } data-toggle="tooltip" data-original-title="Close"> <i class="fa fa-close text-danger"></i> </a>
                                                                            </td>
                                                                        </tr>

                                                                    )
                                                                })
                                                            }
                                                        
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                            <div style={{ textAlign: "center" }} >
                                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" >
                                                  <div class="btn-group mr-2" role="group" aria-label="First group">
                                                     {
                                                        this.state.pages.map((value,i)=>{

                                                           return(
                                                              <button type="button" class="btn btn-secondary" onClick={ this.fetch_data.bind(this,++i) }>{ i++ }</button>
                                                           )
                                                        })
                                                     }
                                                      
                                                  </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                                
                            
                        </div>

                        <Footer name="Jeem" modalchange={this.modalToggle.bind(this)} />

                    </div>

            );
   }
}
