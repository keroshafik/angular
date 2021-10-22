import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css']
})
export class AdvancedFormComponent implements OnInit {
  constructor() {}
  advancedForm! : FormGroup; 
  ngOnInit(): void {
    this.advancedForm = new FormGroup({
      name : new FormControl('',Validators.required),
      userName : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmPassword : new FormControl('',Validators.required)


    })
  }

  get formControls()
  {
   return this.advancedForm.controls
  }
  sendData()
  {
    console.log(this.advancedForm);
    // console.log(this.formControls);


  }

}
