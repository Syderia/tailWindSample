import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tailWindSample';
  isCategoryMenuShow="hidden" ;
  category=["Woman", "Man","Kid","Accessory" ]

  clothesData=[
    {
      name:1,
      size:["S","M","L"]
    },
    {
      name:2,
      size:["S","M","L"]
    },
    {
      name:3,
      size:["XS","S","M","L"]
    },
    {
      name:4,
      size:["S","M","L"]
    }, 
    {
      name:5,
      size:["S","M","L"]
    }, 
    {
      name:6,
      size:["S","M","L", "X", "XL"]
    },
    {
      name:7,
      size:["S","M","L"]
    }
    
  ]


  categoryMenuClick(){
    if( this.isCategoryMenuShow =="block")
    this.isCategoryMenuShow = "hidden";
    else if( this.isCategoryMenuShow =="hidden")
    this.isCategoryMenuShow = "block";
  }
}
