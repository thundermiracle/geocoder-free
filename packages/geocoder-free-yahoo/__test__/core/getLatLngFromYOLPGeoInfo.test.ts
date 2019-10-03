import getLatLngFromYOLPGeoInfo from 'core/getLatLngFromYOLPGeoInfo';
import { GeoInfo } from 'lib/types';

test('input is an empty object', () => {
  const input = {} as GeoInfo;

  const result = getLatLngFromYOLPGeoInfo(input);

  expect(result).toEqual([]);
});

test('no result', () => {
  const input = {
    ResultInfo: {
      Count: 0,
      Total: 0,
      Start: 1,
      Status: 200,
      Description: '',
      Copyright: '',
      Latency: 0.193,
    },
  };

  const result = getLatLngFromYOLPGeoInfo(input);

  expect(result).toEqual([]);
});

test('error in coordinate', () => {
  const input = {
    ResultInfo: {
      Count: 1,
      Total: 1,
      Start: 1,
      Status: 200,
      Description: '',
      Copyright: '',
      Latency: 0.084,
    },
    Feature: [
      {
        Id: '13103.12.4.2.8',
        Gid: '',
        Name: '東京都港区芝公園4丁目2-8',
        Geometry: {
          Type: 'point',
          Coordinates: 'aaa,35.65859206',
          BoundingBox: '139.74331700,35.65292700 139.75043300,35.65982500',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: 'a77eb70995b2d0350e21e8fae9f07cc5e583f440',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトミナトクシバコウエン4チョウメ',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都港区芝公園4丁目2-8',
          GovernmentCode: '13103',
          AddressMatchingLevel: '6',
          AddressType: '地番・戸番',
        },
      },
    ],
  };

  const result = getLatLngFromYOLPGeoInfo(input);

  expect(result).toEqual([]);
});

test('one result', () => {
  const input = {
    ResultInfo: {
      Count: 1,
      Total: 1,
      Start: 1,
      Status: 200,
      Description: '',
      Copyright: '',
      Latency: 0.084,
    },
    Feature: [
      {
        Id: '13103.12.4.2.8',
        Gid: '',
        Name: '東京都港区芝公園4丁目2-8',
        Geometry: {
          Type: 'point',
          Coordinates: '139.74544113,35.65859206',
          BoundingBox: '139.74331700,35.65292700 139.75043300,35.65982500',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: 'a77eb70995b2d0350e21e8fae9f07cc5e583f440',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトミナトクシバコウエン4チョウメ',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都港区芝公園4丁目2-8',
          GovernmentCode: '13103',
          AddressMatchingLevel: '6',
          AddressType: '地番・戸番',
        },
      },
    ],
  };

  const result = getLatLngFromYOLPGeoInfo(input);

  expect(result).toEqual([35.65859206, 139.74544113]);
});

test('multiple results returns first one', () => {
  const input = {
    ResultInfo: {
      Count: 10,
      Total: 1785073,
      Start: 1,
      Status: 200,
      Description: '',
      Copyright: '',
      Latency: 0.07,
    },
    Feature: [
      {
        Id: '13101',
        Gid: '',
        Name: '東京都千代田区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.75358630,35.69404120',
          BoundingBox: '139.72989500,35.66854300 139.78283300,35.70521900',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '2a401603ce66478810d207952a37802b204eb80a',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトチヨダク',
          Country: {
            Code: 'JP',
            Name: '日本',
          },
          Address: '東京都千代田区',
          GovernmentCode: '13101',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13102',
        Gid: '',
        Name: '東京都中央区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.77210790, 35.67071080',
          BoundingBox: '139.75849800, 35.64414800 139.79320000, 35.69663200',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: 'c9785ce6abf156f0d5221e42ef2df818a28cf966',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトチュウオウク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都中央区',
          GovernmentCode: '13102',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13103',
        Gid: '',
        Name: '東京都港区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.75140450, 35.65807280',
          BoundingBox: '139.70875300, 35.62312700 139.78283600, 35.68260100',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '9240a5108bde51c26595e7847b517f6799f215b9',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトミナトク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都港区',
          GovernmentCode: '13103',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13104',
        Gid: '',
        Name: '東京都新宿区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.70341020, 35.69388720',
          BoundingBox: '139.67324900, 35.67315300 139.74515800, 35.72989300',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '5772d8d2f133ff0fa1e47ab1a90dcb1cf371adfc',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトシンジュクク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都新宿区',
          GovernmentCode: '13104',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13108',
        Gid: '',
        Name: '東京都江東区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.81696810, 35.67307840',
          BoundingBox: '139.77118500, 35.57847000 139.84901100, 35.70806400',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: 'd1609cd74292ca20fb06ce312dcaef3afa1e68bd',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトコウトウク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都江東区',
          GovernmentCode: '13108',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13112',
        Gid: '',
        Name: '東京都世田谷区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.65324950, 35.64657460',
          BoundingBox: '139.58242700, 35.59004000 139.68655700, 35.68297400',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '9b7486bd58ee135ffec334df2975f4f37690b3cf',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトセタガヤク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都世田谷区',
          GovernmentCode: '13112',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13111',
        Gid: '',
        Name: '東京都大田区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.71604740, 35.56140010',
          BoundingBox: '139.65280300, 35.52086200 139.82586900, 35.61310100',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '0ad19c79f86a880029e4d84991cb8fae677f0b96',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトオオタク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都大田区',
          GovernmentCode: '13111',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13113',
        Gid: '',
        Name: '東京都渋谷区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.69770070, 35.66368490',
          BoundingBox: '139.66135600, 35.64156100 139.72389700, 35.69214200',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '988afdf27adfe5a089a2ab689f7fa156529659b8',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトシブヤク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都渋谷区',
          GovernmentCode: '13113',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13201',
        Gid: '',
        Name: '東京都八王子市',
        Geometry: {
          Type: 'point',
          Coordinates: '139.31580520, 35.66634170',
          BoundingBox: '139.16164200, 35.59777100 139.43005200, 35.71853200',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '880e8cb10ccca93b3d648167a1b96bb4d83624e8',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトハチオウジシ',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都八王子市',
          GovernmentCode: '13201',
          AddressMatchingLevel: '2',
          AddressType: '市',
          RecursiveQuery: '東京',
        },
      },
      {
        Id: '13106',
        Gid: '',
        Name: '東京都台東区',
        Geometry: {
          Type: 'point',
          Coordinates: '139.77999790, 35.71260660',
          BoundingBox: '139.76220700, 35.69478700 139.80975400, 35.73163900',
        },
        Category: [],
        Description: '',
        Style: [],
        Property: {
          Uid: '1060e09283454d7807a8288089f78f921ecf9801',
          CassetteId: 'b22fee69b0dcaf2c2fe2d6a27906dafc',
          Yomi: 'トウキョウトタイトウク',
          Country: { Code: 'JP', Name: '日本' },
          Address: '東京都台東区',
          GovernmentCode: '13106',
          AddressMatchingLevel: '2',
          AddressType: '特別区',
          RecursiveQuery: '東京',
        },
      },
    ],
  };

  const result = getLatLngFromYOLPGeoInfo(input);

  expect(result).toEqual([35.6940412, 139.7535863]);
});
