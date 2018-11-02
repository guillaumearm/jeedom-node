# Jeedom API
This library provides bindings for [Jeedom jsonrpc API](ps://jeedom.github.io/core/en_US/jsonrpc_api)

### Installation
```bash
$ npm install --save jeedom
```

### Basic Usage

```js
const Jeedom = require('jeedom');

const api = Jeedom({
  host: 'http://jeedomip',
  apikey: '__JEEDOM_API_KEY__',
});

api.rpc('ping')
  .then(pong => console.log(pong));

api.rpc('object::byId', { id: 1 })
  .then(obj => console.log(obj));
```

### Typescript support
several useful `jeedom`  types are available for typescript:
````typescript
import { default as Jeedom, JEqLogic } from 'jeedom';
````

### Development
````bash
$ git clone https://github.com/guillaumearm/jeedom-node.git
$ cd jeedom-node

$ npm install
$ npm run test:all
````
