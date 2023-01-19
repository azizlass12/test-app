import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-front-profile-layout',
  templateUrl: './front-profile-layout.component.html',
  styleUrls: ['./front-profile-layout.component.css']
})
export class FrontProfileLayoutComponent implements OnInit {
  username:any
  name:any
    constructor(private route:Router) {
    
    
    // this.username=this.ads.getusername()
    // if(this.ads.loggedIn()==true){
    //     console.log("connected")
    // }else{
    //   this.route.navigate(['/login/'])
    //     console.log('not connected')

    // }
  
      
  
  
    
  
  
    
     }
  
    ngOnInit(): void {
    }
  
    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('username')


      this.route.navigate(['/login/'])
  
    }
    
  
  }
  