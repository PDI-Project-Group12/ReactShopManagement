class Config{
    static loginUrl="http://127.0.0.1:8000/api/gettoken/";
    static refreshApiUrl="http://127.0.0.1:8000/api/refresh_token";
    static homeUrl="/home";
    static logoutPageUrl="/logout";

    static sidebarItem= [
        {"index":"0","title":"Home","url":"/home","icons":"home"},
        {"index":"1","title":"Company","url":"/company","icons":"assessment"},
        {"index":"2","title":"Product","url":"/product","icons":"assessment"},
        {"index":"3","title":"Product Details","url":"/productdetails","icons":"assessment"},
        {"index":"4","title":"Manage Company Account","url":"/managecompanyaccount","icons":"assessment"},
        {"index":"5","title":"Manage Company Employee","url":"/manageemployee","icons":"assessment"},
        {"index":"6","title":"Generate Bill","url":"/generatebill","icons":"assessment"},
    
    ]
}

export default Config;
