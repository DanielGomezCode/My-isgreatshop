import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-three',
  templateUrl: './house-three.component.html',
  styleUrls: ['./house-three.component.sass']
})
export class HouseThreeComponent implements OnInit {
  
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
