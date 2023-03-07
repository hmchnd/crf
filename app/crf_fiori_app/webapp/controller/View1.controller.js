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
                //create MockServer
                var oMockServer = new MockServer({
                        rootUri: "/crfandestimate/"
                });
                //Configure MockServer
                MockServer.config({
                    autoRespond : true,
                    autoRespondAfter : 1000
                });
                //Simulate the MockServer
                var sPath= sap.ui.require.toUrl("https://port4004-workspaces-ws-fplz2.us10.trial.applicationstudio.cloud.sap/")
            }
        });
    });
