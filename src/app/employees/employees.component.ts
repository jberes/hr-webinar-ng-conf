import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesType } from '../models/northwind/employees-type';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindEmployees: EmployeesType[] = [];
  public financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('EmployeesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
    this.financialService.getData('BoxOfficeRevenueType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialBoxOfficeRevenue = data,
      error: (_err: any) => this.financialBoxOfficeRevenue = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
