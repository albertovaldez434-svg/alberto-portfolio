import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Achievement {
  number: string;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-logros',
  imports: [],
  templateUrl: './logros.html',
  styleUrl: './logros.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logros {
  protected readonly achievements: Achievement[] = [
    {
      number: '08',
      title: 'Años de trayectoria',
      description:
        'Una etapa profesional de septiembre de 2017 a febrero de 2026 en Corporativo TUFESA.',
      tag: 'Trayectoria',
    },
    {
      number: '05',
      title: 'Proyectos destacados',
      description:
        'Participación en iniciativas web, móviles, corporativas y herramientas para equipos internos.',
      tag: 'Proyectos',
    },
    {
      number: '360°',
      title: 'De cara al usuario y a la operación',
      description:
        'Experiencia en soluciones para pasajeros, choferes y staff, además de plataformas corporativas.',
      tag: 'Alcance',
    },
  ];
}
