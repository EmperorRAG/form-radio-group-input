/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/index.tsx', // or your component entry point
			name: 'FormRadioGroupInput',
			fileName: 'form-radio-group-input',
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			// externalize deps that shouldn't be bundled
			external: ['react', 'react-dom', '@emperorrag/utilities'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@emperorrag/utilities': 'EmperorRAGUtilities',
				},
			},
		},
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: 'playwright',
						instances: [
							{
								browser: 'chromium',
							},
						],
					},
					setupFiles: ['.storybook/vitest.setup.ts'],
				},
			},
			{
				extends: true,
				plugins: [react()],
				test: {
					name: 'unit',
					browser: {
						enabled: true,
						headless: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }],
					},
				},
			},
		],
	},
});
