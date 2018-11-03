# Jeedom API :house:
[![CircleCI branch](https://img.shields.io/circleci/project/github/guillaumearm/handle-io/master.svg)](https://circleci.com/gh/guillaumearm/handle-io)

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

api.ping()
  .then(pong => console.log(pong));

api.version()
  .then(version => console.log(version));

api.object.byId({ id: 1 })
  .then(obj => console.log(obj));
```

### Typescript support
several useful `jeedom`  types are available for typescript:
```typescript
import { default as Jeedom, JEqLogic } from 'jeedom';
```

### Development
```bash
$ git clone https://github.com/guillaumearm/jeedom-node.git
$ cd jeedom-node

$ npm install
$ npm run test:all
```
