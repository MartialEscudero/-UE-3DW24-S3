import { Component, OnInit } from '@angular/core';
import { UserCreate } from 'src/app/models/user-create.model';
import { CreateService } from 'src/app/services/create.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

    user?: UserCreate;

    constructor(private createService : CreateService) { }

    ngOnInit(): void { }

    createUser(): void {

        var inputFirstname = (document.getElementById("UserFirstname") as HTMLInputElement);
        var inputLastname = (document.getElementById("UserLastname") as HTMLInputElement);
        var msgInfo = (document.getElementById("msgInfo") as HTMLBodyElement);
        var msg = (document.getElementById("msg") as HTMLBodyElement);

        var objUser = {
            firstname  : inputFirstname.value, 
            lastname : inputLastname.value
        }

        inputFirstname.value = ""
        inputLastname.value = ""

        this.createService.postUser(objUser)
        .subscribe(
            data => {
                this.user = data
                msgInfo.classList.remove('d-none')
                msg.innerHTML = 'Utilisateur <b>' + objUser.firstname + ' ' + objUser.lastname + '</b> ajouté.'
                setTimeout(() => {
                    msgInfo.classList.add('d-none')
                 }, 5000);
        },error => {
            console.log(error)
        });

    }

}