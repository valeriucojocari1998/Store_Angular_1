import { Component, OnInit} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-input-generic',
  templateUrl: './input-generic.component.html',
  styleUrls: ['./input-generic.component.css']
})
export class InputGenericComponent implements OnInit{

  @Input() parentForm: FormGroup | undefined;

  @Input('label') inputLabel: string = '';
  @Input('name') inputName: string = '';
  @Input('type') inputType: string = '';
  @Input('pattern') regEx: string = '';
  @Input() required = true;

  @Input() model: any;
  @Output() modelChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  doit(){
    console.log(this.model)
  }
}
