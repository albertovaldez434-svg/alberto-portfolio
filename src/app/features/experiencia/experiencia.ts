import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experiencia {
  protected readonly projects: Project[] = [
    {
      number: '01',
      title: 'Sitio corporativo',
      description:
        'Participación en el desarrollo del nuevo sitio corporativo de TUFESA.',
      category: 'Web',
    },
    {
      number: '02',
      title: 'App de pasaje',
      description:
        'Nueva aplicación móvil enfocada en el servicio de pasaje.',
      category: 'Aplicación móvil',
    },
    {
      number: '03',
      title: 'App ATM Medina',
      description:
        'Aplicación para los choferes del servicio de pasaje de ATM Medina en Puerto Vallarta.',
      category: 'Herramienta operativa',
    },
    {
      number: '04',
      title: 'ERP corporativo',
      description:
        'Participación en el proyecto de ERP para las operaciones corporativas.',
      category: 'Sistema corporativo',
    },
    {
      number: '05',
      title: 'App para staff interno',
      description:
        'Herramienta interna para gestionar tickets de soporte técnico, mantenimiento y paquetería.',
      category: 'Herramienta interna',
    },
  ];
}
