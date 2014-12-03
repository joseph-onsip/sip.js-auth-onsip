sip.js-auth-onsip
=================

```shell
npm install onsip/SIP.js#4988b81
npm install joseph-onsip/sip.js-auth-onsip
```

```javascript
var SIP = require('sip.js');
var authFactory = require('sip.js-auth-onsip')(SIP);

var uri = "USER@SUBDOMAIN.onsip.com";
var password = "PASSWORD";

var ua = new SIP.UA({
  "traceSip": true,
  "uri": uri,
  "authenticationFactory": authFactory(uri, password)
});
```
