import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input()
  image = "/assets/ZoomBg-0.png";
  image2 = "/assets/ZoomBg-1.png";

  @Input()
  caption = "a catchy caption";
  addToCart = false;
  fontSize = "1em";

  @Output()
  clicked = new Subject<string>()

  private count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  enter(){
    console.info('cursor is INSIDE the image')
    this.fontSize="2em"
    this.addToCart=false
  }

  exit(){
    console.info('cursor is OUTSIDE the image')
    this.fontSize="1em"
    this.addToCart=true
  }
  // printName(){
  //   console.info(this.caption)
  //   this.count+=1
  //   this.count %=2
  //   this.image=`assets/ZoomBg-${this.count}.png`
  //   console.info(this.image)
  // }

  imageClicked(){
    //send the notification OUT
    console.info("clicked")
    this.clicked.next(this.image)
    
  }
}
