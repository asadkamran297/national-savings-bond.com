import React,{Component} from "react";
import ReactDOM from 'react-dom';

export default function Dashboard() {
    return (
        <div class="page-wrapper">
            
            <div class="container-fluid">
                    
                 <div class="row">
                    <div class="col-lg-3">
                        <div class="card bg-info">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div class="m-r-20 align-self-center"><img src="../assets/images/icon/income-w.png" alt="Income" /></div>
                                    <div class="align-self-center">
                                        <h6 class="text-white m-t-10 m-b-0">Total Income</h6>
                                        <h2 class="m-t-0 text-white">953,000</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card bg-success">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div class="m-r-20 align-self-center"><img src="../assets/images/icon/expense-w.png" alt="Income" /></div>
                                    <div class="align-self-center">
                                        <h6 class="text-white m-t-10 m-b-0">Total Expense</h6>
                                        <h2 class="m-t-0 text-white">236,000</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card bg-primary">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div class="m-r-20 align-self-center"><img src="../assets/images/icon/assets-w.png" alt="Income" /></div>
                                    <div class="align-self-center">
                                        <h6 class="text-white m-t-10 m-b-0">Total Assets</h6>
                                        <h2 class="m-t-0 text-white">987,563</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="card bg-danger">
                            <div class="card-body">
                                <div class="d-flex no-block">
                                    <div class="m-r-20 align-self-center"><img src="../assets/images/icon/staff-w.png" alt="Income" /></div>
                                    <div class="align-self-center">
                                        <h6 class="text-white m-t-10 m-b-0">Total Staff</h6>
                                        <h2 class="m-t-0 text-white">987,563</h2></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer class="footer"> © 2017 Admin Pro by wrappixel.com </footer>

        </div>
    );
}
