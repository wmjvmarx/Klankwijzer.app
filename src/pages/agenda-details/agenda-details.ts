import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-agenda-details',
  templateUrl: 'agenda-details.html',
})

export class AgendaDetailsPage {

	articleIdentifier: any;
	article: {};

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  		this.articleIdentifier = this.navParams.get('articleIdentifier');	
		this.http.get('https://beta.klankwijzer.nl/app/read/agenda/'+this.articleIdentifier).map(res => res.json()).subscribe(
		data => {
		    
		    if(!data.artikel){
		    	this.navCtrl.popToRoot();
		    }

		    this.article = data.artikel;
		},
	    err => {
	        this.navCtrl.popToRoot();
	    });
  	}

  	goBack() {
		this.navCtrl.pop();
	}	

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AgendaDetailsPage');
  	}

}
