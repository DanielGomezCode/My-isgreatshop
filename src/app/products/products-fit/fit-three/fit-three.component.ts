import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fit-three',
  templateUrl: './fit-three.component.html',
  styleUrls: ['./fit-three.component.sass']
})
export class FitThreeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    var lightBox = document.getElementsByClassName('product-lightbox')[0]
    var closeLightbox = document.getElementsByClassName('close-lightbox')[0]
    var openLightbox = document.getElementsByClassName('open-lightbox')[0]
  
    openLightbox.addEventListener('click', function(){
      lightBox.classList.add('active')
    })
    closeLightbox.addEventListener('click', function(){
      lightBox.classList.remove('active')
    })
  }
}
