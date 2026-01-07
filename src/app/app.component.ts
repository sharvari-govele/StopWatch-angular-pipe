import { Component } from '@angular/core';
import { TimePipe } from './time.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TimePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter: number = 0;
  setRef: any;
  startResume: string = 'START';
  isStart: boolean = false;
  isPause: boolean = false;
  lapList:any=[]
  start() {
    this.isStart = true;
    this.isPause = false;
    this.setRef = setInterval(() => {
      this.counter += 10;
    }, 10);
  }
  pause() {
    this.isPause = true;
    clearInterval(this.setRef);

  }
  lap() { 
    this.lapList.push(this.counter)
  }
  reset() {
    this.counter = 0;
    this.isStart = false;
    clearInterval(this.setRef);
    this.lapList=[]

  }
  resume() {
    this.isPause = false;
    this.setRef = setInterval(() => {
      this.counter += 10;
    }, 10);
  }

  ngOnDestroy() {
    this.reset(); // Prevent memory leaks
  }
}
