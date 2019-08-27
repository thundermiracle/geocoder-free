const { GetLatLngByAddress, GetLatLngByGooGl } = require('geocoder-free');

GetLatLngByAddress('tokyo tower').then(console.log);
GetLatLngByGooGl('https://goo.gl/maps/TmYFq1DdceHVpsHV6').then(console.log);
