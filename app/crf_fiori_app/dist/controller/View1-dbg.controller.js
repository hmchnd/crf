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
                var oObjectPageLayout = this.byId("idOPL");
                oObjectPageLayout.setShowFooter(!oObjectPageLayout.getShowFooter());
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
            },
            onSave : function(){
                var oCont_Number = this.getView().byId("idContract_Number").getValue();
                if (oCont_Number !== '') {
                    var oModel = this.getOwnerComponent().getModel();
                    var oCRFHeaderFieldsSet= oModel.createEntry("CRFHeaderFields",{
                        properties: {
                            "Directorate": this.getValue().byId("idDirectorate").getValue(),
                            "Contract_Holder": this.getValue().byId("idContract_Holder").getValue(),
                            "Contract_Title": this.getValue().byId("idContract_Title").getValue(),  
                            "Contractor_Name": this.getValue().byId("idContractor_Name").getValue(),
                            "Contract_Number": this.getValue().byId("idContract_Number").getValue(),
                            "Request_Date": this.getValue().byId("idContract_Number").getValue(idRequest_Date)    
                        },
                        success: function (oData, response) { }.bind(this),
                        error: function (oError) { }.bind(this)
                    });   
                } else {
                    alert("Contract Number cannot be empty");
                }
                alert("Data Saved");

            }
        });
    });
