import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {KeycloakService} from 'keycloak-angular';
import {OrderService} from '../service/orderService/order.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    currentUser: User;
    login: Promise<boolean>;

    constructor(private router: Router,
                private keycloakAngular: KeycloakService,
                private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.login = this.keycloakAngular.isLoggedIn();
    }

    toProfile() {
        const roles = this.keycloakAngular.getUserRoles();
        if (roles.includes('admin')) {
            this.router.navigateByUrl('/noorders');
        } else if (roles.includes('client')) {
            this.router.navigateByUrl('/app-menu');
        }
    }

    logout() {
        this.keycloakAngular.logout();
    }

}
