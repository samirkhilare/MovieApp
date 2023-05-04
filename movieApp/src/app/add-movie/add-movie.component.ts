import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieItemService } from '../services/movie-item.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
interface Year {
  year: string;
  code:string;
 }
 interface Genre {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  providers: [MessageService]
})

export class AddMovieComponent implements OnInit {

  constructor (private movieList:MovieItemService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {}
  
  movie!:FormGroup;
  value4:any;
  years: number[] = [];
  
  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 99; i--) {
      this.years.push(i);
    }
    this.primengConfig.ripple = true;
    this.movie =new FormGroup({
      movieName: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required]),
      industry: new FormControl('',[Validators.required]),
      genre:new FormControl('',[Validators.required]),
      addtional: new FormControl('',[Validators.required]),
      postUrl: new FormControl('',[Validators.required])
    })
  }
  
  industries = [
    'Bollywood',
    'Hollywood',
    'Tollywood',
    'Kollywood'
  ];

  genres = [  'Action',  'Comedy',  'Drama'];

  save(){
  this.movieList.addMovie(this.movie.value).subscribe((data:any)=>{
    console.log(data);
    this.ngOnInit();
    this.showSuccess();
    
  })
}
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
}