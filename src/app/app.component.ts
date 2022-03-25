import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailWindSample';
  isCategoryMenuShow="hidden" ;
  category=["Woman", "Man","Kid","accessory" ]

  categoryMenuClick(){
    if( this.isCategoryMenuShow =="block")
    this.isCategoryMenuShow = "hidden";
    else if( this.isCategoryMenuShow =="hidden")
    this.isCategoryMenuShow = "block";
  }
}
