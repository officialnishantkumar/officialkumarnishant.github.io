import { Component } from '@angular/core';
import { User } from '../../user.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public user!: User; // our model

  ngOnInit() {       // we will initialize our form here
    this.user = {
      name: '',
      address: {
        street: '',
        postcode: '' // set default value to 8000
      }
    };
  }
  save(model: User, isValid: boolean) {
    // check if model is valid// if valid, call API to save customer
    console.log(model, isValid);
  }
}
