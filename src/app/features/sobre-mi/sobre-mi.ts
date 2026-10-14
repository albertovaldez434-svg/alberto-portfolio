import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreMi {
  protected readonly copy = {
    label: $localize`:@@about.label:Un poco más de contexto`,
    titleFirst: $localize`:@@about.titleFirst:Detrás del código,`,
    titleSecond: $localize`:@@about.titleSecond:hay una persona.`,
    intro: $localize`:@@about.intro:Me gusta entender el porqué antes de lanzarme al cómo. Disfruto aprender, compartir ideas y encontrar soluciones que sean útiles de verdad, no solo elegantes en una captura.`,
    work: $localize`:@@about.work:Mi forma de trabajar`,
    workTitleFirst: $localize`:@@about.workTitleFirst:Con intención,`,
    workTitleSecond: $localize`:@@about.workTitleSecond:en equipo y sin drama.`,
    offHours: $localize`:@@about.offHours:Fuera del horario laboral`,
    offHoursTitle: $localize`:@@about.offHoursTitle:También sé cerrar el portátil.`,
    offHoursText: $localize`:@@about.offHoursText:Me guardo tiempo para desconectar, recargar ideas y disfrutar de las cosas que no necesitan una actualización.`,
    quote: $localize`:@@about.quote:Mi vida no gira alrededor del código. Aunque a veces el código sí intenta girar alrededor de mi vida.`,
    restModeFirst: $localize`:@@about.restModeFirst:MODO`,
    restModeSecond: $localize`:@@about.restModeSecond:DESCANSO`,
  };

  protected readonly workPrinciples = [
    {
      title: $localize`:@@about.listenTitle:Primero escucho.`,
      description: $localize`:@@about.listenText:Alineo el problema antes de proponer soluciones.`,
    },
    {
      title: $localize`:@@about.buildTitle:Luego construyo.`,
      description: $localize`:@@about.buildText:Avanzo en pasos pequeños y comparto el progreso.`,
    },
    {
      title: $localize`:@@about.polishTitle:Al final, pulo.`,
      description: $localize`:@@about.polishText:Cuido los detalles sin perder de vista el objetivo.`,
    },
  ];
}
