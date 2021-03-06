// Add this script to any page to display the app
// Add the config script before this script to customize the app
(function () {
  // app.css
  var getFarmStyles = document.createElement('link');
  getFarmStyles.href = 'https://www.getfarmcredit.com/modules/custom/getfarmcreditmap/css/app.5c7f6b87df10eb0a9ffa5264580270fb.css';
  getFarmStyles.setAttribute('rel','stylesheet');
  getFarmStyles.setAttribute('type','text/css');
  document.head.appendChild(getFarmStyles);
  // <div id="app"></div>
  if (!document.getElementById('app')) {
    var getFarmWrapper = document.createElement('div');
    getFarmWrapper.setAttribute('id','app');
    document.body.appendChild(getFarmWrapper);
  }
  // manifest.js
  var getFarmManifest = document.createElement('script');
  getFarmManifest.src = 'https://www.getfarmcredit.com/modules/custom/getfarmcreditmap/js/manifest.57f727bcaffaf69ddbd5.js';
  getFarmManifest.setAttribute('type','text/javascript');
  getFarmManifest.async = true;
  document.body.appendChild(getFarmManifest);
  // vendor.js
  var getFarmVendor = document.createElement('script');
  getFarmVendor.src = 'https://www.getfarmcredit.com/modules/custom/getfarmcreditmap/js/vendor.3bdfcbb292971cb6d047.js';
  getFarmVendor.setAttribute('type','text/javascript');
  getFarmVendor.async = true;
  document.body.appendChild(getFarmVendor);
  window.onload = function() {
    // app.js
    var getFarmApp = document.createElement('script');
    getFarmApp.src = 'https://www.getfarmcredit.com/modules/custom/getfarmcreditmap/js/app.4d8ed83160f9ae4c3957.js';
    getFarmApp.setAttribute('type','text/javascript');
    getFarmApp.async = true;
    document.body.appendChild(getFarmApp);
  };
})();