import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../serviços/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  id: string;
  editForm: FormGroup;
  submitted = false;
  nome: string;
  situacao: string;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firestoreService.getFuncionario(this.id).subscribe(funcionario => {
      // ALGUM PROBLEMA FEZ COM QUE funcionario.nome NÃO CARREGASSE NA PÁGINA
      this.nome = funcionario.nome;
      this.editForm = this.formBuilder.group({
        nome: [this.nome, Validators.required],
        nascimento: [funcionario.nascimento, Validators.required],
        ultimaEdicao: [new Date(), Validators.required],
        nomePai: [funcionario.nomePai, Validators.required],
        nomeMae: [funcionario.nomeMae, Validators.required],
        sexo: [funcionario.sexo],
        estadoCivil: [funcionario.estadoCivil],
        naturalidade: [funcionario.naturalidade, Validators.required],
        identidade: [funcionario.identidade, Validators.required],
        expedicao: [funcionario.expedicao, Validators.required],
        orgaoEmissor: [funcionario.orgaoEmissor, Validators.required],
        cpf: [funcionario.cpf, Validators.required],
        tituloEleitor: [funcionario.tituloEleitor, Validators.required],
        zonaEleitoral: [funcionario.zonaEleitoral, Validators.required],
        seccaoEleitoral: [funcionario.seccaoEleitoral, Validators.required],
        nis: [funcionario.nis],
        sus: [funcionario.sus],
        endereco: [funcionario.endereco],
        numero: [funcionario.numero],
        bairro: [funcionario.bairro],
        cidade: [funcionario.cidade],
        celular: [funcionario.celular],
        email: [funcionario.email],
        matricula: [funcionario.matricula, Validators.required],
        admissao: [funcionario.admissao, Validators.required],
        demissao: [funcionario.demissao],
        setor: [funcionario.setor],
        cargo: [funcionario.cargo],
        cbo: [funcionario.cbo],
        banco: [funcionario.banco],
        agencia: [funcionario.agencia],
        conta: [funcionario.conta],
        situacao: [funcionario.situacao, Validators.required],
        observacao: [funcionario.observacao]
      });
    });
  }

  get f() { return this.editForm.controls; }

  updateFuncionario() {
    this.submitted = true;
    const funcionario = this.editForm.value;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    this.firestoreService.updateFuncionario(funcionario);
    this.router.navigate(['funcionario/' + this.id]);
  }
}
