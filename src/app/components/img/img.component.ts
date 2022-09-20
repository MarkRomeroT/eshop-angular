import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit {


  @Input() img:string = 'valor inciial';

  imgaeDefault = 'https://www.libreriahuequito.com/public/images/productos/default.png';

  constructor() { }

  ngOnInit(): void {
  }


  imgError(){
      this.img = this.imgaeDefault;
  }

}
