import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delet-car.component.html',
  styleUrls: ['./delet-car.component.css']
})
export class DeleteCarComponent {
  deleteId: string | undefined; 
  constructor(private dataService: DataService) { }

  deleteCar(id : any){
    this.dataService.deleteCar(id).subscribe(res =>{
      console.log(res);
      location.reload();
    })
  }

  
}
