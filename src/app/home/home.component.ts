import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

 public allBlogs;


  constructor(public blogService:BlogService) {
    console.log("Home Component constructor called");
   }

  ngOnInit() {
    console.log("home component oninit called");
    this.allBlogs = this.blogService.getAllBlogs();
  }

  ngOnDestroy(){
    console.log("home component destroyed");
  }

}
