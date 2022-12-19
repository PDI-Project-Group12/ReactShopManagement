import React from "react";
import APIHandler from "../utils/APIHandler";
import AuthHandler from "../utils/AuthHandler";

class ProductComponent extends React.Component{

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
                        <h2>MANAGE PRODUCT DATA</h2>
                    </div>
                    <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="header">
                            <h2>
                                Add Product
                            </h2>
                            
                        </div>
                        <div className="body">
                            <form onSubmit={this.formSubmit}>
                                <label htmlFor="email_address">Name</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="name" 
                                        name="name"
                                        className="form-control" placeholder="Enter Company Name"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">License No.</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="license_no" 
                                        name="license_no"
                                        className="form-control" placeholder="Enter License No."/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Address</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="address" 
                                        name="address"
                                        className="form-control" placeholder="Enter Company Address"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Contact No.</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="contact_no" 
                                        name="contact_no"
                                        className="form-control" placeholder="Enter Contact No."/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Email</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="email" 
                                        name="email"
                                        className="form-control" placeholder="Enter Company Email"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Description</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="description" 
                                        name="description"
                                        className="form-control" placeholder="Enter Company Description"/>
                                    </div>
                                </div>
                                
                        
                                <br/>
                                <button type="submit" className="btn btn-primary m-t-15 waves-effect-btn-block">Add Product</button>
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

export default ProductComponent;