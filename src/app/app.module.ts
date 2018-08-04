import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home', component:HomeComponent },
      { path:'about', component:AboutComponent },
      { path:'blog/:blogId', component:BlogViewComponent },
      { path:'edit/:blogId', component:BlogEditComponent },
      { path:'create', component:BlogCreateComponent },
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
