import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  visibleSidebar2:any;
  value3:any;
  searchQuery: string = '';
  filteredMovies: any[] = [];

  movies = [
    {url: 'https://static.mirchi.in/thumb/imgsize-33708,msid-96864255,width-800,height-450,resizemode-1/96864255.jpg', alt: 'Slide 1',id:1,title:"Farzi"},
    {url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71KMnxAikbL._SL1352_.jpg', alt: 'Slide 2',id:2,title:"Stranger Things"},
    {url: 'https://thegyanibaba.com/wp-content/uploads/2022/11/image-1-2.jpg', alt: 'Slide 3',id:3,title:"Family Man"},
    {url: 'https://static.moviecrow.com/marquee/money-heist-5-volume-2-set-to-release-with-tamil-telugu-versions/191761_thumb_665.jpg', alt: 'Slide 3',id:4,title:"La Casa De Papel"},
    {url: 'https://english.cdn.zeenews.com/sites/default/files/2022/07/22/1068181-delhi-crime-2-netflix.gif', alt: 'Slide 3',id:5,title:"Delhi Crime"},
    {url: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-131562,resizemode-1,msid-93893454/magazines/panache/ek-villain-returns-to-stream-on-netflix-from-september-9.jpg', alt: 'Slide 3',id:6,title:"Ek Villan"},
    {url: 'https://newsonair.com/wp-content/uploads/2023/01/NPIC-202311014023.jpg', alt: 'Slide 3',id:7,title:"Kashmir Files"},
    {url: 'https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/01/8532b71bb497bcda92a21c52df991c57_original.jpg?impolicy=abp_cdn&imwidth=650', alt: 'Slide 3',id:8,title:"RRR"},
    
  ];

  search(): void {
    const searchQuery = this.searchQuery.toLowerCase();       
    this.filteredMovies = this.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery);
      
    });
    console.log('Search query:', this.searchQuery);
  }
}
