import firebase from 'firebase'

export const changeDynamicManifest = (name, fav, path)=>{  
    var myDynamicManifest = {
      "name": "Comunit.app "+name,
      "short_name": name,
      "start_url": 'https://www.comunit.app/'+path,
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff",
      "icons": [{
        "src": fav+"/favicon.ico",
        "sizes": "64x64 32x32 24x24 16x16",
        "type": "image/x-icon"
      },
      {
        "src": fav+"/icon192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": fav+"/icon512.png",
        "type": "image/png",
        "sizes": "512x512"
      }]
    }
    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#my-manifest-placeholder').setAttribute('href', manifestURL);
    console.log('changed to'+fav, name)
  }
  const firebaseConfig  = {
    apiKey: "AIzaSyC1PHvcpBIoie4ZiNhGMI_YTf8EQIl0JTY",
    authDomain: "comunit-app.firebaseapp.com",
    databaseURL: "https://comunit-app.firebaseio.com",
    projectId: "comunit-app",
    storageBucket: "comunit-app.appspot.com",
    messagingSenderId: "118962740484",
    appId: "1:118962740484:web:9b83050c29f521be03c451"
  }
  export const initFirebase = ()=>{ return firebase.initializeApp(firebaseConfig) }
  