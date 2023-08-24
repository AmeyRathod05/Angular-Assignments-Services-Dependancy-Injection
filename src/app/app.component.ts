import { Component , OnInit} from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UserService]
})
export class AppComponent implements OnInit{
  title : 'component-communication/services & dependancy injection assignments';
  accounts : {name: string, status : string}[] = [];

  constructor(private accountsService: AccountsService){}
    
    ngOnInit() {
      this.accounts = this.accountsService.accounts;
    }
}

