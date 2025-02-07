import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://yethihahtwe.co.uk',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'YeThiHaHtwe',
      openGraph: {
        home: {
          title: 'YeThiHaHtwe',
          description: 'Personal space'
        },
        blog: {
          title: 'Blog',
          description: 'My thoughts bin.'
        },
        books: {
          title: 'Books'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'yethihahtwe/yethihahtwe.github.io',
        repositoryId: 'R_kgDOHlOQTQ',
        category: 'General',
        categoryId: 'DIC_kwDOHlOQTc4CmiC7',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ]
});
