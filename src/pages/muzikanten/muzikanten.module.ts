import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MuzikantenPage } from './muzikanten';

@NgModule({
  declarations: [
    MuzikantenPage,
  ],
  imports: [
    IonicPageModule.forChild(MuzikantenPage),
  ],
})
export class MuzikantenPageModule {}
