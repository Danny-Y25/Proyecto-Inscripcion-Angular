import { Component, Input, OnInit } from '@angular/core';
import { Tablet } from 'src/app/domain/tablets';
import { ListTabletwsService } from '../services/list-tabletws.service';

@Component({
  selector: 'app-insert-tablets',
  templateUrl: './insert-tablets.component.html',
  styleUrls: ['./insert-tablets.component.css']
})
export class InsertTabletsComponent implements OnInit {

  TabletGrupo:Tablet=new Tablet;

  constructor(private TabletService: ListTabletwsService) { }

  ngOnInit(): void {
  }

  guardarD(){

    this.TabletService.registrarTablet(this.TabletGrupo).subscribe(data=>{
      console.log(data)
    })
    this.TabletGrupo.codigo=''
    this.TabletGrupo.laboratorio=''
    this.TabletGrupo.nombre=''
  }

}
