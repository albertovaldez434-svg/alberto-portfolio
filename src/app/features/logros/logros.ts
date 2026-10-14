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
  protected readonly copy = {
    label: $localize`:@@achievements.label:Logros y aportes`,
    titleFirst: $localize`:@@achievements.titleFirst:Una trayectoria,`,
    titleSecond: $localize`:@@achievements.titleSecond:muchas formas de aportar.`,
    intro: $localize`:@@achievements.intro:Un resumen de la experiencia y el alcance de los proyectos en los que he participado.`,
  };

  protected readonly achievements: Achievement[] = [
    {
      number: '08',
      title: $localize`:@@achievements.yearsTitle:Años de trayectoria`,
      description: $localize`:@@achievements.yearsDescription:Una etapa profesional de septiembre de 2017 a febrero de 2026 en Corporativo TUFESA.`,
      tag: $localize`:@@achievements.yearsTag:Trayectoria`,
    },
    {
      number: '05',
      title: $localize`:@@achievements.projectsTitle:Proyectos destacados`,
      description: $localize`:@@achievements.projectsDescription:Participación en iniciativas web, móviles, corporativas y herramientas para equipos internos.`,
      tag: $localize`:@@achievements.projectsTag:Proyectos`,
    },
    {
      number: '360°',
      title: $localize`:@@achievements.reachTitle:De cara al usuario y a la operación`,
      description: $localize`:@@achievements.reachDescription:Experiencia en soluciones para pasajeros, choferes y staff, además de plataformas corporativas.`,
      tag: $localize`:@@achievements.reachTag:Alcance`,
    },
  ];
}
