import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTabletsComponent } from './pages/list-tablets/list-tablets.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertTabletsComponent } from './pages/insert-tablets/insert-tablets.component';
import { UpdateTabletsComponent } from './pages/update-tablets/update-tablets.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTabletsComponent,
    InsertTabletsComponent,
    UpdateTabletsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
