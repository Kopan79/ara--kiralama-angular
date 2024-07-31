import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCarComponent } from 'src/app/edit-car/edit-car.component';
import { DeleteCarComponent } from './delet-car/delet-car.component';

const routes: Routes = [
 
  { path: 'edit-car/:id', component: EditCarComponent },
  { path: 'delete-car', component: DeleteCarComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // Diğer rotalar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
