import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-vacatures',
  templateUrl: 'vacatures.html',
})
export class VacaturesPage {

  page = 0;
	nPages = 0;
	posts: any;
	ads: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
		this.http.get('https://beta.klankwijzer.nl/app/vacatures').map(res => res.json()).subscribe(data => {
		    this.posts = data.vacatures;
		    this.page = this.page+1;
		    this.nPages = data.paginas;
		});

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		const requestOptions = new RequestOptions({ headers: headers });

		let postData = JSON.stringify({
			pagina: "vacatures"
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

  	readVacatureArticle(articleIdentifier){
		this.navCtrl.push('VacatureDetailsPage', {articleIdentifier: articleIdentifier});
	}

	doInfinite(infiniteScroll) {
	    console.log('Begin async operation');
	    
	    setTimeout(() => 	{
	    	this.http.get('https://beta.klankwijzer.nl/app/vacatures?page='+this.page).map(res => res.json()).subscribe(data => {
	    			if(data.vacatures){
	    				for(let i=0; i < data.vacatures.length; i++) {
			            	this.posts.push(data.vacatures[i]);
			           	}
			           	this.page = this.page+1;	
	    			}				    
				});
		  		
			console.log('Async operation has ended');
      		infiniteScroll.complete();
	    }, 500);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacaturesPage');
  }

}
