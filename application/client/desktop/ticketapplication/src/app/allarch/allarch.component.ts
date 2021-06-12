import { Component, OnInit } from '@angular/core';
import { AllarchService } from './allarch.service';

@Component({
  selector: 'app-allarch',
  templateUrl: './allarch.component.html',
  styleUrls: ['./allarch.component.scss'],
})

export class AllarchComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },{ headerName: 'Description', field: 'description'  },];
    public ticket = {
        name: '',
        description: '',
        types: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allarchService: AllarchService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allarchService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}