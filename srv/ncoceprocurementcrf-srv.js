const cds = require("@sap/cds")


module.exports = (srv) => {

    srv.on("CREATE", "CRFHeaderFields", async function (req, next) {
         let oPayLoad = req.data;
         console.log(JSON.stringify(oPayLoad));

         //// trigger SAP Process Automation start instance API with JSON payload from CRF APP with required fields for approvers.
        await next();
       
       });


}