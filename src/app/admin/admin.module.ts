import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    EditPageComponent,
    CreatePageComponent,
    DashboardPageComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '', component: AdminLayoutComponent, children: [
        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
        { path: 'login', component: LoginPageComponent },
        { path: 'dashboard', component: DashboardPageComponent },
        { path: 'create', component: CreatePageComponent },
        { path: 'post/:id/edit', component: EditPageComponent }
      ]
    }]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminModule {}
