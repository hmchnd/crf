const cds = require("@sap/cds")


module.exports = (srv) => {

    srv.on("CREATE", "CRFHeaderFields", async function (req, next) {
         let oPayLoad = req.data;
         console.log(JSON.stringify(oPayLoad));

        //  https("https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances",{
        //     {
        //         "definitionId": "us10.2afd2a0atrial.crfprocessflow.cRF",
        //         "context": {
        //             "directorate": "",
        //             "contract_holder": "",
        //             "contract_title": "",
        //             "contractor_name": "",
        //             "request_date": "",
        //             "est_cont_value_usd": ""
        //         }
        //     }
         
        //  })

         //// trigger SAP Process Automation start instance API with JSON payload from CRF APP with required fields for approvers.
        await next();
       
       });

    

}