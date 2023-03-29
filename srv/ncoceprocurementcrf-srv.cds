using ncoc.eprocurement.crfandcompanyestimates as crf from '../db/ncoceprocurementcrf-model';

service CRFANDESTIMATEService {
    entity CRFHeaderFields             as select from crf.CRFHeaderFields;
    entity CompanyEstimatesHeaderItems as select from crf.CompanyEstimatesHeaderItems;
    entity CompanyEstimation           as select from crf.CompanyEstimation;
}


annotate CRFANDESTIMATEService.CompanyEstimation with @(UI : {LineItem : [
    {

        Value : ItemNo,
        Label : 'ItemNo'
    },
    {

        Value : Item_Group,
        Label : 'Item_Group'
    },
    {

        Value : Item_Category,
        Label : 'Item_Category'
    },
    {

        Value : Plant,
        Label : 'Plant'
    },
    {

        Value : Storage_Loc,
        Label : 'Storage_Loc'
    },
    {

        Value : MaterialID,
        Label : 'MaterialID'
    },
    {

        Value : Description,
        Label : 'Description'
    },
    {

        Value : ServiceNo,
        Label : 'ServiceNo'
    },
    {

        Value : Quantity,
        Label : 'Quantity'
    },
    {

        Value : UoM,
        Label : 'UoM'
    },
    {

        Value : Total,
        Label : 'Total'
    },
    {

        Value : Currecny,
        Label : 'Currecny'
    }

]

});
