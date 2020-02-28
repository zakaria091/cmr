import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Verification} from '../model/verification';
import {Pensionne} from '../model/pensionne';
import 'rxjs/add/operator/map';
import {HTTP} from '@ionic-native/http/ngx';


@Injectable({
    providedIn: 'root'
})
export class ApiCmrService {
    API = 'http://localhost:8080/CmrBack/api';
    res: any;

    constructor(private http: HttpClient) {
    }

    // Http Option
    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json'
        })
    };

    //inserer une verification apres la verification du numPension exist ou non et la date doit etre entre une duree
    createVerification(item): Observable<Verification> {
        return this.http.post<Verification>(this.API + '/insertVerification', JSON.stringify(item), this.httpOptions);
    }

    //chercher a un pension par son id==numPensionne
    getPensionne(id): Observable<Pensionne> {
        return this.http.get<Pensionne>(this.API + '/getPensionne/' + id);


    }

    //returnner la duree from database
    getDuree(): Observable<any> {
        return this.http.get<any>(this.API + '/getDuree');

    }


}
