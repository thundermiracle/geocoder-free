import getMapUrlWithGPS from 'lib/getMapUrlWithGPS';

const wrongUrl1 =
  'https://www.google.com/maps/preview/place/%E3%80%92339-0074dummyaddressnumber1/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';
const wrongUrl2 =
  'https://www.google.com/maps/place/%E3%80%92339-0074dummyaddressnumber1/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';
const wrongUrl3 =
  'https://www.google.com/maps/preview/place/%E3%80%92339-0074dummyaddressnumber1/@data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';

const rightUrl1 =
  'https://www.google.com/maps/preview/place/%E3%80%92339-0074dummyaddressnumber1/@35.2655598,139.2932499,3229a,13.1y/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';
const rightUrl2 =
  'https://www.google.com/maps/place/%E3%80%92339-0074dummyaddressnumber2/@35.2655598,139.2932499,3229a,13.1y/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';

test('no result without map url', () => {
  const result = getMapUrlWithGPS(
    'null,null,null,null,null,null,null,"0ahUKEwiF_4_O8ODjAhUWyIsBHXt5AfEQmBkIAigA"',
  );

  expect(result).toEqual('');
});

test('wrong url No1 in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,null,null,null,null,"${wrongUrl1}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual('');
});

test('wrong url No2 in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,null,null,null,null,"${wrongUrl2}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual('');
});

test('wrong url No3 in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,null,null,null,null,"${wrongUrl3}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual('');
});

test('right url No1 in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,null,null,null,null,"${rightUrl1}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual(rightUrl1);
});

test('right url No2 in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,null,null,null,null,"${rightUrl2}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual(rightUrl2);
});

test('right url with wrong url in input', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,"${wrongUrl1}",null,null,null,null,"${rightUrl1}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual(rightUrl1);
});

test('two right url with wrong url in input(return first)', () => {
  const result = getMapUrlWithGPS(
    `null,null,null,"${wrongUrl1}",null,null,"${rightUrl2}", null,null,"${rightUrl1}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
  );

  expect(result).toEqual(rightUrl2);
});
