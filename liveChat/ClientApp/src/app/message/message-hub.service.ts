import { Injectable, Inject } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface MessageModel {
  name: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageHubService {

  public msg: Observable<MessageModel>;

  private _hubConnection: signalR.HubConnection;
  private _msgSubject: Subject<MessageModel>;
  private _url: string;

  constructor(
    @Inject('BASE_URL') private _baseUrl: string
  ) {
    this._url = _baseUrl + 'messageHub';
    this._msgSubject = new Subject<MessageModel>();
    this.msg = this._msgSubject.asObservable();
  }

  public startConnection () {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this._url)
      .build();

    this._hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.error('SignalR error while starting connection: ' + err));
  }

  public stopConnection() {
    this._hubConnection.stop();
  }

  public sendForAll(message: MessageModel) {
    this._hubConnection.invoke<MessageModel>('BroadcastMessage', message);
  }

  public addMessageListener() {
    this._hubConnection.on('message', (msg: MessageModel) => {
      console.log(msg);
      this._msgSubject.next(msg);
    });
  }
}
