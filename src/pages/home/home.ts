import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HobiPage } from '../hobi/hobi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  lihatMakam(){
    this.navCtrl.push(HobiPage)
  }

}
