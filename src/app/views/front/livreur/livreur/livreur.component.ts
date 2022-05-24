import {HttpClient } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
              dataArray:any                           
  constructor(private ds:DataService){
    
    this.ds.getallcommands().subscribe(data=>this.dataArray=data)// put data from function getallcommands in variable dataarray


  }
  

  ngOnInit(): void {
  }

}
