import { Component, OnInit } from '@angular/core';
import { AddarchService } from './addarch.service';

@Component({
  selector: 'app-addarch',
  templateUrl: './addarch.component.html',
  styleUrls: ['./addarch.component.scss'],
})

export class AddarchComponent implements OnInit {
    typesitemArray: any = [];
    severityitemArray: any = [];
    public ticket = {
        name: '',
        description: '',
        types: '',
        severity: '',
    }

    constructor (
        private addarchService: AddarchService,
    ) { }

    ngOnInit() {
    }
    typesGpGetAllValues() {
        this.addarchService.typesGpGetAllValues().subscribe(data => {
            this.typesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.addarchService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.addarchService.GpCreate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.types = ''
 	 	this.ticket.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}