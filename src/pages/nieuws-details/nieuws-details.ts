import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-nieuws-details',
  templateUrl: 'nieuws-details.html',
})

export class NieuwsDetailsPage {
	
	articleIdentifier: any;
	article: {};

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

		this.articleIdentifier = this.navParams.get('articleIdentifier');	
		this.http.get('https://beta.klankwijzer.nl/app/read/nieuws/'+this.articleIdentifier).map(res => res.json()).subscribe(
		data => {
		    this.article = data.artikel;
		    if(!this.article){
		    	this.navCtrl.popToRoot();
		    }

		    console.log(this.article);
		},
	    err => {
	        this.navCtrl.popToRoot();
	    });
	}

	goBack() {
		this.navCtrl.pop();
	}	

    ionViewDidLoad() {
    	console.log('ionViewDidLoad NieuwsDetailsPage');
  	}

}
