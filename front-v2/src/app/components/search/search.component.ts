import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public currentUser: User;
  timeLeft = 60;
  interval;


  constructor(
    private authService: AuthService
  ) {
    this.currentUser = authService.currentUserValue;
  }


  ngOnInit(): void {
    document.getElementById('load').style.display = 'none';
    document.getElementById('gallery').style.display = 'none';
  }

  animateLoading(time: number): void{
    setTimeout(() => {
      document.getElementById('load').style.display = 'none';

      document.getElementById('gallery').style.display = 'block';

    }, time);
  }


  startSearch(): void {

    document.getElementById('load').style.display = 'block';
    document.getElementById('start-button').style.display = 'none';

    this.animateLoading(1000);

    this.startTimer();
  }

  sendQuestions(): void {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('load').style.display = 'block';
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.sendQuestions();
      }
    }, 1000);
  }

}
