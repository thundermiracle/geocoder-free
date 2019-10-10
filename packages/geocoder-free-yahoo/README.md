# @geocoder-free/yahoo

## Description

Get latitude&longitude by YOLP(Yahoo! Open Local Platform) or by yahoo map.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @geocoder-free/yahoo

// with yarn
yarn add @geocoder-free/yahoo
```

## Usage

1. Get latlng by yahoo api

    ```javascript
    const { GetLatLngByAPI } = require('@geocoder-free/yahoo');

    GetLatLngByAPI('YOLP appid', '東京都港区六本木').then(console.log);
    // print [35.66288632, 139.73359259]
    ```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
