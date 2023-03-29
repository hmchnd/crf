sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },

        getUploadData:function(){
            return {
                "items": [
                    {
                        "fileName": "Contract Owner Appointment letter",
                        "mediaType": "application/msword",
                        "url": "demokit/sample/UploadCollection/LinkedDocuments/Business Plan Agenda.doc",
                        "uploadState": "Complete",
                       
                        "statuses": [
                            {
                                "title": "Uploaded By",
                                "text": "Jane Burns",
                                "active": true
                            },
                            {
                                "title": "Uploaded On",
                                "text": "2014-07-28",
                                "active": false
                            },
                            {
                                "title": "File Size",
                                "text": "25",
                                "active": false
                            },
                            {
                                "title":"Document Info Record",
                                "text":"SSP/101010101",
                                "state":"Information"
                            }
                        ],
                        "selected": false
                    }
                ]
            }
        }
    };
});