import { Component, OnInit } from '@angular/core';
import { UserDelete } from 'src/app/models/user-delete.model';
import { DeleteService } from 'src/app/services/delete.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

    user?: UserDelete;

    constructor(private deleteService : DeleteService) { }

    ngOnInit(): void { }

    deleteUser(): void {

        var inputId = (document.getElementById("UserId") as HTMLInputElement);
        var msgInfo = (document.getElementById("msgInfo") as HTMLBodyElement);
        var msg = (document.getElementById("msg") as HTMLBodyElement);

        var objUser = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                Authorization: 'my-auth-token'
            }),
            body : {
                id : inputId.value,
            }
        }

        this.deleteService.deleteUser(objUser)
        .subscribe(
            data => {
                this.user = data
                msgInfo.classList.remove('d-none')
                msg.innerHTML = 'Utilisateur <b>n°' + objUser.body.id + '</b> a été supprimé.'
                setTimeout(() => {
                    msgInfo.classList.add('d-none')
                 }, 5000);
        },error => {
            console.log(error)
        });

    }

}