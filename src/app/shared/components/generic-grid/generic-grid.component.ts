// generic-grid.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ColumnDefinition {
  key: string;      // The field name in the object
  header: string;   // Column header text
  sortable?: boolean;
  isDate?: boolean; // Optional date formatting
}

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent implements OnInit {
  @Input() columns: ColumnDefinition[] = [];
  @Input() data: any[] = [];
  @Input() actions: boolean = false; // whether to show action buttons

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.key);
    if (this.actions) {
      this.displayedColumns.push('actions');
    }
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
