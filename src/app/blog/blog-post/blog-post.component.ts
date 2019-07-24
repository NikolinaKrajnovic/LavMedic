import { Blog } from './../blog.model';
import { Component, OnInit } from '@angular/core';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'dz-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  postoviNiz: Blog [];
  currentPost: Blog;

  constructor(private dz: DomZdravljaService, authService:AuthService) { }




get(){
  this.dz.getPosts()
  .subscribe(
    (response) => {
      this.postoviNiz = response;
    },
    (error) => console.log(error)
  )
}

edit(post){
  this.currentPost = post;
}
openModal(){

}

ngOnInit() { 
   this.get();
}
}

