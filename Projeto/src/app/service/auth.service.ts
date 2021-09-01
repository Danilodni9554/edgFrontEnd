import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

    logar(usuariologin: UsuarioLogin):Observable<UsuarioLogin>{
      return this.http.post<UsuarioLogin>(
        'https://edegracadanilo.herokuapp.com/usuario/logar', usuariologin
      )
    }

    cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(
        'https://edegracadanilo.herokuapp.com/usuario/cadastrar', usuario
      )
    }

}
