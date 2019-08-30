const {
  GetLatLngByAddress,
  GetLatLngByGooGl,
} = require('@geocoder-free/google');

GetLatLngByAddress('tokyo tower').then(console.log);
GetLatLngByGooGl('https://goo.gl/maps/TmYFq1DdceHVpsHV6').then(console.log);
