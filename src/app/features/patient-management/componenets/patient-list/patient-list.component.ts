// patient-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ColumnDefinition } from 'src/app/shared/components/generic-grid/generic-grid.component';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients = [
    { id: 1, name: 'John Doe', gender: 'Male', age: 35, phone: '9876543210', email: 'john@example.com', registrationDate: new Date() },
    { id: 2, name: 'Jane Smith', gender: 'Female', age: 28, phone: '8765432109', email: 'jane@example.com', registrationDate: new Date() }
  ];

  patientColumns: ColumnDefinition[] = [
    { key: 'id', header: '#', sortable: true },
    { key: 'name', header: 'Name', sortable: true },
    { key: 'gender', header: 'Gender' },
    { key: 'age', header: 'Age', sortable: true },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'Email' },
    { key: 'registrationDate', header: 'Reg. Date', isDate: true }
  ];

  ngOnInit() {}
}
