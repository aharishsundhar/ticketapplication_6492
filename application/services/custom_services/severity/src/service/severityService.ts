import { Request, Response } from 'express';
import {severityDao} from '../dao/severityDao';
import { CustomLogger } from '../config/Logger'
let severity = new severityDao();

export class severityService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpGetAllValues')
     
     severity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpCreate')
     const  severityData = req.body;
     severity.GpCreate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpCreate')
         callback(response);
         });
    }


}