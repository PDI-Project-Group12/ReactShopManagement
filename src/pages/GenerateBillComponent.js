import React from "react";
import APIHandler from "../utils/APIHandler";
import AuthHandler from "../utils/AuthHandler";

class GenerateBillComponent extends React.Component{

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
                        <h2>MANAGE BILLING INFO.</h2>
                    </div>
                    <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                               Generate Bill
                            </h2>
                            
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="email_address">Bill Id</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="bill_id" 
                                        name="bill_id"
                                        className="form-control" placeholder="Enter Bill Id"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Product Id</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="product_id" 
                                        name="product_id"
                                        className="form-control" placeholder="Enter Product Id"/>
                                    </div>
                                </div>
                                
                                
                        
                                <br/>
                                <button type="submit" className="btn btn-primary m-t-15 waves-effect-btn-block">Generate Bill</button>
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

export default GenerateBillComponent;