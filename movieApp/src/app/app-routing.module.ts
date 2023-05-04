import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { SeriesComponent } from './series/series.component';
import { LiveTVComponent } from './live-tv/live-tv.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'addMovie',component:AddMovieComponent},
  {path:"bollywood",component:BollywoodComponent},
  {path:"hollywood",component:HollywoodComponent},
  {path:"series",component:SeriesComponent},
  {path:"live",component:LiveTVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
