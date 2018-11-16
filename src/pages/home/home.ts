import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	posts: any;
	vacatures: any;
	ads: any;

  	constructor(public navCtrl: NavController, public http: Http) {
	  	
	  	this.http.get('https://beta.klankwijzer.nl/app/home').map(res => res.json()).subscribe(data => {
		    this.posts = data.nieuws;
		    this.vacatures = data.vacatures;
		});

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		const requestOptions = new RequestOptions({ headers: headers });

		let postData = JSON.stringify({
			pagina: "voorpagina"
		});

		this.http.post('https://beta.klankwijzer.nl/app/get_advertenties', postData, requestOptions)
			.map(res => res.json())
			.subscribe(data => {
					if(data.success){
						this.ads = data.ads;
						console.log(this.ads);
					}
				}, error => {
					console.log(error);
				});
	}

	readNieuwsArticle(articleIdentifier){
		this.navCtrl.push('NieuwsDetailsPage', {articleIdentifier: articleIdentifier});
	}

	readVacatureArticle(articleIdentifier){
		this.navCtrl.push('VacatureDetailsPage', {articleIdentifier: articleIdentifier});
	}
}