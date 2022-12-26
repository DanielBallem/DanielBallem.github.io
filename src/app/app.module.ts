import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AboutMeComponent } from './about-me/about-me.component'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectsListComponent } from './projects-list/projects-list.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { WorkExperienceListComponent } from './work-experience-list/work-experience-list.component'; 
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsListComponent,
    WorkExperienceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
