import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pruebanuevaPlugin = createPlugin({
  id: 'pruebanueva',
  routes: {
    root: rootRouteRef,
  },
});

export const PruebanuevaPage = pruebanuevaPlugin.provide(
  createRoutableExtension({
    name: 'PruebanuevaPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
