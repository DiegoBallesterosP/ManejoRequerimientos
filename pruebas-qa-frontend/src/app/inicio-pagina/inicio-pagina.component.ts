//src\app\inicio-pagina\inicio-pagina.component.ts
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-inicio-pagina',
  standalone: true,
  imports: [MenuLateralComponent, RouterModule, MainComponent, CommonModule], // Añade CommonModule a los imports
  templateUrl: './inicio-pagina.component.html',
  styleUrl: './inicio-pagina.component.scss',
})
export class InicioPaginaComponent {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  sizeClass(): string {
    if (this.isLeftSidebarCollapsed()) {
      return 'page-content-md-screen'; // Ajusta el contenido cuando el menú está cerrado
    } else if (this.screenWidth() < 768) {
      return 'page-content-md-screen'; // Ajusta el contenido en pantallas pequeñas
    } else {
      return 'page-content-trimmed'; // Ajusta el contenido cuando el menú está abierto
    }
  }

  constructor() {
    if (typeof window !== 'undefined') {
      // Update screenWidth signal on window resize
      window.addEventListener('resize', () => {
        this.screenWidth.set(window.innerWidth);
      });
    }
  }
}