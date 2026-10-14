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
  protected readonly copy = {
    label: $localize`:@@experience.label:Trayectoria profesional`,
    titleFirst: $localize`:@@experience.titleFirst:Construyendo soluciones`,
    titleSecond: $localize`:@@experience.titleSecond:que mueven el día a día.`,
    intro: $localize`:@@experience.intro:Durante ocho años formé parte de proyectos que conectan a las personas, los equipos y la operación diaria de una empresa de transporte.`,
    professional: $localize`:@@experience.professional:Experiencia profesional`,
    yearsFirst: $localize`:@@experience.yearsFirst:años de`,
    yearsSecond: $localize`:@@experience.yearsSecond:experiencia`,
    startMonth: $localize`:@@experience.startMonth:SEP`,
    endMonth: $localize`:@@experience.endMonth:FEB`,
    projects: $localize`:@@experience.projects:Proyectos destacados`,
    projectsIntro: $localize`:@@experience.projectsIntro:Distintas necesidades, un mismo objetivo: hacer más sencilla la operación.`,
    companySummary: $localize`:@@experience.companySummary:Ocho años colaborando en proyectos digitales y sistemas internos para los servicios y equipos de la organización.`,
  };

  protected readonly projects: Project[] = [
    {
      number: '01',
      title: $localize`:@@experience.projectWebsite:Sitio corporativo`,
      description: $localize`:@@experience.websiteDescription:Participación en el desarrollo del nuevo sitio corporativo de TUFESA.`,
      category: $localize`:@@experience.web:Web`,
    },
    {
      number: '02',
      title: $localize`:@@experience.projectPassenger:App de pasaje`,
      description: $localize`:@@experience.passengerDescription:Nueva aplicación móvil enfocada en el servicio de pasaje.`,
      category: $localize`:@@experience.mobile:Aplicación móvil`,
    },
    {
      number: '03',
      title: $localize`:@@experience.projectAtm:App ATM Medina`,
      description: $localize`:@@experience.atmDescription:Aplicación para los choferes del servicio de pasaje de ATM Medina en Puerto Vallarta.`,
      category: $localize`:@@experience.operations:Herramienta operativa`,
    },
    {
      number: '04',
      title: $localize`:@@experience.projectErp:ERP corporativo`,
      description: $localize`:@@experience.erpDescription:Participación en el proyecto de ERP para las operaciones corporativas.`,
      category: $localize`:@@experience.corporateSystem:Sistema corporativo`,
    },
    {
      number: '05',
      title: $localize`:@@experience.projectStaff:App para staff interno`,
      description: $localize`:@@experience.staffDescription:Herramienta interna para gestionar tickets de soporte técnico, mantenimiento y paquetería.`,
      category: $localize`:@@experience.internalTool:Herramienta interna`,
    },
  ];
}
