import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Add extends Component {

    constructor(props){
        super(props);
        

    }


    render(){
            return (
                <div class="page-wrapper">
                    
                    <div class="container-fluid">
                            
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header bg-info">
                                        <h4 class="m-b-0 text-white">Other Sample form</h4>
                                    </div>
                                    <div class="card-body">
                                        <form action="#">
                                            <div class="form-body">
                                                <h3 class="card-title">Person Info</h3>
                                                <div class="row p-t-20">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">First Name</label>
                                                            <input type="text" id="firstName" class="form-control" placeholder="John doe"/>
                                                            <small class="form-control-feedback"> This is inline help </small> </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group has-danger">
                                                            <label class="control-label">Last Name</label>
                                                            <input type="text" id="lastName" class="form-control form-control-danger" placeholder="12n"/>
                                                            <small class="form-control-feedback"> This field has error. </small> </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group has-success">
                                                            <label class="control-label">Gender</label>
                                                            <select class="form-control custom-select">
                                                                <option value="">Male</option>
                                                                <option value="">Female</option>
                                                            </select>
                                                            <small class="form-control-feedback"> Select your gender </small> </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">Date of Birth</label>
                                                            <input type="date" class="form-control" placeholder="dd/mm/yyyy" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">Category</label>
                                                            <select class="form-control custom-select" data-placeholder="Choose a Category" tabindex="1">
                                                                <option value="Category 1">Category 1</option>
                                                                <option value="Category 2">Category 2</option>
                                                                <option value="Category 3">Category 5</option>
                                                                <option value="Category 4">Category 4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label class="control-label">Membership</label>
                                                            <div class="form-check">
                                                                <label class="custom-control custom-radio">
                                                                    <input id="radio1" name="radio" type="radio" checked class="custom-control-input"/>
                                                                    <span class="custom-control-indicator"></span>
                                                                    <span class="custom-control-description">Free</span>
                                                                </label>
                                                                <label class="custom-control custom-radio">
                                                                    <input id="radio2" name="radio" type="radio" class="custom-control-input"/>
                                                                    <span class="custom-control-indicator"></span>
                                                                    <span class="custom-control-description">Paid</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 class="box-title m-t-40">Address</h3>
                                                <div class="row">
                                                    <div class="col-md-12 ">
                                                        <div class="form-group">
                                                            <label>Street</label>
                                                            <input type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>City</label>
                                                            <input type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>State</label>
                                                            <input type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Post Code</label>
                                                            <input type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Country</label>
                                                            <select class="form-control custom-select">
                                                                <option>--Select your Country--</option>
                                                                <option>India</option>
                                                                <option>Sri Lanka</option>
                                                                <option>USA</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-actions">
                                                <button type="button" class="btn btn-success"> <i class="fa fa-check"></i> Save</button>
                                                <button type="button" class="btn btn-inverse">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <footer class="footer"> © 2017 Admin Pro by wrappixel.com </footer>

                </div>
            );
   }
}
