import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/views/srvices/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tosend: any;
  data: any;

  constructor(private route:Router,private ds:DataService) { }

  ngOnInit(): void { this.tosend=this.data
  }
  add(f:any){
    let data=f.value

    console.log(data)
   

    this.ds.addCommand(data).subscribe(data=>{ 


      this.route.navigate(['/profile/panier'],{state:{data:this.tosend}})

      })
    
     }
     

}
