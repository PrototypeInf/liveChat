import { Injectable, Inject } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class MessageHubService {

  private hubConnection: signalR.HubConnection;
  private _url: string;

  constructor(
    @Inject('BASE_URL') private _baseUrl: string
  ) {
    this._url = _baseUrl + 'messageHub';
  }

  public startConnection () {
    console.log(this._url);
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this._url)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.error('SignalR error while starting connection: ' + err));
  }
}
