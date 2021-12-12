import { Component, OnInit } from '@angular/core';
import { UserUpdate } from 'src/app/models/user-update.model';
import { UpdateService } from 'src/app/services/update.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

    user?: UserUpdate;

    constructor(private updateService : UpdateService) { }

    ngOnInit(): void { }

    updateUser(): void {

        var inputId = (document.getElementById("UserId") as HTMLInputElement);
        var inputFirstname = (document.getElementById("UserFirstname") as HTMLInputElement);
        var inputLastname = (document.getElementById("UserLastname") as HTMLInputElement);
        var msgInfo = (document.getElementById("msgInfo") as HTMLBodyElement);
        var msg = (document.getElementById("msg") as HTMLBodyElement);

        var objUser = {
            id : inputId.value,
            firstname : inputFirstname.value, 
            lastname : inputLastname.value
        }

        inputId.value = ""
        inputFirstname.value = ""
        inputLastname.value = ""

        this.updateService.updateUser(objUser)
        .subscribe(
            data => {
                this.user = data
                msgInfo.classList.remove('d-none')
                msg.innerHTML = 'Utilisateur <b>n°' + objUser.id + '</b> a été mis à jour.'
                setTimeout(() => {
                    msgInfo.classList.add('d-none')
                 }, 5000);
        },error => {
            console.log(error)
        });

    }

}