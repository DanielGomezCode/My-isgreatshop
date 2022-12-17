import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beauty-eich',
  templateUrl: './beauty-eich.component.html',
  styleUrls: ['./beauty-eich.component.sass']
})
export class BeautyEichComponent implements OnInit{

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
