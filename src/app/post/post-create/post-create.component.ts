import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = "";
  enteredDescription = "";
  posts = [];

  onPostAdded(){
    console.log('enteredTitle',this.enteredTitle);
    console.log('enteredDescription',this.enteredDescription);
  }

  constructor() { }

  ngOnInit() {
  }

}
