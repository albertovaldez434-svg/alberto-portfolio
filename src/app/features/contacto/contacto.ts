import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contacto {
  protected readonly copy = {
    label: $localize`:@@contact.label:Contacto`,
    title: $localize`:@@contact.title:¿Hablamos?`,
    intro: $localize`:@@contact.intro:Si tienes una idea, una oportunidad o simplemente quieres saludar, puedes encontrarme por aquí.`,
    methods: $localize`:@@contact.methods:Medios de contacto`,
    email: $localize`:@@contact.email:Email`,
    whatsapp: $localize`:@@contact.whatsapp:WhatsApp`,
    linkedin: $localize`:@@contact.linkedin:LinkedIn`,
    footerRole: $localize`:@@contact.footerRole:Alberto · Developer`,
    backToTop: $localize`:@@contact.backToTop:Volver al inicio`,
  };
}
