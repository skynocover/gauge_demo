# gauge_demo

## install

> https://docs.gauge.org/getting_started/installing-gauge.html?os=macos&language=javascript&ide=vscode

## init

```
> gauge: Create a new project
```

### install axios

```
cd gauge-test
yarn install axios
```

### import axios

```js
const { default: axios } = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';
```

### vscode

> .vscode/setting.json

```json
{
  "files.associations": {
    "*.spec": "gauge",
    "*.cpt": "gauge"
  },
  "files.autoSave": "off",
  "files.autoSaveDelay": 500
}
```

## test

### spec

```md
# API TEST

## GET API

- give "ping" should response "pong"
```

### tests

```js
step('give <input> should response <output>', async (input, output) => {
  const { data } = await axios.get(`/api/${input}`);
  assert.equal(data.resp, output);
});
```
