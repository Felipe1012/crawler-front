import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormControl, FormGroup, Validators, FormControlDirective, FormBuilder } from '@angular/forms';
import { async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  palabra: FormGroup;
  res_text = [];
  final
  private URL = 'https://crawler-back.us-east.mybluemix.net/api/';
  formData = new FormControl("");
  datos = new FormControl("");
  constructor(private http: Http, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.palabra = this.formBuilder.group({
      datos: this.datos,
    });
  }



  respuesta = [];
  x = "";
  y = ""
  textModelo
  async nlu_text() {
    var datos = (this.palabra.value.datos)
    var salida = {
      "text": datos
    }
this.final=salida
    console.log(salida);
    this.http.post(`${this.URL}upload-text`, salida).subscribe(
      (res) => {

        this.respuesta.push(res.json())
        console.log(this.respuesta)
        console.log(this.x)
        console.log(this.y)
      },
      (err) => {

        console.log(err)
      },
    );


  }
}