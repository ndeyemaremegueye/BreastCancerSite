import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depistage',
  templateUrl: './depistage.component.html',
  styleUrls: ['./depistage.component.css']
})
export class DepistageComponent implements OnInit {
  imagePath: string = 'assets/images/BIOPSIE.jpg';
  text: string = 'BIOPSIE';

  constructor() { }

  ngOnInit(): void {
  }

}
