import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts() {
    this.http.get('/getPosts').subscribe(res => {
      console.log('this', this)
      this.posts = res
    }, err =>{
      console.error(err)
    });
  }


}
