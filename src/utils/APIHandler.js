
const {deafult: AuthHandler} = require ("./AuthHandler");
const {deafult:axios}=require("axios");
const{deafult:Config}=require("./Config")







class APIHandler{
    async checkLogin(){
        if (AuthHandler.checkTokenExpiry()){
           var response=await axios.post(Config.refreshApiUrl,{refresh:AuthHandler.getRefreshToken()});
           console.log(response);
        }
    }

    async saveCompanyData(name,
        license_no,
        address,
        contact_no,
        email,
        description
        ){
        this.checkLogin();

    }
}

export default APIHandler;