# @geocoder-free/google

# Description

Get latitude&longitude from google map without using any API.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @geocoder-free/google

// with yarn
yarn add @geocoder-free/google
```

# Usage

1. Get latlng by address

    ```javascript
    const { GetLatLngByAddress } = require('@geocoder-free/google');

    GetLatLngByAddress('tokyo tower').then(console.log);
    // print [35.6585769, 139.7454506]
    ```

1. Get latlng by goo.gl(google map shorten url)

    ```javascript
    const { GetLatLngByGooGl } = require('@geocoder-free/google');

    GetLatLngByGooGl('https://goo.gl/maps/TmYFq1DdceHVpsHV6').then(console.log);
    // print [35.6585769, 139.7454506]
    ```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
