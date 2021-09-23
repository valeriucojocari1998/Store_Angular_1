import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  text2: string = ''
  ngOnInit(): void {
  }
  show(){
    console.log(this.text2)
  }

}
