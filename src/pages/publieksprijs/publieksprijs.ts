import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-publieksprijs',
  templateUrl: 'publieksprijs.html',
})
export class PublieksprijsPage {
	stemronde: any;
	ads: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private geolocation: Geolocation) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		const requestOptions = new RequestOptions({ headers: headers });

		let postData = JSON.stringify({
			pagina: "interactief"
		});

		this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
			.map(res => res.json())
			.subscribe(data => {
					if(data.success){
						this.ads = data.ads;
					}
				}, error => {
					console.log(error);
				});
  	}

  	ngAfterViewInit(){

		console.log('afterViewInit called');

		this.geolocation.getCurrentPosition().then( res => {
			console.log(res.coords.latitude);
			console.log(res.coords.longitude);

			var headers = new Headers();
		    headers.append('Content-Type', 'application/x-www-form-urlencoded');
		    const requestOptions = new RequestOptions({ headers: headers });

		    let postData = JSON.stringify({
	            lat: res.coords.latitude, long: res.coords.longitude
	    	});

		    this.http.post("https://beta.klankwijzer.nl/app/check_stemronde", postData, requestOptions)
		    	.map(res => res.json())
		      	.subscribe(data => {
		        	if(data.success){
		        		console.log(data);
		        		this.stemronde = data.stemronde;
		        	}
		        }, error => {
		        	console.log(error);
		      	});

		}).catch( err => {
			console.log(err);
		});
	}

	stemStemronde(identifier){
		this.navCtrl.push('StemmenPage', {identifier: identifier});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad PublieksprijsPage');
	}

}
