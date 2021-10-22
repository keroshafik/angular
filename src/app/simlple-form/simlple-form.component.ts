import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-simlple-form',
  templateUrl: './simlple-form.component.html',
  styleUrls: ['./simlple-form.component.css']
})
export class SimlpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  testForm(form : any)
  {
    console.log(form)
  }

}
