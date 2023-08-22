import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { structure } from '@/admin/deskStructure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'LELY_Content_Studio',
  title: 'LELY STUDIO',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
