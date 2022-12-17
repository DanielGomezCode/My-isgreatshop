import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-six',
  templateUrl: './tech-six.component.html',
  styleUrls: ['./tech-six.component.sass']
})
export class TechSixComponent implements OnInit{

  constructor() {}

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
