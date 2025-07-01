import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PawServiceService {

  constructor(private http:HttpClient) { }

  getAllPaws(): Observable<any> {
    return this.http.get("http://localhost:8083/paw/getAllPaws")
  }
}
