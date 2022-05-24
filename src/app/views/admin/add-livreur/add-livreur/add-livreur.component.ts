
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-add-livreur',
  templateUrl: '././add-livreur.component.html',
  styleUrls: ['./add-livreur.component.css']
})
export class AddLivreurComponent implements OnInit {

  constructor(private ds:DataService ,private route:Router) { }

  ngOnInit(): void {
  }
// add(f:any){
// let data=f.value
// console.log(data)
// this.ds.addliveur(data).subscribe(data=>{
//   this.route.navigate(['/admin/livreurs'])
//   })

//  }
// 
}