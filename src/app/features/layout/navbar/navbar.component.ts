import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink,  } from '@angular/router';
import { AuthenSerService } from '../../../core/services/authService/authen-ser.service';


@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false ;
  private authenSerService = inject(AuthenSerService)
  private router = inject(Router)
  ngOnInit(): void {
    this.authenSerService.personData.subscribe((res)=>{

      if (res != null) {

        this.isLogin = true

      }else{
        
      this.isLogin = false
      }

    })
  }
  logout(){
    localStorage.removeItem('userToken')
    this.router.navigate(['/login'])
  this.authenSerService.personData.next(null)

  }
}
