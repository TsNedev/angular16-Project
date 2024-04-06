import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AutService } from 'src/app/services/aut.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 
  constructor(
    public autService: AutService,
    public routing: AppRoutingModule,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  logout() {
    this.autService.logout();
    this.router.navigate(['/home']);
  }
}
