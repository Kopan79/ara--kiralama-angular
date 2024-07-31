import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { FormsModule } from '@angular/forms'; // Bunu ekleyin

import { CreateItemComponent } from './create-item/create-item.component';
import { DataService } from './data.service';
import { DeleteCarComponent } from './delet-car/delet-car.component';



@NgModule({
  declarations: [
    AppComponent,
    EditCarComponent,
    CreateItemComponent,
    DeleteCarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
