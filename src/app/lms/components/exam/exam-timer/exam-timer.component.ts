import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exam-timer',
  templateUrl: './exam-timer.component.html',
  styleUrls: ['./exam-timer.component.scss']
})
export class ExamTimerComponent implements OnInit {

  @Input() duration;
  @Output() submitExam = new EventEmitter<boolean>();
  private timeLeft: number = -10;
  private interval;

  private startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else if(this.timeLeft === -10) {
        this.timeLeft = this.duration;
      } else {
        this.submitExam.emit(true);
        clearInterval(this.interval);
      }
    }, 1000)
  }

  public toHoursMinutesSeconds() {
    const hours = Math.floor(this.timeLeft / 3600);
  const minutes = Math.floor((this.timeLeft % 3600) / 60);
  const seconds = this.timeLeft % 60;
    let result = `${minutes
      .toString()
      .padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
    if (!!hours) {
      result = `${hours.toString()}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return result;
  };

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

}
