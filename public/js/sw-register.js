if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: '/'}).then(function(registration) {
    }).catch(function(err) {
        console.log(err);
    });
}