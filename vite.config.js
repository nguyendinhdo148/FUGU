import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'path';
import { createStoryStructuredData, STORY_SEO } from './src/seo.js'

function storyHtmlPlugin() {
  let outputDirectory;

  const replaceMeta = (html, attribute, name, content) =>
    html.replace(
      new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*\\/?>`),
      `<meta ${attribute}="${name}" content="${content}" />`,
    );

  return {
    name: 'story-route-html',
    apply: 'build',
    configResolved(config) {
      outputDirectory = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexPath = path.join(outputDirectory, 'index.html');
      let html = fs.readFileSync(indexPath, 'utf8');

      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${STORY_SEO.title}</title>`);
      html = replaceMeta(html, 'name', 'description', STORY_SEO.description);
      html = replaceMeta(html, 'property', 'og:title', STORY_SEO.title);
      html = replaceMeta(html, 'property', 'og:description', STORY_SEO.description);
      html = replaceMeta(html, 'property', 'og:type', 'website');
      html = replaceMeta(html, 'property', 'og:url', STORY_SEO.url);
      html = replaceMeta(html, 'property', 'og:image', STORY_SEO.image);
      html = replaceMeta(html, 'name', 'twitter:title', STORY_SEO.title);
      html = replaceMeta(html, 'name', 'twitter:description', STORY_SEO.description);
      html = replaceMeta(html, 'name', 'twitter:image', STORY_SEO.image);
      html = html.replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${STORY_SEO.url}" />`,
      );
      html = html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script type="application/ld+json">${JSON.stringify(createStoryStructuredData())}</script>`,
      );

      fs.writeFileSync(path.join(outputDirectory, 'our-story.html'), html);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), storyHtmlPlugin()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, "./src"),
    },
  },
})
