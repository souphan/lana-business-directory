export enum DataServiceType {
  http = 'HTTP',
  firebase = 'FIREBASE',
  backendless = 'BACKENDLESS',
}

export const Config = {
  apiUrl: 'assets/data/data.json',
  // export const apiUrl = 'https://xxxxxx.s3.amazonaws.com/xxxxx/data.json';

  firebase: {
    apiKey: "AIzaSyAC261wN0wwuNdgm9py8iXMxUGg0y5GBpw",
    authDomain: "lana-business-directory.firebaseapp.com",
    databaseURL: "https://lana-business-directory.firebaseio.com",
    projectId: "lana-business-directory",
    storageBucket: "lana-business-directory.appspot.com",
    messagingSenderId: "773896215295",
    appId: "1:773896215295:web:f8ae46c2271ff6793b8aca",
    measurementId: "G-NP01BMCSSS"
  },

  DATA_SERVICE: DataServiceType.firebase,

  mapApiKey: '',

  backendlessConfig: {
    appId: '7EE71F2E-9650-0A2A-FF5D-E78294A4B600',
	  appKey: 'F957E0D1-DF74-4DA3-8640-5E9EE056E0E1'
  },

  sender_id: '211377410430',
  oneSignalAppId: '8046df2e-979e-4333-aeae-95a81bbc950e',

  wordpressApiUrl: 'https://demo.titaniumtemplates.com/wordpress/?json=1',
  drupalApiUrl: 'https://demo.titaniumtemplates.com/drupal/rest/views/rest_api',

};
