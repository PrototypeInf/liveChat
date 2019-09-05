import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageHubService } from '../message-hub.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  public msg: string;

  txt: string;

  constructor(private messageHubService: MessageHubService) { }

  ngOnInit() {
    this.messageHubService.startConnection();
    this.messageHubService.addMessageListener();
    this.messageHubService.msg.subscribe((msg) => {
      this.txt = msg.text;
    },
      (err) => this.txt = 'err!!!');
  }

  public sendMessageForAll() {
    this.messageHubService.sendForAll(
      {
        name: 'test3',
        text: this.msg
      }
    );
  }
  ngOnDestroy() {
    this.messageHubService.stopConnection();
  }
}
