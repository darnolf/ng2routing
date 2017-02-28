import { Component } from '@angular/core';

@Component({
  template: `<h1>{{pageTitle}}</h1>`,
})
export class Page1Component  { pageTitle:string = 'Page 1' }