import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  videoUrl = 'https://www.youtube.com/embed/MB80ZuIJATI?controls=0&autoplay=1&rel=0';

  ngOnInit() {
  }

  receiveVideo($event) {
    this.videoUrl = $event;
  }
}
