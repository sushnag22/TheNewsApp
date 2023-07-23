import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardsComponent } from './news-cards.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NewsCardsComponent],
  imports: [CommonModule, IonicModule],
  exports: [NewsCardsComponent]
})
export class NewsCardsModule { }
