# @geocoder-free/utils

## Description

Utils for geocoding.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install @geocoder-free/utils

// with yarn
yarn add @geocoder-free/utils
```

## Install From Browser

```
<script src="https://cdn.jsdelivr.net/npm/@geocoder-free/utils@0.2.8/umd/geocoderfreeutils.min.js"></script>
```

## Extra Installation

If you want to use HttpClient in server, node-fetch is required:

```sh
// with npm
npm install node-fetch

// with yarn
yarn add node-fetch
```

If you want to use HttpClient in client, fetch-jsonp is required:

```sh
// with npm
npm install fetch-jsonp

// with yarn
yarn add fetch-jsonp
```

## APIs

* [How to import](#import)
* [HttpClient](#httpclient)
  * [Get](#get): fetch data by url. using jsonp in client and node-fetch in server to avoid CORS errors in client.
  * [GetUrl](#geturl): get redirected url.
  * [Post](#get): post and get data by url. using jsonp in client and node-fetch in server to avoid CORS errors in client.
* Functions for all
  * [dms2deg](#dms2deg): convert latitude or longitude from dms to decimal
  * [getLatLngByDMSStr](#getLatLngByDMSStr): get latitude and longitude array from dms latlng string
  * [getLatLngByDecimalStr](#getLatLngByDecimalStr): get latitude and longitude array from decimal latlng string
  * [getLatLngCentroid](#getLatLngCentroid): get the centroid latlng from a list of latitude and longitude
  * [getLatLngObj](#getLatLngObj): split latitude,longitude string and transform it to object { lat: xxx, lng: xxx }
  * [getLocaleString](#getLocaleString): parse date string and get toLocaleString if parsing is successful
  * [logFormat](#logFormat): append date string to message
  * [removeSpace](#removeSpace): remove all spaces from the string
  * [isCorrectLatLng](#isCorrectLatLng): Check if the latitude longitude array is correct
  * [getTimeByTimezone](#getTimeByTimezone): getTime with timezone; Analyze string in specified timezone
  * [formatDate](#formatDate): format date or dateStr
* Functions for Japan only
  * [cutToBlockNumber](#cutToBlockNumber)
  * [removePostCode](#removePostCode)

### Import

```js
import { xxx } from '@geocoder-free/utils';

eg: import { dms2deg } from '@geocoder-free/utils';
```

### Import From Browser

```js
const { xxx } = GeocoderFreeUtils;

eg: const { dms2deg } = GeocoderFreeUtils;
```

### HttpClient

*Packages node-fetch and fetch-jsonp are required by HttpClient.*

#### Get

**jsonp mode Can be disabled by pasing true to the 3rd parameter.**

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | url | 〇 | string |  | |
| 2 | returnType | | string | 'json' | type of response, 'json' or 'text' |
| 3 | forceNodeFetch | | boolean | false | if true, fetching data by jsonp will be disabled. |

```js
import { Get } from '@geocoder-free/utils/HttpClient';

Get(`https://api.google.com/xxxxxx`).then(console.log);
```

#### GetUrl

Get the redirected url.

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | url | 〇 | string |  | |

```js
import { GetUrl } from '@geocoder-free/utils/HttpClient';

GetUrl(`https://goo.gl/maps/nQjjgsyid7iGa42J8`).then(console.log);
// get 'https://www.google.com/maps/place/%E7%9A%87%E5%B1%85/@35.6938997,139.7628928,15z/data=!4m5!3m4!1s0x60188c0d02d8064d:0xd11a5f0b379e6db7!8m2!3d35.6851739!4d139.7527993'
```

#### Post

**jsonp mode Can be disabled by pasing true to the 3rd parameter.**

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | url | 〇 | string |  | |
| 2 | data | 〇 | object |  | data for post |
| 3 | forceNodeFetch | | boolean | false | if true, fetching data by jsonp will be disabled. |

```js
import { Post } from '@geocoder-free/utils/HttpClient';

Post(`https://api.google.com/xxxxxx`).then(console.log);
```

### dms2deg

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | dmsStr | 〇 | string |  | dms string |

```js
dms2deg(`35°39'31.3"N`);
// get 35.658694

dms2deg(`139°44'40.3"W`);
// get -139.744528
```

### getLatLngByDMSStr

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | latlngDmsStr | 〇 | string |  | string contains dms latitude & dms longitude |

```js
getLatLngByDMSStr(`35°39'31.3"N+139°44'40.3"E`);
// get [35.658694, 139.744528]
```

### getLatLngByDecimalStr

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | latlngDecimalStr | 〇 | string |  | string contains decimal latitude & decimal longitude(split by comma) |

```js
getLatLngByDecimalStr(`35.123, 149.123`);
// get [35.123, 149.123]
```

### getLatLngCentroid

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | latLngInDegr | 〇 | array |  | list of LatLngArray (`[latitude, longitude]`) |

```js
getLatLngCentroid([[35.123, 139.234], [35.456, 139.567]]);
// get [35.289614, 139.400158]
```

### getLatLngObj

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | latlngDecimalStr | 〇 | string |  | string contains decimal latitude & decimal longitude(split by comma) |

```js
getLatLngObj(`35.123, 149.123`);
// get { lat: 35.123, lng: 149.123 }
```

### getLocaleString

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | dateStr | 〇 | string |  | output is different in different timezone |

```js
getLocaleString(`2019-08-29`);
// get "2019/8/29 9:00:00"
```

### logFormat

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | msg | 〇 | string |  | message |
| 2 | func | | function | null | call func(formatted string) if func is not null |

```js
// example is in Asia/Tokyo

logFormat(`hello`);
// get "2019/8/29 9:00:00 -- hello"

logFormat(`hello`, (str) => `[info]${str}`);
// get "[info]2019/8/29 9:00:00 -- hello"
```

### removeSpace

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | str | 〇 | string |  | |

```js
removeSpace('  2 3  4  ');
// get "234"
```

### isCorrectLatLng

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | latlngArr | 〇 | array |  | [latitude, longitude] |

```js
isCorrectLatLng([NaN, 139.1]);
// get false

isCorrectLatLng([35.123, NaN]);
// get false

isCorrectLatLng([35.123, 139.1]);
// get true
```

### getTimeByTimezone

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | dateStr | 〇 | string |  | |
| 2 | timezone | 〇 | number |  | |

```js
/*
in UTC system.
*/
getTimeByTimezone('2019-09-01 11:00:00', 9);
// get 1567303200000

new Date('2019-09-01 11:00:00').getTime();
// get 1567335600000
```

### formatDate

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | date | 〇 | string / date |  | |
| 2 | format |  | string | yyyy/MM/dd HH:mm:ss | for '2019-01-09 08:01:01', ```yyyy: 2019; yy: 19; MM: 01; M: 1; dd: 09; d: 9; HH: 08; H: 8; mm: 01; m: 1; ss: 01; s: 1; SSS: 000;``` |

```js
formatDate('2019-09-01 8:00:00', 'yyyy/M/d H:m:s');
// get "2019/9/1 8:0:0"
```

### cutToBlockNumber

番地までの住所を取得

| No.   | Parameter | Required | Type | Default | Description |
|:------|:---------:|:--------:|:----:|:--------|:------------|
| 1 | address | 〇 | string |  | 番地の後ろにスペースが必要 |

```js
cutToBlockNumber('新宿区 2-3-1 新宿ビル305');
// get "新宿区 2-3-1"
```

### removePostCode

郵便マーク（〒）を削除

```js
removePostCode('〒123-1234+tokyo');
// get "123-1234+tokyo"
```

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
