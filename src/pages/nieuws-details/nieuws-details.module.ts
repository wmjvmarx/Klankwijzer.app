import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NieuwsDetailsPage } from './nieuws-details';

@NgModule({
  declarations: [
    NieuwsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NieuwsDetailsPage),
  ],
})
export class NieuwsDetailsPageModule {}
