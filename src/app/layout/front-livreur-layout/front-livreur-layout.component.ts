import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/srvices/authuser.service';

@Component({
  selector: 'app-front-livreur-layout',
  templateUrl: './front-livreur-layout.component.html',
  styleUrls: ['./front-livreur-layout.component.css']
})
export class FrontLivreurLayoutComponent implements OnInit {

  constructor(private ads:AuthuserService,private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')


    this.route.navigate(['/login/'])

  }

}
