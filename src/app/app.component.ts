import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  title = 'aracKiralamaApp2';

  
showForm3: any;
toggleFrom3() {
  this.showForm3 = !this.showForm3
}


deleteId: any;

  showForm = false;
  toggleFrom(){
    this.showForm = !this.showForm
  }
  

data: any;
 
 
 constructor(private dataService: DataService,private router: Router) { }

 ngOnInit(): void {
 
  this.getData();

}

  

  getData(): void {
    this.dataService.getData().subscribe({
      next: (result) => {
        this.data = result;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  editCar(id: number): void {
    // API'yi düzenleme işlemi yapacak olan fonksiyon
    console.log('Edit car with ID:', id);
    this.router.navigate(['/edit-car', id]);
   
    
  }

  deleteCar(id : any){ 
    
    this.dataService.deleteCar(id).subscribe(res =>{ 
     
    }) 
    location.reload();
  }


  

}

