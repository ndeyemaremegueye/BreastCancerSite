import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule, NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  providers: [NgbCarouselConfig],
  styles: [
  ]
})
export class AccueilComponent implements OnInit {

  // constructor() { }
  // currentIndex = 0;
  // images = [
  //   'assets/images/femme1.png',
  //   'assets/images/femme.png',
  //   'assets/images/femme1.png'
  // ];

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }

  // previousSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  carouselItems = [
    {
      image: 'assets/images/femme1.png',
      caption: 'Image 1',
      description: 'Description de l\'image 1'
    },
    {
      image: 'assets/images/femme.png',
      caption: 'Image 2',
      description: 'Description de l\'image 2'
    },
    {
      image: 'assets/images/femme1.png',
      caption: 'Image 3',
      description: 'Description de l\'image 3'
    }
  ];

  

  ngOnInit(): void {
  }

}

