import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl:string = "http://127.0.0.1:8001/api/providers";
  // injection de dependence
  constructor(private http : HttpClient) { }


  listproviders(){
    return this.http.get(this.baseUrl);
  }
}
