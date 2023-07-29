import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { NewsCardComponent } from './news-cards.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
})
export class NewsCardComponentModule {}