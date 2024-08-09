import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatWith, Observable } from 'rxjs';
import { Arac } from './arac.model';
import { DeleteCarComponent } from './delet-car/delet-car.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  getItems() {
    throw new Error('Method not implemented.');
  }
  getCarDetails(carId: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:7017/api/Araclar'; // Örnek API URL
  itemForm: any;

  constructor(private http: HttpClient) { }

  getData(): Observable<Arac> {
   
    return this.http.get<Arac>(this.apiUrl);
  }

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCarById(id: number): Observable<Arac> {
    
    return this.http.get<Arac>(`${this.apiUrl}/${id}`);
  }

  updateCar(arac: any): Observable<any> {
    
    return this.http.put<any>(`${this.apiUrl}/${arac.id}`,arac);
  }
  

  createItem(arac: any): Observable<Arac> {
   
    return this.http.post<Arac>(`${this.apiUrl}`, arac);
  }

  deleteCar(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`); 
  }
  
}

