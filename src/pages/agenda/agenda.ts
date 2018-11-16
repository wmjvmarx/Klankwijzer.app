import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

	page = 0;
	nPages = 0;
	posts: any;
	ads: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	
  		this.http.get('https://beta.klankwijzer.nl/app/agenda').map(res => res.json()).subscribe(data => {
		    this.posts = data.agenda;
		    this.page = this.page+1;
		    this.nPages = data.paginas;
		});

		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		const requestOptions = new RequestOptions({ headers: headers });

		let postData = JSON.stringify({
			pagina: "agenda"
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

  	readAgendaArticle(articleIdentifier){
		this.navCtrl.push('AgendaDetailsPage', {articleIdentifier: articleIdentifier});
	}

	doInfinite(infiniteScroll) {
	    console.log('Begin async operation');
	    
	    setTimeout(() => 	{
	    	this.http.get('https://beta.klankwijzer.nl/app/agenda?page='+this.page).map(res => res.json()).subscribe(data => {
	    			if(data.agenda){
	    				for(let i=0; i < data.agenda.length; i++) {
			            	this.posts.push(data.agenda[i]);
			           	}
			           	this.page = this.page+1;	
	    			}				    
				});
		  		
			console.log('Async operation has ended');
      		infiniteScroll.complete();
	    }, 500);
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AgendaPage');
  	}

}
