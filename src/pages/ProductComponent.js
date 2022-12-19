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
                                        className="form-control" placeholder="Enter Product Name"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">product Type</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="product_type" 
                                        name="product_type"
                                        className="form-control" placeholder="Enter Product Type"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Buy Price</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="buy_price" 
                                        name="buy_price"
                                        className="form-control" placeholder="Enter Buy Price"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Sell Price</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="sell_price" 
                                        name="sell_price"
                                        className="form-control" placeholder="Enter Sell Price"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Batch No.</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="batch_no" 
                                        name="batch_no"
                                        className="form-control" placeholder="Enter Batch No."/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Expiry Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="expiry_date" 
                                        name="expiry_date"
                                        className="form-control" placeholder="Expiry Date"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Expiry Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="expiry_date" 
                                        name="expiry_date"
                                        className="form-control" placeholder="Enter Expiry Date"/>
                                    </div>
                                </div>
                                <label htmlFor="email_address">Mfg Date</label>
                                <div className="form-group">
                                    <div className="form-line">
                                        <input type="text" id="mfg_date" 
                                        name="mfg_date"
                                        className="form-control" placeholder="Enter Mfg Date"/>
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