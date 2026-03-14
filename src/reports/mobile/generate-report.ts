import reporter from 'multiple-cucumber-html-reporter';
import { resolve } from 'path';

reporter.generate({
  jsonDir: resolve(__dirname),
  reportPath: resolve(__dirname, 'html'),
  metadata: {
    browser: { name: 'app', version: '1.0' },
    device: 'Infinix HOT 40i',
    platform: { name: 'Android', version: '13.0' },
  },
  customData: {
    title: 'Reporte Mobile',
    data: [
      { label: 'Proyecto', value: 'k0lmena' },
      { label: 'Fecha', value: new Date().toLocaleDateString() },
    ],
  },
});
