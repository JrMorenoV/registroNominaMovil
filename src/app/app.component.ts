import { Component } from '@angular/core';
import { IonMenu, IonicModule } from '@ionic/angular';
import { GeneralesModule } from './generales/generales.module';
import { FormGroup, FormGroupDirective, FormRecord, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, GeneralesModule, ReactiveFormsModule,  ],
})
export class AppComponent {
  constructor() {}
}