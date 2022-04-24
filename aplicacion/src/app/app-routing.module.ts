import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTabletsComponent } from './pages/list-tablets/list-tablets.component';
import { InsertTabletsComponent } from './pages/insert-tablets/insert-tablets.component';
import { UpdateTabletsComponent } from './pages/update-tablets/update-tablets.component';

const routes: Routes = [
  {path: "Listar-Tablets",component:ListTabletsComponent},
  {path: "Insertar-Tablets",component:InsertTabletsComponent},
  {path: "Actualizar-Tablets/:id",component:UpdateTabletsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
