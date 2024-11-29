//src\app\menu-lateral\menu-lateral.component.ts
import { Component, Input, Output, EventEmitter, HostListener, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Input() isLeftSidebarCollapsed: boolean = false;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  screenWidth = signal<number>(0);

  items = [
    {
      routeLink: '/inicio-pagina',
      icon: 'fal fa-home',
      label: 'Inicio'
    },
    {
      routeLink: '/crear-requerimiento',
      icon: 'fal fa-box-open',
      label: 'Crear Requerimiento'
    },
  ];
  
  logRoute(route: string): void {
    console.log('Navegando a:', route);
  }

  
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.screenWidth.set(window.innerWidth);
    }
  }

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  @HostListener('window:resize')
  onResize() {
    if (typeof window !== 'undefined') {
      this.screenWidth.set(window.innerWidth);
      if (this.screenWidth() < 768) {
        this.changeIsLeftSidebarCollapsed.emit(true);
      }
    }
  }
}