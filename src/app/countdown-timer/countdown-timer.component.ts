import {Component, OnInit, EventEmitter, OnChanges, OnDestroy, Output, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message = "";
  remainingTime: number | undefined;
  @Input()
  seconds = 11;
  @Output()
  finish = new EventEmitter<boolean>();
  private intervalId = 0;

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes['seconds'].currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  clearTime() {
    clearInterval(this.intervalId)
  }

  ngOnInit(): void {
    this.reset();
  }

  ngOnDestroy() {
    this.clearTime();
  }

  start() {
    this.countDown();
    // @ts-ignore
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds
    }
  }
  stop(){
    this.clearTime();
    this.message =` Holding at ${this.remainingTime} seconds`;
  }
  reset(){
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start`;

  }
  private countDown(){
    this.clearTime();
    this.intervalId = window.setInterval(()=>{
      // @ts-ignore
      this.remainingTime -=1;
      if (this.remainingTime === 0){
        this.message = 'Opps';
        this.clearTime();
        this.finish.emit(true);
      }else{
        this.message = `${this.remainingTime} seconds and counting`;
      }
    },1000);
  }


}
