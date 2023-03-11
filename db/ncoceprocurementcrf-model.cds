namespace ncoc.eprocurement.crfandcompanyestimates;
using {
    managed,
    temporal,
    Currency as curr
} from '@sap/cds/common';


entity CRFHeaderFields : managed {
    @title : 'Directorate'
    Directorate: String;
    @title : 'Contract Holder'
    Contract_Holder: String;
    @title : 'Contract Title'
    Contract_Title: String;
    @title : 'Contractor Name'
    Contractor_Name: String;
    @title : 'Contract Number'
    key Contract_Number: String;
    @title : 'Request_Date'
    Request_Date: Date;
    @title : 'Contract Strategy'
    Contract_Strategy: String;
    @title : 'Contract Currency'
    Contract_Currency: curr;
    @title : 'Exchange Rate Date'
    Exchng_Rate_Date: Date;
    @title : 'Exchange Rate Contract Currecny'
    Exchng_Rate_Cont_Curr: curr;
    @title : 'Estimated Contract Value (In Contract Currency)'
    Est_Cont_Value: Decimal;
    @title : 'Estimated Contract Value in USD'
    Est_Cont_Value_USD: Decimal;
    @title : 'Estimated Contigency (In Contract Currency)'
    Est_Contigency: Decimal;
    @title : 'Cost Object (WBS/WBSE, Cost Center)'
    Cost_Object: String;
    @title : 'Estimated Local Content %'
    Est_Local_Content: Decimal;
    @title : 'LTPO Number'
    LTPO_No: String;
    @title : 'Forecast Contract Duration'
    Forecast_Contract_Duration: String;
    @title : 'Planned Start Date'
    Planned_Start_Date: Date;
    @title : 'Planned End Date'
    Planned_End_Date: Date;
    @title : 'Optional Extension'
    Optional_Extension: String;
    @title : 'Retrospective'
    Retrospective: String;
    @title : 'Description of Work, Service & Material'
    Description_WSM: String;
    @title : 'Optional Scope'
    Optional_Scope: String;
    @title : 'Government Intermediary Scope'
    Gov_Inter_Scope: String;
    @title : 'Risks, Constrains and Sensitivities'
    RCS: String;
    @title : 'HSSE Risk'
    HSSE_Risk: HSSE_Value;
    @title : 'HSSE ME Influence'
    HSSE_ME_Influence: HSSE_Value;
    @title : 'HSSE Category Justification'
    HSSE_Cat_Justification: String;
    @title : 'Competitve Tender'
    Strategy: String;
    @title : 'TEP(Scoring Matrix)'
    TEP: Boolean;
    @title : 'Technical Evaluation Applicable'
    TEA: Boolean;
    @title : 'Technical Evaluation Not Applicable'
    TE_NA: Boolean;
    @title : 'Technical Evaluation Questions'
    TEQ: String;
    @title : 'Source Justification'
    Source_Justification: String;
    @title : 'Detailed Explanation of Single/Source Justification'
    Detail_Expln_Sourc_Just: String;
    @title : 'Other Contracting Options Considered'
    Other_Cont_Optn_Considered: String;
    @title : 'Details of other NCOC Contracts Awarded To Contractor'
    Detail_NCOC_Contract_Award: String;
    @title : 'Performance Of Contractor under NCOC Contracts'
    Perf_Contractor_NCOC_Cont: String;
    @title : 'Consequences of non-approval by NCOC N.V. respective Contracts Board'
    Consq_Non_App_NCOC_Contract_Board: String;
    @title : 'Commodity Code'
    Commodity_Code: String;
    @title : 'Prequalification Status'
    Prequalification_Status: String;
}

entity CompanyEstimatesHeaderItems: managed {
    @title : 'Item Group'
    @description : 'It will group the diffrent description based on numbers'
    key Item_Group: String;
    @title : 'Item No'
    ItemNo : String;
    @title : 'Item Category'
    Item_Category: String;
    @title : 'Material ID'
    MaterialID: String;
    @title : 'Description'
    Description: String;
    @title : 'Unit of Measurement'
    UoM: String(3);
    @title : 'Total Price'
    Total_Price: String;
    @title : 'Currency'
    Currecy: String(3);
    @title : 'Material Group'
    Mat_Group: String;
    @title : 'Plant'
    Plant: String;
    @title : 'Storage Location'
    Storage_Loc: String;
    @title : 'Item Details Line Item'
    @description : 'It will fetch the Line Item Details based on Item Group'
    Item_Details: Composition of many CompanyEstimatesItemDetails on Item_Group = Item_Group
}

entity CompanyEstimatesItemDetails: managed { 
    @title : 'Item Group'
    key Item_Group : Association to CompanyEstimatesHeaderItems;
    @title : 'Line Item No'
    Line_Item: String;
    @title : 'Service No'
    ServiceNo: String;
    @title : 'Short Text'
    Short_Text: String;
    @title : 'Unit of Measurement'
    UoM: String(3);
    @title : 'Unit Price'
    Unit_Price: String;
    @title : 'Currency'
    Currecny: String(3);
    @title : 'Total'
    Total: String;

}

@assert.range
    type HSSE_Value : String enum { High; Medium; Low }

entity CompanyEstimation : managed {
    @title : 'Item No'
    key ItemNo : String;
    @title : 'Item Group'
    @description : 'It will group the diffrent description based on numbers'
    key Item_Group: String;
    @title : 'Item Category'
    key Item_Category: String;
     @title : 'Plant'
    Plant: String;
    @title : 'Storage Location'
    Storage_Loc: String;
    @title : 'Material ID'
    MaterialID: String;
    @title : 'Description'
    Description: String;
    @title : 'Short Text'
    Short_Text: String;
    @title : 'Service No'
    ServiceNo: String;
    @title : 'Quantity'
    Quantity : String;
     @title : 'Unit of Measurement'
    UoM: String(3);
    @title : 'Price'
    Total: String;
    @title : 'Currency'
    Currecny: String(3);
}    