import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  image = '/assets/numbers/number0.jpg';
  generatedNum = 0;
  listOfGeneratedNum: string[] = [];
  mySet = new Set<string>();
  htmlGeneratedNum = '';

  getRandomNumber() {
    let max = 30;
    let min = 0;
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.info(randomNum);
    this.image = '/assets/numbers/number' + randomNum + '.jpg';
    this.generatedNum = randomNum;

    this.listOfGeneratedNum.push(randomNum.toString());

    this.mySet.add(randomNum.toString());

    this.htmlGeneratedNum = Array.from(this.mySet).toString();
    const el = document.createElement('button');

    // ✅ Add text content to element
    el.type = 'button';
    el.innerHTML = randomNum.toString();
   
    
      el.setAttribute('id', this.generatedNum.toString());
      const box = document.getElementById('box');

      box?.appendChild(el);

      el.addEventListener('click', ((event: CustomEvent) => {
        this.mySet.delete(randomNum.toString());

       let element = el;
       el.remove();
       }) as EventListener);
  }
  

  leftNum() {
    console.info(this.generatedNum);
    let prevNum = this.generatedNum - 1;
    this.image = 'assets/numbers/number' + prevNum + '.jpg';
    this.generatedNum = prevNum;
    this.mySet.add(this.generatedNum.toString());
    this.htmlGeneratedNum = Array.from(this.mySet).toString();
    const el = document.createElement('button');

    // ✅ Add text content to element
    el.type = 'button';
    
    el.innerHTML = this.generatedNum.toString();


      el.setAttribute('id', this.generatedNum.toString());
      const box = document.getElementById('box');

      box?.appendChild(el);
    
  }

  rightNum() {
    console.info(this.generatedNum);
    let nextNum = this.generatedNum + 1;
    this.image = 'assets/numbers/number' + nextNum + '.jpg';
    this.generatedNum = nextNum;
    this.mySet.add(this.generatedNum.toString());
    this.htmlGeneratedNum = Array.from(this.mySet).toString();

    const el = document.createElement('button');

    // ✅ Add text content to element
    el.type = 'button';
    el.innerHTML = this.generatedNum.toString();

      el.setAttribute('id', this.generatedNum.toString());
      const box = document.getElementById('box');

      box?.appendChild(el);

  }
}
