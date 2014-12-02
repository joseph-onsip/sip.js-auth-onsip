module.exports = function (SIP) {
  return function buildFactory (sipAddress, webPassword) {
    var credentials = {};

    var initPromise = new SIP.Utils.Promise(function (resolve, reject) {
      var xhr = new global.XMLHttpRequest();
      xhr.onload = function onload () {
        try {
          credentials = JSON.parse(xhr.responseText).Response.Result.UserRead.User;
          resolve();
        } catch (e) {
          reject(e);
        }
      };
      xhr.open('get', 'https://api.onsip.com/api/?Action=UserRead&Output=json');
      var userPass = sipAddress + ':' + webPassword;
      xhr.setRequestHeader('Authorization', 'Basic ' + global.btoa(userPass));
      xhr.send();
    });

    function factory (ua) {
      var auth = new SIP.DigestAuthentication(ua);
      auth.username = credentials.AuthUsername;
      auth.password = credentials.Password;
      return auth;
    }

    factory.initialize = function initialize () {
      return initPromise;
    };

    return factory;
  };
};
