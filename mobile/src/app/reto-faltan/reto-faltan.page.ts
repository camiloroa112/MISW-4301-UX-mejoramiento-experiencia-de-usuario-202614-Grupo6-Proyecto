import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-reto-faltan',
  templateUrl: './reto-faltan.page.html',
  styleUrls: ['./reto-faltan.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RetoFaltanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
