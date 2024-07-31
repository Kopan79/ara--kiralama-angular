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



showForm2: any;
toggleFrom2() {
  this.showForm2 = !this.showForm2
}

deleteId: any;
onDelete() {
throw new Error('Method not implemented.');
}

  
  showForm = false;
  toggleFrom(){
    this.showForm = !this.showForm
  }
  

data: any;
  // dataService: any;


 // Bileşen içinde kullanılacak metotlar burada tanımlanabilir
 constructor(private dataService: DataService,private router: Router) { }

 ngOnInit(): void {
  console.log("this is a first message from Hayro1");
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
   
    // Burada, düzenleme işlemi için gerekli olan rotaya yönlendirme yapabilirsiniz veya modali açabilirsiniz
  }

 
  

}

