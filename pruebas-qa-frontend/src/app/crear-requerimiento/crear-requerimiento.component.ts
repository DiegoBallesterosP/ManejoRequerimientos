//src\app\crear-requerimiento\crear-requerimiento.component.ts
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from '../menu-lateral/menu-lateral.component';
import { MainComponent } from '../main/main.component';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-crear-requerimiento',
  standalone: true,
  imports: [RouterModule, MenuLateralComponent, MainComponent, CommonModule, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
  templateUrl: './crear-requerimiento.component.html',
  styleUrls: ['./crear-requerimiento.component.scss']
})


export class CrearRequerimientoComponent {
  /* Configuración Menu Lateral */
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  sizeClass(): string {
    if (this.isLeftSidebarCollapsed()) {
      return 'page-content-md-screen';
    } else if (this.screenWidth() < 768) {
      return 'page-content-md-screen';
    } else {
      return 'page-content-trimmed';
    }
  }

  constructor(private modalService: NgbModal) {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        this.screenWidth.set(window.innerWidth);
      });
    }

    this.refreshCountries();
  }

  /* Configuración Tabla*/
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[] = []; // Initialize the countries property

  refreshCountries() {
    this.countries = COUNTRIES.map((country, i) => ({ id: i + 1, ...country })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
 

  openModal(content: any) {
    this.modalService.open(content, { size: 'fullscreen' }); // Tamaño extra grande
  }
}

interface Country {
  id?: number;
  nameReq: string;
  state: string;
  modified: string;
  creationDate: Date;
  dateCompleted: Date;
  created: string;
}

const COUNTRIES: Country[] = [
  {
    nameReq: 'creacion modulo',
    state: 'Sin asignar',
    modified: '',
    creationDate: new Date(),
    dateCompleted: new Date(),
    created: 'alex'
  },
  {
    nameReq: 'cliente escritorio',
    state: 'En Desarrollo',
    modified: '',
    creationDate: new Date(),
    dateCompleted: new Date(),
    created: 'Pepe'
  }
];

