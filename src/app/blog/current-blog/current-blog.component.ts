import { Component, OnInit, Input } from '@angular/core';
import { DomZdravljaService } from 'src/app/dom-zdravlja.service';
import { AuthService } from 'src/app/auth.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'dz-current-blog',
  templateUrl: './current-blog.component.html',
  styleUrls: ['./current-blog.component.css']
})
export class CurrentBlogComponent implements OnInit {

  @Input() post: Blog;

  constructor(private dz:DomZdravljaService, authService:AuthService) { }

  ngOnInit() {
  }
 /* saveChanges(){
    this.dz.savePosts(this.post)
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}*/

}
