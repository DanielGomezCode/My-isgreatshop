import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-whatsapp',
  templateUrl: './btn-whatsapp.component.html',
  styleUrls: ['./btn-whatsapp.component.sass']
})
export class BtnWhatsappComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
    function irArriba(){
      window.addEventListener('scroll', function(){
          var scroll = document.documentElement.scrollTop;
          console.log(scroll)
          var botonWhats = document.getElementsByClassName('btn-whats')[0]
  
          if(scroll > 100){
              botonWhats.classList.add('window')
          }else{
              botonWhats.classList.remove('window')
          }
  
      })
  }
  
  irArriba()
  
  }
}
