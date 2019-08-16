import { GetLatLngByAddress, GetLatLngByGooGl } from './src';

GetLatLngByAddress('東京都港区芝公園４丁目２−８').then(latlng => {
  console.log('\r\n東京都港区芝公園４丁目２−８ ->');
  console.log('Expected Printout: [ 35.6585769, 139.7454506 ]');
  console.log(`Result: [${latlng}]`);
});

GetLatLngByGooGl('https://goo.gl/maps/TmYFq1DdceHVpsHV6').then(latlng => {
  console.log('\r\n[ADDRESS] https://goo.gl/maps/TmYFq1DdceHVpsHV6 ->');
  console.log('Expected Printout: [ 35.6585769, 139.7454506 ]');
  console.log(`Result: [${latlng}]`);
});

// GetLatLngByGooGl('https://goo.gl/maps/FELwD1G9JibSgbFr8').then(latlng => {
//   console.log('\r\n[GEOCODE] https://goo.gl/maps/FELwD1G9JibSgbFr8 ->');
//   console.log('Expected Printout: [ 35.658698, 139.744526 ]');
//   console.log(`Result: [${latlng}]`);
// });
