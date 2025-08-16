import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'patients',
        loadChildren: () => import('./features/patient-management/patient-management.module').then(m => m.PatientManagementModule)
      },
      {
        path: 'doctors',
        loadChildren: () => import('./features/doctor-management/doctor-management.module').then(m => m.DoctorManagementModule)
      },
      {
        path: 'appointments',
        loadChildren: () => import('./features/appointment/appointment.module').then(m => m.AppointmentModule)
      },
      {
        path: 'medical-records',
        loadChildren: () => import('./features/medical-records/medical-records.module').then(m => m.MedicalRecordsModule)
      },
      {
        path: 'pharmacy',
        loadChildren: () => import('./features/pharmacy/pharmacy.module').then(m => m.PharmacyModule)
      },
      {
        path: 'billing',
        loadChildren: () => import('./features/billing/billing.module').then(m => m.BillingModule)
      },
      {
        path: 'laboratory',
        loadChildren: () => import('./features/laboratory/laboratory.module').then(m => m.LaboratoryModule)
      },
      {
        path: 'radiology',
        loadChildren: () => import('./features/radiology/radiology.module').then(m => m.RadiologyModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'hr',
        loadChildren: () => import('./features/hr-management/hr-management.module').then(m => m.HrManagementModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
