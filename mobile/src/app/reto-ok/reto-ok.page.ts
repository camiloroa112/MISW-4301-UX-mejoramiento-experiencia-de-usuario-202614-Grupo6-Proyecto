import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-reto-ok',
  templateUrl: './reto-ok.page.html',
  styleUrls: ['./reto-ok.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RetoOkPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
