import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tsParticles } from "@tsparticles/engine";
import { loadFirePreset } from "@tsparticles/preset-fire";
import { loadSlim } from "@tsparticles/slim";
import { Hero } from './features/hero/hero';
import { Experiencia } from './features/experiencia/experiencia';
import { SobreMi } from './features/sobre-mi/sobre-mi';
import { Logros } from './features/logros/logros';
import { Contacto } from './features/contacto/contacto';
import { Navbar } from './core/navbar/navbar';

await loadSlim(tsParticles);
await loadFirePreset(tsParticles)

await tsParticles.load({
  id: "tsparticles",
  options: {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true
        }
      },

      color: {
        value: [
          "#ff6b00",
        ]
      },

      glow: {
        enable: true,
        color: "#d5eb0c",
        distance: 15
      },

      shape: {
        type: "circle"
      },

      opacity: {
        value: {
          min: 0.2,
          max: 0.8
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false
        }
      },

      size: {
        value: {
          min: 1,
          max: 4
        }
      },

      move: {
        enable: true,
        direction: "top",
        speed: {
          min: 0.5,
          max: 1
        },
        random: true,
        straight: false,
        outModes: {
          default: "out"
        }
      }
    },
    emitters: {
      position: {
        x: 50,
        y: 100
      },

      rate: {
        quantity: 2,
        delay: 0.15
      },

      size: {
        width: 100,
        height: 0
      }
    },
  }
});

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, SobreMi, Experiencia, Logros, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
