import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/srvices/authadmin.service';
import { AuthCoursierService } from 'src/app/views/srvices/authcoursier.service';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


dataresive:any
 
constructor(private route:Router, private authAdminService:AuthadminService,private authCoursierService:AuthCoursierService ) {
  if(!localStorage.getItem('token')){
    this.route.navigate(['/login/'])
  }
  if(this.authAdminService.loggedIn()==true){
    this.route.navigate(['/profile/'])
  }
  if(this.authAdminService.loggedIn()==true){
    this.route.navigate(['/admin/dashboard/']);
  }
  if(this.authCoursierService.loggedIn()==true){
    this.route.navigate(['/coursier/home/']);
  }



 }

ngOnInit(): void {
  
 }
 loginadmin(f:any){
  let data=f.value
  this.authAdminService.login(data).subscribe((Response:any)=>
{

this.dataresive=Response
this.authAdminService.saveDataProfile(this.dataresive.token,this.dataresive.data.user.role,this.dataresive.data.user.name,this.dataresive.data.user._id);
if(Response.data.user.role == 'admin') this.route.navigate(['/admin/dashboard/']);
else if(Response.data.user.role == 'client') this.route.navigate(['/profile/']);

else if(Response.data.user.role == 'employee') this.route.navigate(['/coursier/home/']);

},err=>console.log(err))






}

}


