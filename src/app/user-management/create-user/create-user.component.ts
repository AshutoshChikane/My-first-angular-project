import { Component, NgModule } from '@angular/core';
import {UserdataCreateService } from '../../my-service/userdata-create-service/userdata-create.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  standalone: false,
  
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  constructor(private my_req: UserdataCreateService, private route: Router){}
  onSubmit(data: any){
    const name: string = data.name;
    const phone: number = data.phone;
    const email:string = data.email;

    this.my_req.postData(name,phone,email).subscribe({
      next: (response) => {
        console.log('Response:', response); // Log the entire response
        console.log('Status:', response?.status);;
        if (response.status === 201) {
          this.route.navigate(['projects/user-list']);
        }
      },
      error: (error) => {
        console.error("Error occurred", error);
        alert('An error occurred while submitting the data. Please try again later.');
      },
      complete: () => {
        console.log('Request complete');
      }
    });
  }

  task = {
    name: '',
    phone: '',
    email: ''
  }
}
