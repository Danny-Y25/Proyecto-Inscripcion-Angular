import { Component, Input, OnInit } from '@angular/core';
import { Tablet } from 'src/app/domain/tablets';
import { ListTabletwsService } from '../services/list-tabletws.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-tablets',
  templateUrl: './update-tablets.component.html',
  styleUrls: ['./update-tablets.component.css']
})
export class UpdateTabletsComponent implements OnInit {

  TabletGrupo:Tablet=new Tablet;
  TabletGrupo2:Tablet=new Tablet;
  
  constructor(private TabletService: ListTabletwsService, private _route: ActivatedRoute) { }

   ide: string=""
   ide1: number=0


  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id)

    this.ide = `${id}`
    this.ide1==Number(this.ide)
    this.TabletGrupo.id=Number(this.ide)
    this.cargartablet();
  }

  guardarD(){

    this.TabletService.update(this.TabletGrupo).subscribe(data=>{
      console.log(data)
    })
  
  window.location.href="Listar-Tablets.html"

  }
  tablets:any

  cargartablet(){
    this.TabletService.buscarTablet(this.TabletGrupo.id).subscribe(tabletas=>{
      this.TabletGrupo2=tabletas
      this.TabletGrupo.nombre=this.TabletGrupo2.nombre
      this.TabletGrupo.laboratorio=this.TabletGrupo2.laboratorio
      this.TabletGrupo.codigo=this.TabletGrupo2.codigo
    })
  }

  

}
