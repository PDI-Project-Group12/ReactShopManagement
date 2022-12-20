import React from "react";
import APIHandler from "../utils/APIHandler";
import AuthHandler from "../utils/AuthHandler";

class ManageCompanyAccountComponent extends React.Component{

    async formSubmit(event){
        event.preventDefault();
        var apiHandler=new APIHandler();
        apiHandler.saveCompanyData();


    }

    render(){
        return (
            <section className="content">
                <div className="container-fluid">
                    <div className="block-header">
                        <h2>MANAGE COMPANY ACCOUNT</h2>
                    </div>
                    <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Company Account
                            </h2>
                            
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="email_address">Company Id</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="company_id" 
                                        name="company_id"
                                        className="form-control" placeholder="Enter Company Id"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Transaction Type</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="transaction_type" 
                                        name="transaction_type"
                                        className="form-control" placeholder="Enter Transaction Type "/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Transaction Amount</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="transaction_amt" 
                                        name="transaction_amt"
                                        className="form-control" placeholder="Enter Transaction Amount"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Transaction Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="transaction_date" 
                                        name="transaction_date"
                                        className="form-control" placeholder="Enter Transaction Date "/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Payment Mode</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="payment_mode" 
                                        name="payment_mode"
                                        className="form-control" placeholder="Enter Payment Mode Email"/>
                                    </div>
                                </div>
                                
                                
                        
                                <br/>
                                <button type="submit" className="btn btn-primary m-t-15 waves-effect-btn-block">Add Company Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </section>
        );
    }
}

export default ManageCompanyAccountComponent;