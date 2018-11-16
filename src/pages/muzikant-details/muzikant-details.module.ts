import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuzikantDetailsPage } from './muzikant-details';

@NgModule({
  declarations: [
    MuzikantDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MuzikantDetailsPage),
  ],
})
export class MuzikantDetailsPageModule {}
