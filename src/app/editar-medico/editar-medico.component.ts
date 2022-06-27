import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})


export class EditarMedicoComponent implements OnInit {
  //atributo
  mensagem: string = '';


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }


  //Função é executada quando a página é aberta
  ngOnInit(): void {
    //capturar o id enviado pela URL
  const idMedico = this.activatedRoute.snapshot.paramMap.get('id') as string;

  //consultar o medico na API através do id
  this.httpClient.get(environment.apiUrl + "/medico/" + idMedico).subscribe(

    (data:any) =>{

      //preenchendo os campos do formulário com os dados do medico
      this.formEdicao.patchValue(data);

    },
    (e) =>{
      console.log(e);
    }

  )

  }

  //montando a estrutura do formulário
  formEdicao = new FormGroup({
  //campos do formulário...seerão os mesmo campos
  //que temos na consulta....

  idMedico: new FormControl(''),
  nome: new FormControl('',[Validators.required]),
  crm: new FormControl('',[Validators.required]),
  telefone: new FormControl('',[Validators.required]),
  tipo: new FormControl('',[Validators.required]),

});


get form():any{

  return this.formEdicao.controls;

}



//função para fazer a camada do edição na API
onSubmit():void{

  this.httpClient.put(environment.apiUrl + '/medico', this.formEdicao.value,
  {responseType: 'text'})
  .subscribe(
    data => {
      this.mensagem = data;
    },
    e =>{

      this.mensagem = "Ocorreu um erro, a edição não foi realizada."
      console.log(e);

    }

  )

}

}
