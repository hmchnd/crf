//@ui5-bundle ncoc/eprocurement/crffioriapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ncoc/eprocurement/crffioriapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","ncoc/eprocurement/crffioriapp/model/models"],function(e,i,t){"use strict";return e.extend("ncoc.eprocurement.crffioriapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"ncoc/eprocurement/crffioriapp/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("ncoc.eprocurement.crffioriapp.controller.App",{onInit(){}})});
},
	"ncoc/eprocurement/crffioriapp/controller/View1.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/util/MockServer","sap/ui/model/json/JSONModel","sap/ui/model/odata/v2/ODataModel"],function(e,t,r,o){"use strict";return e.extend("ncoc.eprocurement.crffioriapp.controller.View1",{onInit:function(){var e=this.byId("idOPL");e.setShowFooter(!e.getShowFooter())},onAfterRendering:function(){var e=this.getOwnerComponent().getModel();var t=e.createEntry("CRFHeaderFields",{properties:{Directorate:"",Contract_Holder:"",Contract_Title:"",Contractor_Name:"",Contract_Number:"",Request_Date:new Date},success:function(e,t){}.bind(this),error:function(e){}.bind(this)});this.getView().bindElement({path:t.sPath})},onSave:function(){var e=this.getView().byId("idContract_Number").getValue();if(e!==""){var t=this.getOwnerComponent().getModel();var r=t.createEntry("CRFHeaderFields",{properties:{Directorate:this.getValue().byId("idDirectorate").getValue(),Contract_Holder:this.getValue().byId("idContract_Holder").getValue(),Contract_Title:this.getValue().byId("idContract_Title").getValue(),Contractor_Name:this.getValue().byId("idContractor_Name").getValue(),Contract_Number:this.getValue().byId("idContract_Number").getValue(),Request_Date:this.getValue().byId("idContract_Number").getValue(idRequest_Date)},success:function(e,t){}.bind(this),error:function(e){}.bind(this)})}else{alert("Contract Number cannot be empty")}alert("Data Saved")}})});
},
	"ncoc/eprocurement/crffioriapp/i18n/i18n.properties":'# This is the resource bundle for ncoc.eprocurement.crffioriapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CRF Fiori App\n\n#YDES: Application description\nappDescription=A CRF Fiori application.\n#XTIT: Main view title\ntitle=CRF Fiori App',
	"ncoc/eprocurement/crffioriapp/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"ncoc.eprocurement.crffioriapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.9.1","toolsId":"8791c63f-352a-4f6f-a4c7-f9d762f05ff9"},"dataSources":{"mainService":{"uri":"v2/crfandestimate/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.111.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ncoc.eprocurement.crffioriapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"ncoc.eprocurement.crffioriapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"ncoc.eprocurement.crffioriapp.view.App","type":"XML","async":true,"id":"App"}}}',
	"ncoc/eprocurement/crffioriapp/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"ncoc/eprocurement/crffioriapp/utils/locate-reuse-libs.js":'(function(e){var t=function(e,t){var n=["sap.apf","sap.base","sap.chart","sap.collaboration","sap.f","sap.fe","sap.fileviewer","sap.gantt","sap.landvisz","sap.m","sap.ndc","sap.ovp","sap.rules","sap.suite","sap.tnt","sap.ui","sap.uiext","sap.ushell","sap.uxap","sap.viz","sap.webanalytics","sap.zen"];Object.keys(e).forEach(function(e){if(!n.some(function(t){return e===t||e.startsWith(t+".")})){if(t.length>0){t=t+","+e}else{t=e}}});return t};var n=function(e){var n="";if(e){if(e["sap.ui5"]&&e["sap.ui5"].dependencies){if(e["sap.ui5"].dependencies.libs){n=t(e["sap.ui5"].dependencies.libs,n)}if(e["sap.ui5"].dependencies.components){n=t(e["sap.ui5"].dependencies.components,n)}}if(e["sap.ui5"]&&e["sap.ui5"].componentUsages){n=t(e["sap.ui5"].componentUsages,n)}}return n};var r=function(e){var t=e;return new Promise(function(r,a){$.ajax(t).done(function(e){r(n(e))}).fail(function(){a(new Error("Could not fetch manifest at \'"+e))})})};var a=function(e){if(e){Object.keys(e).forEach(function(t){var n=e[t];if(n&&n.dependencies){n.dependencies.forEach(function(e){if(e.url&&e.url.length>0&&e.type==="UI5LIB"){jQuery.sap.log.info("Registering Library "+e.componentId+" from server "+e.url);jQuery.sap.registerModulePath(e.componentId,e.url)}})}})}};e.registerComponentDependencyPaths=function(e){return r(e).then(function(e){if(e&&e.length>0){var t="/sap/bc/ui2/app_index/ui5_app_info?id="+e;var n=jQuery.sap.getUriParameters().get("sap-client");if(n&&n.length===3){t=t+"&sap-client="+n}return $.ajax(t).done(a)}})}})(sap);var scripts=document.getElementsByTagName("script");var currentScript=document.getElementById("locate-reuse-libs");if(!currentScript){currentScript=document.currentScript}var manifestUri=currentScript.getAttribute("data-sap-ui-manifest-uri");var componentName=currentScript.getAttribute("data-sap-ui-componentName");var useMockserver=currentScript.getAttribute("data-sap-ui-use-mockserver");var bundleResources=function(){jQuery.sap.require("jquery.sap.resources");var e=sap.ui.getCore().getConfiguration().getLanguage();var t=jQuery.sap.resources({url:"i18n/i18n.properties",locale:e});document.title=t.getText("appTitle")};sap.registerComponentDependencyPaths(manifestUri).catch(function(e){jQuery.sap.log.error(e)}).finally(function(){sap.ui.getCore().attachInit(bundleResources);if(componentName&&componentName.length>0){if(useMockserver&&useMockserver==="true"){sap.ui.getCore().attachInit(function(){sap.ui.require([componentName.replace(/\\./g,"/")+"/localService/mockserver"],function(e){e.init();sap.ushell.Container.createRenderer().placeAt("content")})})}else{sap.ui.require(["sap/ui/core/ComponentSupport"]);sap.ui.getCore().attachInit(bundleResources)}}else{sap.ui.getCore().attachInit(function(){sap.ushell.Container.createRenderer().placeAt("content")})}});sap.registerComponentDependencyPaths(manifestUri);',
	"ncoc/eprocurement/crffioriapp/view/App.view.xml":'<mvc:View controllerName="ncoc.eprocurement.crffioriapp.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"ncoc/eprocurement/crffioriapp/view/View1.view.xml":'<mvc:View controllerName="ncoc.eprocurement.crffioriapp.controller.View1" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.uxap" xmlns:m="sap.m" xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core"><ObjectPageLayout id="idOPL"><headerTitle><ObjectPageHeader objectTitle="Contract Requisition Form" /></headerTitle><sections><ObjectPageSection title="Contract Information"><subSections><ObjectPageSubSection class="sapUIContentPadding"><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.ContractInfo" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="Scope of Work"><subSections><ObjectPageSubSection><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.ScopeOfWork" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="HSSE"><subSections><ObjectPageSubSection><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.HSSE" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="Sourcing Strategy"><subSections><ObjectPageSubSection><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.SourcingStrategy" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="Source Justification"><subSections><ObjectPageSubSection><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.SourceJustification" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection title="Contractor\'s Pre-Qualification Status"><subSections><ObjectPageSubSection><core:Fragment fragmentName="ncoc.eprocurement.crffioriapp.view.fragments.PreQualification" type="XML" /></ObjectPageSubSection></subSections></ObjectPageSection></sections><footer><m:OverflowToolbar><m:ToolbarSpacer /><m:Button type="Accept" text="Accept"/><m:Button type="Reject" text="Reject"/><m:Button type="Success" text="Save" press="onSave" /><m:Button text="Cancel/Clear" /></m:OverflowToolbar></footer></ObjectPageLayout></mvc:View>\n',
	"ncoc/eprocurement/crffioriapp/view/fragments/ContractInfo.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="generalInfoSmartForm" editable="true"><smartForm:layout><smartForm:ColumnLayout columnsM="2" columnsL="3" columnsXL="4" /></smartForm:layout><smartForm:Group label="General Information"><smartForm:GroupElement label="Directorate"><smartField:SmartField value="{Directorate}" id="idDirectorate" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Request Date"><smartField:SmartField value="{Request_Date}" id="idRequest_Date"><smartField:configuration><smartField:Configuration controlType="datePicker" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="Contract Holder"><smartField:SmartField value="{Contract_Holder}" id="idContract_Holder" /></smartForm:GroupElement><smartForm:GroupElement label="Contract Title"><smartField:SmartField value="{Contract_Title}" id="idContract_Title" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Contractor\'s Name"><smartField:SmartField value="{Contractor_Name}" id="idContractor_Name" /></smartForm:GroupElement><smartForm:GroupElement label="Contract Number"><smartField:SmartField value="{Contract_Number}" id="idContract_Number" /></smartForm:GroupElement><smartForm:GroupElement label="Contracting Strategy"><smartField:SmartField value="{Contract_Strategy}" id="idContract_Strategy" /></smartForm:GroupElement><smartForm:GroupElement label="Estimated Contract Value (in Contract currency)"><smartField:SmartField value="{Est_Cont_Value}" id="idEstContValue" /></smartForm:GroupElement><smartForm:GroupElement label="Estimated Contract Cuurency"><smartField:SmartField value="{Contract_Currency}" id="idEstContCurr" /></smartForm:GroupElement><smartForm:GroupElement label="Estimated Contract Value (In USD)"><smartField:SmartField value="{Est_Cont_Value_USD}" id="idEstContValUSD" /></smartForm:GroupElement><smartForm:GroupElement label="Estimated Contingency (in Contract currency)"><smartField:SmartField value="{Est_Contigency}" id="idEstContigency" /></smartForm:GroupElement><smartForm:GroupElement label="Cost Object (WBS/WBE, Cost Centre)"><smartField:SmartField value="{Cost_Object}" id="idCostObject" /></smartForm:GroupElement><smartForm:GroupElement label="Estimated Local Content (%)"><smartField:SmartField value="{Est_Local_Content}" id="idEstLocalContent" /></smartForm:GroupElement><smartForm:GroupElement label="LTPO No."><smartField:SmartField value="{LTPO_No}" id="idLTPO" /></smartForm:GroupElement><smartForm:GroupElement label="Forecast Contract Duration"><smartField:SmartField value="{Forecast_Contract_Duration}" id="idForecastContDuration" /></smartForm:GroupElement><smartForm:GroupElement label="Planned Start Date"><smartField:SmartField value="{Planned_Start_Date}" id="idPlanStartDate"><smartField:configuration><smartField:Configuration controlType="datePicker" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="Planned End Date"><smartField:SmartField value="{Planned_End_Date}" id="idPlanEndDate"><smartField:configuration><smartField:Configuration controlType="datePicker" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>\n',
	"ncoc/eprocurement/crffioriapp/view/fragments/HSSE.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="idHSSE" editable="true"><smartForm:Group><smartForm:GroupElement label="HSSE Risk"><smartField:SmartField value="{HSSE_Risk}" id="idHSSERisk" mandatory="true"><smartField:configuration><smartField:Configuration controlType="dropDownList" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement></smartForm:Group><smartForm:Group><smartForm:GroupElement label="HSSE MS Influenece"><smartField:SmartField value="{HSSE_ME_Influence}" id="idHSSEIfluence" mandatory="true"><smartField:configuration><smartField:Configuration controlType="dropDownList" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement></smartForm:Group><smartForm:Group ><smartForm:GroupElement label="HSSE Category Justification"><smartField:SmartField value="{HSSE_Cat_Justification}" id="idHSSECatJust" mandatory="true" /></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>\n',
	"ncoc/eprocurement/crffioriapp/view/fragments/PreQualification.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="idPreQualification" editable="true"><smartForm:Group><smartForm:GroupElement label="Commodity Code"><smartField:SmartField value="{Commodity_Code}" id="idCommCode" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Pre-Qualification Status"><smartField:SmartField value="{Prequalification_Status}" id="idPreQuali" mandatory="true" /></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>',
	"ncoc/eprocurement/crffioriapp/view/fragments/ScopeOfWork.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="idScopeOfWork" editable="true"><smartForm:Group><smartForm:GroupElement label="Description of works, services and/or materials"><smartField:SmartField value="{Description_WSM}" id="idDrescWSM" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Optional Scope"><smartField:SmartField value="{Optional_Scope}" id="idOptionalScope" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Government Intermediary Scope"><smartField:SmartField value="{Gov_Inter_Scope}" id="idGovInterScope" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Risks, constrains and sensitivities"><smartField:SmartField value="{RCS}" id="idRCS" mandatory="true" /></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>',
	"ncoc/eprocurement/crffioriapp/view/fragments/SourceJustification.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="idSourceJustification" editable="true"><smartForm:Group><smartForm:GroupElement label="Sole Source or Single Source Justification"><smartField:SmartField value="{Source_Justification}" id="idSrcJustification" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Detailed explanation of Single/Sole Source Justification"><smartField:SmartField value="{Detail_Expln_Sourc_Just}" id="idDetailExplnSrcJust" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Other contracting options considered"><smartField:SmartField value="{Other_Cont_Optn_Considered}" id="idOthContOptn" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Details of other NCOC N.V. Contracts awarded to Contractor"><smartField:SmartField value="{Detail_NCOC_Contract_Award}" id="idDtlNCOCContAward" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Performance of Contractor under other NCOC N.V. Contracts"><smartField:SmartField value="{Perf_Contractor_NCOC_Cont}" id="idPerfContNCOC" mandatory="true" /></smartForm:GroupElement><smartForm:GroupElement label="Consequences of non-approval by NCOC N.V. respective Contracts Board"><smartField:SmartField value="{Consq_Non_App_NCOC_Contract_Board}" id="idConsqNCOCBoard" mandatory="true" /></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>',
	"ncoc/eprocurement/crffioriapp/view/fragments/SourcingStrategy.fragment.xml":'<core:FragmentDefinition xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartForm="sap.ui.comp.smartform" xmlns:smartField="sap.ui.comp.smartfield"><smartForm:SmartForm id="idSourcingStrategy" editable="true"><smartForm:Group><smartForm:GroupElement label="Strategy"><smartField:SmartField value="{Strategy}" id="idStrategy" mandatory="true"><smartField:configuration><smartField:Configuration controlType="dropDownList" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="TEP (Scoring Matrix) Technical Evaluation Applicable"><smartField:SmartField value="{TEP}" id="idTEP" mandatory="true"><smartField:configuration><smartField:Configuration controlType="checkBox" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="Technical evaluations question(s) Technical Evaluation Applicable"><smartField:SmartField value="{TEA}" id="idTEA" mandatory="true"><smartField:configuration><smartField:Configuration controlType="checkBox" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="Technical Evaluation Not applicable"><smartField:SmartField value="{TE_NA}" id="idTENA" mandatory="true"><smartField:configuration><smartField:Configuration controlType="checkBox" /></smartField:configuration></smartField:SmartField></smartForm:GroupElement><smartForm:GroupElement label="Technical Evaluation Question(s)"><smartField:SmartField value="{TEQ}" id="idTEQ" mandatory="true" /></smartForm:GroupElement></smartForm:Group></smartForm:SmartForm></core:FragmentDefinition>\n'
}});
