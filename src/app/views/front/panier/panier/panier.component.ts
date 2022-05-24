import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  id: any;
  onecmdArray: any;
  commande: any;
  commandesArray: any = [];

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    // if( history.state)
    //  this.commande = history.state 
    // this.roter.navigate(['/profile/panier',{state:{data:this.tosend}}]) // put this instriction in parent component 

    }  }

 
