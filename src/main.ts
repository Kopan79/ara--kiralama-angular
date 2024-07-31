import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Bu doğru import

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
