import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () =>
      import('./components/comp-route/comp-route.component').then(
        (c) => c.CompRouteComponent
      ),
  },
];
