import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  usuario: any;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUser();
    console.log(this.usuario);
  }
}
