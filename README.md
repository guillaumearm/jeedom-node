# Jeedom API :house:
[![CircleCI branch](https://img.shields.io/circleci/project/github/guillaumearm/handle-io/master.svg)](https://circleci.com/gh/guillaumearm/handle-io)

This library provides [Jeedom jsonrpc API](https://jeedom.github.io/core/en_US/jsonrpc_api) bindings for node

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

api.config.byKey({ key: 'name' })
  .then(jeedomName => console.log(jeedomName));
```

### Typescript support
several useful `jeedom`  types are available for typescript:
```typescript
import { default as Jeedom, JeedomApi } from 'jeedom';

const api: JeedomApi = Jeedom({
  host: 'http://jeedomip',
  apikey: '__JEEDOM_API_KEY__',
});
```

### Development
```bash
$ git clone https://github.com/guillaumearm/jeedom-node.git
$ cd jeedom-node

$ npm install
$ npm run test:all
```
