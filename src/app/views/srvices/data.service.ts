import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  id: any;

  constructor(private http: HttpClient) {}

  getallcommands() {
    return this.http.get('http://localhost:3000/v2/commandes/');
  }
  
  getAllClient() {
    return this.http.get('http://localhost:3000/v2/users/');
  }


  addCommand(profile: any) {
    return this.http.post('http://localhost:3000/v2/commandes/', profile);
  }

  getById(id:any) {
    return this.http.get('http://localhost:3000/v2/users/'+id); 
  }

  updateUser(_id:any, data: any) {
    let url = `http://localhost:3000/v2/users/${_id}`;
    return this.http.patch(url, data); 
  }
  


  deletecommande(id:any) {
    return this.http.delete('http://localhost:3000/v2/commandes/'+id); 
  }
  // updateprofilelivreure(id: string, newprofile: any) {
  //   return this.http.patch('http://localhost:3000/v2/users/' + id, newprofile);
  // }
}
