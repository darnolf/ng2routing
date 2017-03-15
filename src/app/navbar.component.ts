import { Component, Inject, OnInit } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service'

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/navbar.component.html',
  styles: [`
      .nav.navbar-nav {font-size: 15px;}
      #searchForm {margin-right: 100px;}
      @media (max-width: 1200px){#sarchForm{display: none;}}
      li > a.active {color: #F97924;}
  `]

})


export class NavBarComponent implements OnInit {

 constructor(@Inject(JQ_TOKEN) private $: any) {}

 ngOnInit() {
   //this.$('.navbar.navbar-default li a').css({'background':'teal', 'color': 'white'});
 }
    
}