import { Component } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  constructor(private fb: Facebook) { }

  facebook() {
    this.fb.login(['public_profile', 'email'])
        .then((res: FacebookLoginResponse) => {
          alert("login"+JSON.stringify(res));
          this.fb.api('/me?fields=id,first_name,last_name,picture.width(300).height(300)', []).then((user) => {
         alert("data"+JSON.stringify(user));
            this.data = user;
          });
        })
        .catch(err => alert(JSON.stringify(err)));
  }
}
