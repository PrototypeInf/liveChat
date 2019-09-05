import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message-component/message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: MessageComponent, pathMatch: 'full' },
    ]),
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
