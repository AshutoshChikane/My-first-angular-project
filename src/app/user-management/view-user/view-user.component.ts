import { Component , NgModule} from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserServiceService } from '../../my-service/user-data-service/user-service.service';

export interface data_user {
  id: number;
  name: string;
  phone: number;
  email: string;
  }


@Component({
  selector: 'app-view-user',
  standalone: false,
  
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent {
  dataa: data_user[] = [];
  constructor(private my_data: UserServiceService){}

  ngOnInit():void{
    this.my_data.getMessage().subscribe((response)=>{
      console.log(response)
      this.dataa = response;
    })
  }

}
