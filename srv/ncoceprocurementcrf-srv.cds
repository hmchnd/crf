using ncoc.eprocurement.crfandcompanyestimates as crf from '../db/ncoceprocurementcrf-model';

service CRFANDESTIMATEService {
    entity CRFHeaderFields as select from crf.CRFHeaderFields;
    entity CompanyEstimatesHeaderItems as select from crf.CompanyEstimatesHeaderItems;
}