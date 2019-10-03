import { GetLatLngByAPI } from './src';

GetLatLngByAPI(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  '東京都港区芝公園４丁目２−８',
).then(latlng => {
  console.log('\r\n東京都港区芝公園４丁目２−８ ->');
  console.log('Expected Printout: [ 35.65859206,139.74544113 ]');
  console.log(`Result: [${latlng}]`);
});
