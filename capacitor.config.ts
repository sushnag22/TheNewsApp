import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'the-news-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
