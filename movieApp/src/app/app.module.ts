import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { SeriesComponent } from './series/series.component';
import { LiveTVComponent } from './live-tv/live-tv.component';
import {DropdownModule} from 'primeng/dropdown';

import {TableModule} from 'primeng/table';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HollywoodComponent,
    BollywoodComponent,
    SeriesComponent,
    LiveTVComponent,
    FilterPipePipe,
    HeaderComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    SidebarModule,
    CardModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    ToastModule,
    RippleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
