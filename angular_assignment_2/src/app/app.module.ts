import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/Employee.component';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import { ErrorPageComponent } from './Error/Errorpage.component';
import { EmployeeEditComponent } from './Edit/Edit.component';
import { EmployeeDeleteComponent } from './Delete/Delete.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    ErrorPageComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'employees', component: EmployeeListComponent },
      { path: 'add', component: EmployeeComponent },
      { path: 'EditForm/:id', component: EmployeeEditComponent },
      { path: 'Delete/:id', component: EmployeeDeleteComponent},
      { path: '', redirectTo: 'employees', pathMatch: 'full'},
      { path: '**', component:ErrorPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
