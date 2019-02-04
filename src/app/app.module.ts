import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3Parent/scenario3.component';
import { Scenario3ChildComponent } from './scenario3/scenario3-child/scenario3-child.component';
import { Scenario4ChildComponent } from './scenario4/scenario4-child/scenario4-child.component';
import { Scenario4parentComponent } from './scenario4/scenario4parent/scenario4parent.component';
import { Scenario5childComponent } from './scenario5/scenario5child/scenario5child.component';
import { Scenario5parentComponent } from './scenario5/scenario5parent/scenario5parent.component';
import { Scenario5grandparentComponent } from './scenario5/scenario5grandparent/scenario5grandparent.component';
import { Scenario6ParentComponent } from './scenario6/scenario6-parent/scenario6-parent.component';
import { Scenario6Siblling1Component } from './scenario6/scenario6-siblling1/scenario6-siblling1.component';
import { Scenario6Siblling2Component } from './scenario6/scenario6-siblling2/scenario6-siblling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario3ChildComponent,
    Scenario4ChildComponent,
    Scenario4parentComponent,
    Scenario5childComponent,
    Scenario5parentComponent,
    Scenario5grandparentComponent,
    Scenario6ParentComponent,
    Scenario6Siblling1Component,
    Scenario6Siblling2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
