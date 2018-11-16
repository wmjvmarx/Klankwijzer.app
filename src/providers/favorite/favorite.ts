import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Device } from '@ionic-native/device';

@Injectable()
export class FavoriteProvider {

  constructor(public storage: Storage, public http: Http, private device: Device) {}

  isVoted(stemronde) {
    return this.storage.get(stemronde.identifier);
  }

  makeVote(stemronde, optie) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = JSON.stringify({
          stemronde: stemronde.identifier, 
          optie: optie,
          user: this.device.uuid ? this.device.uuid : 't1234567890'
    });

    this.http.post("https://beta.klankwijzer.nl/app/make_vote", postData, requestOptions)
		    	.map(res => res.json())
		      .subscribe(data => {
            
          });

    return this.storage.set(stemronde.identifier, optie);
  }

  unVote(stemronde) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = JSON.stringify({
          stemronde: stemronde.identifier,
          user: this.device.uuid ? this.device.uuid : 't1234567890'
    });

    this.http.post("https://beta.klankwijzer.nl/app/unvote", postData, requestOptions)
		    	.map(res => res.json())
		      .subscribe(data => {
            
          });

    return this.storage.remove(stemronde.identifier);
  }

}
