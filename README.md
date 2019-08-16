<h1 align="center">geocoder-free</h1>

[![npm version](https://badge.fury.io/js/geocoder-free.svg)](https://badge.fury.io/js/geocoder-free)
[![dependencies Status](https://david-dm.org/thundermiracle/geocoder-free/status.svg)](https://david-dm.org/thundermiracle/geocoder-free)
[![devDependencies Status](https://david-dm.org/thundermiracle/geocoder-free/dev-status.svg)](https://david-dm.org/thundermiracle/geocoder-free?type=dev)
[![CircleCI](https://circleci.com/gh/thundermiracle/geocoder-free.svg?style=svg)](https://circleci.com/gh/thundermiracle/geocoder-free)
[![codecov](https://codecov.io/gh/thundermiracle/geocoder-free/branch/master/graph/badge.svg)](https://codecov.io/gh/thundermiracle/geocoder-free)

# Description

Get latitude&longitude from google map without using any API.

# Install

```shell
 yarn add geocoder-free
```

# Usage

1. Get latlng by address

    ```javascript
    const { GetLatLngByAddress } = require('geocoder-free');

    GetLatLngByAddress('tokyo tower').then(console.log);
    // print [35.6585769, 139.7454506]
    ```

1. Get latlng by goo.gl(google map shorten url)

    ```javascript
    const { GetLatLngByGooGl } = require('geocoder-free');

    GetLatLngByGooGl('https://goo.gl/maps/TmYFq1DdceHVpsHV6').then(console.log);
    // print [35.6585769, 139.7454506]
    ```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
