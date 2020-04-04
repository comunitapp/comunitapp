export const changeDynamicManifest = (name, fav)=>{  
    var myDynamicManifest = {
      "name": name,
      "short_name": "Comunit.app",
      "start_url": ".",
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