/**
 * Cybotranik WUI Documentation
 *
 * Website html User Interface.
 * 
 * https://github.com/cybotranik-wui
 *
 * @author Azmi SAHIN
 * @since 2019
 * */
function Documentation() { }

/**
 * PWA Application
 */
Documentation.prototype.ServiceWorker = function () {

  /// Service Worker Cache Delete
  function deleteCache(){
    caches.keys().then(function(names) {
      for (let name of names){
        console.log('Cache Clear : ' + name)
        caches.delete(name)
      }
    })
  }

  if ('serviceWorker' in navigator) {

    // deleteCache()

    navigator
      .serviceWorker.register('service-worker.js', { scope: '/' })
      .then(function () {
        
      })

    navigator.serviceWorker.ready.then(function () {
      
    })
  }
}

new Documentation().ServiceWorker()
