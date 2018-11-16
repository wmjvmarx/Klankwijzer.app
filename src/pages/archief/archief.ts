import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-archief',
  templateUrl: 'archief.html',
})
export class ArchiefPage {

  page = 0;
	nPages = 0;
	posts: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private iab: InAppBrowser) {
  		this.http.get('https://beta.klankwijzer.nl/app/archief').map(res => res.json()).subscribe(data => {
		    this.posts = data.archief;
		    this.page = this.page+1;
		    this.nPages = data.paginas;
		});
	}	

  	readUitgave(url){
	  	const options: InAppBrowserOptions = {
			  toolbar: 'yes',
			  location: 'no'
		  }

		const browser = this.iab.create(url, '_system', options)
	}

	doInfinite(infiniteScroll) {
	    console.log('Begin async operation');
	    
	    setTimeout(() => 	{
	    	this.http.get('https://beta.klankwijzer.nl/app/archief?page='+this.page).map(res => res.json()).subscribe(data => {
	    			if(data.archief){
	    				for(let i=0; i < data.archief.length; i++) {
			            	this.posts.push(data.archief[i]);
			           	}
			           	this.page = this.page+1;	
	    			}				    
				});
		  		
			console.log('Async operation has ended');
      		infiniteScroll.complete();
	    }, 500);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchiefPage');
  }

}
