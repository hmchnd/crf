namespace ncoc.eprocurement.crfandcompanyestimates;
using {
    managed,
    temporal
} from '@sap/cds/common';


entity CRFHeaderFields : managed {
Directorate: String;
Contract_Holder: String;
Contract_Title: String;
Contractor_Name: String;
Contract_Number: Integer;
Request_Date:Date;
Contract_Strategy: String;

    
}

entity CompanyEstimatesHeaderItems: managed {
ItemNo : String;
ItemCategory:String;
MaterialDesc:String(2);
}

entity CompanyEstimatesItemDetails: managed {
ServiceNo:String;

}