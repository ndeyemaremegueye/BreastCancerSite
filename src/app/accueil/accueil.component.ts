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
  handleCarouselEvents(event: any) {
    console.log(event);
  }
  ngOnInit(): void {
  }

  images = [
    {src: '/assets/breast-cancer.png'},
    {name:'femme.png'},
    {name:'femme1.png'}
  ]

  

  // carouselItems = [
  //   {
  //     image: 'assets/images/femme1.png',
  //     caption: 'Image 1',
  //     description: 'Description de l\'image 1'
  //   },
  //   {
  //     image: 'assets/images/femme.png',
  //     caption: 'Image 2',
  //     description: 'Description de l\'image 2'
  //   },
  //   {
  //     image: 'assets/images/femme1.png',
  //     caption: 'Image 3',
  //     description: 'Description de l\'image 3'
  //   }
  // ];

  

  

}

