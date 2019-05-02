import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule, Routes } from '@angular/router';

import { Option1Component } from './option1/option1.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { Option4Component } from './option4/option4.component';
import { HomeComponent } from './home/home.component';
import { MycustombarComponent } from './option2/mycustombar/mycustombar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'option1', component: Option1Component },
  { path: 'option2', component: Option2Component },
  { path: 'option3', component: Option3Component },
  { path: 'option4', component: Option4Component },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Option1Component,
    Option2Component,
    Option3Component,
    Option4Component,
    HomeComponent,
    MycustombarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
