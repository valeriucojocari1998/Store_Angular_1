import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.css']
})
export class FavoriteColorComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  @Input() formType: string = '';

  


  ngOnInit(): void {
    console.log(this.formType)
  }
  ngOnChange(){

  }

  onSubmit(){
  }
}
