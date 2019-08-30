<h1 align="center">geocoder-free</h1>

[![npm version](https://badge.fury.io/js/geocoder-free.svg)](https://badge.fury.io/js/geocoder-free)
[![dependencies Status](https://david-dm.org/thundermiracle/geocoder-free/status.svg?path=packages/geocoder-free-google)](https://david-dm.org/thundermiracle/geocoder-free?path=geocoder-free-google)
[![devDependencies Status](https://david-dm.org/thundermiracle/geocoder-free/dev-status.svg)](https://david-dm.org/thundermiracle/geocoder-free?type=dev)
[![CircleCI](https://img.shields.io/circleci/build/github/thundermiracle/geocoder-free/master)](https://circleci.com/gh/thundermiracle/geocoder-free)
[![codecov](https://img.shields.io/codecov/c/github/thundermiracle/geocoder-free)](https://codecov.io/gh/thundermiracle/geocoder-free)

# Description

Get latitude&longitude without using any API.

# Install

```shell
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
