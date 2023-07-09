import { myTheme } from './theme';
import { defineConfig, WorkspaceOptions } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import StudioNavbar from './components/StudioNavBar';
import StudioLogo from './components/StudioLogo';
import { defaultDocumentNode } from './structure';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig<WorkspaceOptions>({
  basePath: '/studio',
  name: 'Portfolio_Studio',
  title: 'Portfolio Studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
