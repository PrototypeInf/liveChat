import { Component, OnInit } from '@angular/core';
import { MessageHubService } from '../message-hub.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageHubService: MessageHubService) { }

  ngOnInit() {
     this.messageHubService.startConnection();
  }
}
