sip.js-auth-onsip
=================

```shell
npm install onsip/SIP.js#c9dac4b
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
