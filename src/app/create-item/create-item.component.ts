// create-item.component.ts
import { Component, ɵɵqueryRefresh } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent {
// onDelete(arg0: string) {
// throw new Error('Method not implemented.');
// }
  item = {
    id: '',
  marka: '',
  model: '',
  tipi: '',
  resim :'' ,
  vitesTuru: '',
  yakitTuru: '',
  gunlukUcret:'',
  kisiSayisi: '',
  kapiSayisi: '',
  klimaBilgisi: '',
  };
arac: any;
  itemForm: any;



constructor(private fb: FormBuilder, private dataService: DataService) { }

ngOnInit(): void {
  
}

test(): void {
  this.itemForm = this.fb.group({
    
    marka: this.item.marka,
    model: this.item.model,
    tipi: this.item.tipi,
    resim :this.item.resim ,
    vitesTuru: this.item.vitesTuru,
    yakitTuru: this.item.yakitTuru,
    gunlukUcret: this.item.gunlukUcret,
    kisiSayisi: this.item.kisiSayisi,
    kapiSayisi: this.item.kapiSayisi,
    klimaBilgisi: this.item.klimaBilgisi,
    
    });

}

onSubmit(): void  { 
debugger;
  this.ngOnInit();
  this.test();
  if (this.itemForm.valid) {
    this.dataService.createItem(this.itemForm.value)
    .subscribe((response: any) => {
      console.log('Item created successfully!', response);
      // Başarılı işlem sonrası yapılacak işlemler
    }, (error: any) => {
      // console.error('Error creating item', error);
    });
    
  }
  location.reload();

}


}


