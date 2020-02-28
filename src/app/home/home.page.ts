import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Verification} from '../model/verification';
import {Router} from '@angular/router';
import {ApiCmrService} from '../service/api-cmr.service';
import {Pensionne} from '../model/pensionne';
import {Duree} from '../model/duree';
import {AlertController} from '@ionic/angular';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {


    public verf = new Verification();
    public pensionne = new Pensionne();
    public duree = new Duree;


    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private apiCmr: ApiCmrService,
                public alertController: AlertController,
    ) {

    }

    get numPensionne() {
        return this.registrationForm.get('numPension');
    }

    get date() {
        return this.registrationForm.get('date');
    }

    get photoUrl() {
        return this.registrationForm.get('photoUrl');
    }

    public errorMessages = {
        numPension: [
            {type: 'required', message: 'Name is required'},
            {type: 'maxlength', message: 'Name cant be longer than 8 number'},
            {type: 'minlength', message: 'Name cant be shorter than 8 number'}
        ],
        date: [
            {type: 'required', message: 'Date is required'}
        ],
        photoUrl: [
            {type: 'required', message: 'You have to upload a photo'},
        ]
    };


    registrationForm = this.formBuilder.group({
        numPension: ['',
            [Validators.required,
                Validators.maxLength(8),
                Validators.minLength(8)]],
        date: ['', [Validators.required]],
        photoUrl: ['', [Validators.required]]
    });


    public submit() {
        console.log(this.verf);
        this.verification();

        // console.log(this.registrationForm.value);
        /*   this.apiCmr.createVerification(this.verf).subscribe(response => {
               console.log('-------------------------------------------------');
               this.router.navigate(['home']);
           });*/


    }


    verification() {

        this.apiCmr.getPensionne(this.verf.numPensionne).subscribe((response) => {
            this.pensionne = response;
        });

        this.apiCmr.getDuree().subscribe((response) => {
            this.duree = response;
        });

        let numPensionneStocker: number = this.pensionne.numPensionne;
        let numPensionneSaisir: number = this.verf.numPensionne;
        console.log('***********debut**********************************');
        console.log('numPensionneStocker',numPensionneStocker);
        console.log('numPensionneSaisir',numPensionneSaisir);

        let date = this.verf.date;
        let dd = this.duree.dateDebut;
        let df = this.duree.dateFin;

        console.log('datesaise avant transf*****',date);
        console.log('datedebut avant transf*****',dd);
        console.log('datefin avant transf*****',df);
        // let t = df.split('-');


        var datesaise = new Date(date);
        var datedebut = new Date(dd);
        var date_fin = new Date(df);
        // var date_fin = new Date(parseInt(t[2], 10), parseInt(t[1], 10), parseInt(t[0], 10));


        console.log('datesaise*****', datesaise);
        console.log('datedebut*****', datedebut);
        console.log('datefin*****', date_fin);

        console.log('*****************fin****************************');


        /*

        if (numPensionneSaisir == numPensionneStocker) {
            console.log('c"est bien pour numero');
            alert('c"est bien pour numero');
        } else {
            console.log('le numero de pensionne n"exist pas');
            alert('le numero de pensionne n"exist pas');
        }
        if (datesaise.getTime() >= datedebut.getTime() && datesaise.getTime() <= date_fin.getTime()) {
            console.log('c"est bien pour la date');
            alert('c"est bien pour la date');
        } else {
            console.log('date est hors l"interval');
            alert('date est hors l"interval ');
        }

    */
    }


}



