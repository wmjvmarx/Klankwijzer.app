import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const baseUrl = "https://beta.klankwijzer.nl/app/";

@Injectable()
export class AdvertentiesProvider {

  constructor(public http: Http) {
    
  }

  getAds(pagina){
    var ads = false;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = JSON.stringify({
          pagina: pagina
    });

    this.http.post(baseUrl + "get_advertenties", postData, requestOptions)
      .map(res => res.json())
        .subscribe(data => {
          if(data.success){
            ads = data.ads;
            console.log(ads);
          }
        }, error => {
          console.log(error);
        });
    return ads;
  }
}
