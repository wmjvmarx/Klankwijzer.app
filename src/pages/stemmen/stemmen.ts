import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { FavoriteProvider } from './../../providers/favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-stemmen',
  templateUrl: 'stemmen.html',
})
export class StemmenPage {

	stemronde: {};
	opties: {};
	identifier: any;
	vote: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public favoriteProvider: FavoriteProvider, public http: Http) {
  		this.identifier = this.navParams.get('identifier');	

  		this.http.get('https://beta.klankwijzer.nl/app/get_stemronde/'+this.identifier).map(res => res.json()).subscribe(
		data => {
		    
		    if(!data.stemronde){
		    	this.navCtrl.popToRoot();
		    }
			this.stemronde = data.stemronde;
			this.opties = data.stemronde.opties;

			this.favoriteProvider.isVoted(this.stemronde).then(isVoted => {
				this.vote = isVoted;
			});

		    console.log(this.stemronde);
		},
	    err => {
	        this.navCtrl.popToRoot();
	    });
  	}

  	goBack() {
		this.navCtrl.pop();
	}

	makeVote(optie) {
		console.log('vote started');
		this.favoriteProvider.makeVote(this.stemronde, optie).then(() => {
			console.log('vote made: ' + optie);
			  this.vote = optie;
			  console.log('vote: ' + this.vote);
		});
	}

	unVote(){
		console.log('unvote started');
		this.favoriteProvider.unVote(this.stemronde).then(() => {
			console.log('unvote made');
			this.vote = false;
			console.log('vote: ' + this.vote);
		});
	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad StemmenPage');
  	}

}
