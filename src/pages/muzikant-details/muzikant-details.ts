import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-muzikant-details',
  templateUrl: 'muzikant-details.html',
})

export class MuzikantDetailsPage {

  articleIdentifier: any;
	article: {};

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

		this.article = this.navParams.get('muzikant');	
	}

	goBack() {
		this.navCtrl.pop();
	}	
  ionViewDidLoad() {
    console.log('ionViewDidLoad MuzikantDetailsPage');
  }

}
