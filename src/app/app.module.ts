import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponentComponent } from './components/employee-component/employee-component.component';
import { DepartmentComponentComponent } from './components/department-component/department-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponentComponent,
    DepartmentComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
