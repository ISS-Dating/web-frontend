import {Component, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public currentUser: User;

  constructor(
    private authService: AuthService
  ) {
    this.currentUser = authService.currentUserValue;
  }


  ngOnInit(): void {

  }

  sendMessage(textArea: string): void {

    const liElement = document.createElement('li');
    const divElement = document.createElement('div');
    const spanTime = document.createElement('span');
    const textElement = document.createElement('div');
    liElement.className = 'clearfix';
    divElement.className = 'message-data align-right';
    spanTime.className = 'message-data-time';
    textElement.className = 'message other-message float-right';
    divElement.style.cssText = ' margin-bottom: 15px; text-align: right;';
    textElement.style.cssText = ' background: #94C2ED; float: right;color: white;\n' +
      '  padding: 18px 20px;\n' +
      '  line-height: 26px;\n' +
      '  font-size: 16px;\n' +
      '  border-radius: 7px;\n' +
      '  margin-bottom: 30px;\n' +
      '  width: 90%;\n' +
      '  position: relative;';

    liElement.appendChild(divElement);
    divElement.appendChild(spanTime);
    liElement.appendChild(textElement);

    spanTime.innerText = this.currentUser.name;
    textElement.innerText = textArea;

    const elementById = document.getElementById('ul-list');
    elementById.appendChild(liElement);

  }

}
