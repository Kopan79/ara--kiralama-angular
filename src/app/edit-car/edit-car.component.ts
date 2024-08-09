import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';//
import { Arac } from '../arac.model';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  id: number=0;
  arac: any = {};
  car: any;
  carId: any;

  constructor(
    private route: ActivatedRoute,
    private carService: DataService,
    private router: Router
    
    
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.id = +params.get('id')!;
    //   this.getCarById();
    // });
  }


  
  getCarDetails() {
    if (this.carId) {
      this.carService.getCarById(this.carId).subscribe((data: Arac) => {
        this.arac = data;
      }, error => {
        console.error('Araç getirilirken hata oluştu', error);
      });
    } else {
      alert('Lütfen geçerli bir araç ID girin');
    }
  }

  saveCar(): void {
    
    if (this.arac) {
      this.carService.updateCar(this.arac).subscribe(() => {
        alert('Araç bilgileri başarıyla güncellendi!');
        // İsteğe bağlı olarak sayfayı yenileyebilir veya başka bir işlem yapabilirsiniz
      }, error => {
        console.error('Araç güncellenirken hata oluştu', error);
      });
    }
    location.reload();
  }
}

