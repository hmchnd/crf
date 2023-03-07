sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/util/MockServer",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MockServer, JSONModel, ODataModel) {
        "use strict";

        return Controller.extend("ncoc.eprocurement.crffioriapp.controller.View1", {
            onInit: function () {
              
            },
            onAfterRendering:function(){

                var oModel = this.getOwnerComponent().getModel();
                var oCRFHeaderFieldsSet = oModel.createEntry("CRFHeaderFields", {
                    properties: {
                        "Directorate": "",
                        "Contract_Holder": "",
                        "Contract_Title": "",  
                        "Contractor_Name": "",
                        "Contract_Number": "",
                        "Request_Date": new Date()
                    
                    },
                    success: function (oData, response) { }.bind(this),
                    error: function (oError) { }.bind(this)
                });

                this.getView().bindElement({
                    path: oCRFHeaderFieldsSet.sPath
                });
            }
        });
    });
