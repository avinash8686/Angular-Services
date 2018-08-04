import { Component, OnInit, OnDestroy } from '@angular/core';

// We are activating the route here, bcoz we need to get the id of the blog via the :id
// To get the id we need an Activated Router.
import { ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService) { 
    console.log("blog-view Constructor is called");
  }

  ngOnInit() {
    console.log("blog-view component Oninit called");
  let currentBlogId =  this._route.snapshot.paramMap.get('blogId');
  // Im able to get the blog id by using Activated Route which is formed at 
  // the end of each route completion and added to the routeState.
  console.log(currentBlogId);
   
    this.currentBlog = this.blogService.getCurrentBlog(currentBlogId);
    console.log(this.currentBlog);
    
  }

  ngOnDestroy(){
    console.log("blog-view component destroyed");
  }

  
}
