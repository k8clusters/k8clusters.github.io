import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  counter: number = 0;
  watchMeForChange: Array<number> = [];
  watchedArray: Observable<number> = of(this.counter);

  constructor() { }

  ngOnInit() {
    this.watchedArray.subscribe(value => {
      this.counter++;
      this.watchMeForChange.push(value);
    })
  }
  tryMe = function () {
    console.log("Pressed Try Me: " + this.counter);
    this.counter++;
    //this.watchedArray.next(this.counter);
  }

}
