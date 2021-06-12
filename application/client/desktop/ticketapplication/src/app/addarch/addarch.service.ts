import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class AddarchService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(ticket): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/ticket', ticket);
    }
    typesGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/types');
    }
    severityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity');
    }
}