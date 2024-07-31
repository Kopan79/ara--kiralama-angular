import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delet-car.component.html',
  styleUrls: ['./delet-car.component.css']
})
export class DeleteCarComponent {
  deleteId: string | undefined; // Bu satırı ekleyin

  constructor(private dataService: DataService) { }

  onDelete() {
    if (this.deleteId) {
      this.dataService.deleteItem(this.deleteId).subscribe(
        () => {
          console.log('Item successfully deleted!');
          // Başarı durumunda yapılacak işlemleri buraya ekleyin, örneğin kullanıcıya bir mesaj gösterin
        },
        (error: any) => {
          console.error('There was an error!', error);
          // Hata durumunda yapılacak işlemleri buraya ekleyin, örneğin kullanıcıya bir hata mesajı gösterin
        }
      );
    } else {
      console.error('ID is required to delete an item.');
      // Kullanıcıya bir uyarı mesajı gösterin
    }
    location.reload();
  }
  
}
