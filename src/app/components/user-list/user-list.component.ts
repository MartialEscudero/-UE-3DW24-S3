import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    user?: Users;

    constructor(private userService : UserService) { }

    ngOnInit(): void { }

    getUser(): void {

        var input = (document.getElementById("UserId") as HTMLInputElement);
        var msg = (document.getElementById("msgId") as HTMLBodyElement);

        // On récupère la valeur du input
        var userId = parseInt(input.value);

        input.value = "";

        // On test si c'est bien un nombre
        if (!Number.isNaN(userId)) {
            this.userService.getOne(userId)
            .subscribe(
                data => {
                    this.user = data;
                    if (!this.user) (msg.innerHTML = "Cet <b>ID</b> ne correspond à aucun utilisateur.")
            },error => {
                console.log(error)
            });
        } else {
            msg.innerHTML = "Cet <b>ID</b> ne correspond à aucun utilisateur."
        }
    }

}