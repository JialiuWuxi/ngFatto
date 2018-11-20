import { Component, OnInit } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loggedIn: boolean;
  private subscription: Subscription;

  constructor(private authService: MsalService, private broadcastService: BroadcastService ) { 

    if(this.authService.getUser())
     {
       this.loggedIn = true;
     }
    else {
      this.loggedIn = false;
    }
  }

  login(){
    this.authService.loginRedirect(["user.read"]);
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
      console.log(JSON.stringify(payload));
      this.loggedIn = true;
    });

    this.broadcastService.subscribe("msal:loginFailure", (payload) => {
      console.log(JSON.stringify(payload));
      this.loggedIn = false;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.broadcastService.getMSALSubject().next(1);
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
