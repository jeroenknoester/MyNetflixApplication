import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})

export class AddVideoComponent implements OnInit {

  public title: FormControl;
  public description: FormControl;


  constructor() {
    this.title = new FormControl();
    this.description = new FormControl();

   }

  ngOnInit() {
  }

}
