import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacatureDetailsPage } from './vacature-details';

@NgModule({
  declarations: [
    VacatureDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VacatureDetailsPage),
  ],
})
export class VacatureDetailsPageModule {}
