/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { initializeLocalization } from './app/core/i18n/localization';

initializeLocalization();

bootstrapApplication(App, appConfig)
  .catch((error: unknown) => console.error(error));
