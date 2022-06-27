import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css']
})
export class CadastrarMedicoComponent implements OnInit {


  //atributo
  mensagem: string = '';

  constructor(private httpCliente: HttpClient) { }




  ngOnInit(): void {
  }


 //estrutura do formulario
 formCadastro = new FormGroup ({
  //campos formulario
  nome: new FormControl('',[Validators.required]),
  crm: new FormControl('',[Validators.required]),
  telefone: new FormControl('',[Validators.required]),
  tipo: new FormControl('',[Validators.required])

})

 //acessando o formulario/pagina HTML pegando dados tela
 get form():any{
  return this.formCadastro.controls;
}


//fazer chamada de cadastro na API
onSubmit(): void{
  this.httpCliente.post(environment.apiUrl+'/medico',
  this.formCadastro.value,{responseType: 'text'}).subscribe(
    data =>{
      this.mensagem = data;
      this.formCadastro.reset();
    },
    e => {
      this.mensagem = "Cadastro nao realizado";
      console.log(e);
    }
  )
}



}
