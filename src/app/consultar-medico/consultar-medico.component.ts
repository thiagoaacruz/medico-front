import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-medico',
  templateUrl: './consultar-medico.component.html',
  styleUrls: ['./consultar-medico.component.css']
})
export class ConsultarMedicoComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }

//atributos para armazenas os dados dos medicos
medico: any[] = [];


 //metodo de execuçao quando componente é aberto
 ngOnInit(): void {
  this.httpClient.get(environment.apiUrl + '/medico').subscribe(
    (data) => { this.medico = data as any[]; },
    (e) => { console.log(e);

    }
  )
}

  //função para fazer a exclusão do medico na API
  excluir(idMedico:number):void{

    if(window.confirm('Deseja realmente excluir o medico selecionado?')){
      this.httpClient.delete(environment.apiUrl + "/medico/" + idMedico,
      {responseType : 'text'})
      .subscribe(
        (data) =>{

          alert(data); //exibir mensagem em uma janela popup
          this.ngOnInit(); //recarregar a consulta de profissionais

        },
        (e)=>{
          console.log(e);
        }
      )
    }

  }





}
