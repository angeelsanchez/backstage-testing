import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pruebanuevaPlugin, PruebanuevaPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pruebanuevaPlugin)
  .addPage({
    element: <PruebanuevaPage />,
    title: 'Root Page',
    path: '/pruebanueva'
  })
  .render();
