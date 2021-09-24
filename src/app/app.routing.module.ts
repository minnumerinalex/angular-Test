import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';

export const HomeRoutes = [{ path: 'patient', Component: PatientComponent }];

@NgModule({
  imports: [RouterModule.forRoot(HomeRoutes)],
  declarations: [PatientComponent],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
