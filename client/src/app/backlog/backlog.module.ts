import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogItemComponent } from './backlog-item/backlog-item.component';
import { BacklogComponent } from './backlog/backlog.component';
import { RouterModule } from '@angular/router';
import { backlogRoutes } from './backlog.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(backlogRoutes)
  ],
  declarations: [BacklogItemComponent, BacklogComponent]
})
export class BacklogModule { }
