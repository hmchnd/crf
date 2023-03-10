sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
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
                        "Directorate": "Production",
                        "Contract_Holder": "",
                        "Contract_Title": "Machin parts Contract",  
                        "Contractor_Name": "",
                        "Contract_Number": "BBHU78",
                        "Request_Date": new Date(),
                        "Contract_Strategy":"",
                        "Contract_Currency":"",
                        "Exchng_Rate_Date": new Date(),
                        "Exchng_Rate_Cont_Curr":"",
                        "Est_Cont_Value":0.00,
                        "Est_Cont_Value_USD":0.00,
                        "Est_Contigency":0.00,
                        "Cost_Object":"",
                        "Est_Local_Content":0.00,
                        "LTPO_No":"",
                        "Forecast_Contract_Duration":"",
                        "Planned_Start_Date":new Date(),
                        "Planned_End_Date": new Date(),
                        "Optional_Extension":"",
                        "Retrospective":"",
                        "Description_WSM":"",
                        "Optional_Scope":"",
                        "Gov_Inter_Scope":"",
                        "RCS":"",
                        "HSSE_Risk":"High",
                        "HSSE_ME_Influence":"Medium",
                        "HSSE_Cat_Justification":"",
                        "Strategy":"",
                        "TEP":true,
                        "TEA":true,
                        "TE_NA":true,
                        "TEQ":"",
                        "Source_Justification":"",
                        "Detail_Expln_Sourc_Just":"",
                        "Other_Cont_Optn_Considered":"",
                        "Detail_NCOC_Contract_Award":"",
                        "Perf_Contractor_NCOC_Cont":"",
                        "Consq_Non_App_NCOC_Contract_Board":"",
                        "Commodity_Code":"",
                        "Prequalification_Status":""
                    
                    },
                    success: function (oData, response) { }.bind(this),
                    error: function (oError) { }.bind(this)
                });

                this.getView().bindElement({
                    path: oCRFHeaderFieldsSet.sPath
                });
            },
            onSave : function(){
              let oScreenUserInputJson = this.getView().getBindingContext().getObject();
              var oModel = this.getView().getModel();
              this.getView().setBusy(true);
              if(oScreenUserInputJson.Contract_Number!='' || oScreenUserInputJson.Contract_Title!=''){
                var oPendingChanges = oModel.getPendingChanges();
                if (oPendingChanges) {
                    oModel.submitChanges({
                        success: function (oData, oResponse) {
                            this.getView().setBusy(false);
                            MessageBox.success("Entry Created")
                        }.bind(this),
                        error: function (oError) {
                            this.getView().setBusy(false);
                            MessageBox.error(oError)
                        }.bind(this),
                    });

                }

              }else{

                MessageBox.error("Contract Number and Contract Title is Mandatory input")
              }

            }
        });
    });
