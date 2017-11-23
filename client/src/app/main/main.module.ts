import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [HomeComponent, RegisterComponent]
})
export class MainModule { }
