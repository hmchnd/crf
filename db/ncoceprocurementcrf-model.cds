namespace ncoc.eprocurement.crfandcompanyestimates;
using {
    managed,
    temporal
} from '@sap/cds/common';


entity CRFHeaderFields : managed {
Directorate: String;

    
}

entity CompanyEstimatesHeaderItems: managed {
ItemNo : String;
ItemCategory:String;
MaterialDesc:String(2);
}

entity CompanyEstimatesItemDetails: managed {
ServiceNo:String;

}