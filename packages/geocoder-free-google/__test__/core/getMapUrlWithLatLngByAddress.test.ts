import getMapUrlWithLatLngByAddress from 'core/getMapUrlWithLatLngByAddress';

const rightUrl =
  'https://www.google.com/maps/preview/place/%E3%80%92339-0074dummyaddressnumber1/@35.2655598,139.2932499,3229a,13.1y/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';

jest.mock('@geocoder-free/utils/HttpClient', () => ({
  Get(type: string): Promise<string> {
    const rightUrlInner =
      'https://www.google.com/maps/preview/place/%E3%80%92339-0074dummyaddressnumber1/@35.2655598,139.2932499,3229a,13.1y/data\u003d!4m2!3m1!1s0x6018b9b21c593123:0x6d3fc275fa08a742';

    switch (type) {
      case 'https://www.google.com/search?gl=jp&tbm=map&q=right':
        return Promise.resolve(
          `null,null,null,null,null,null,null,"${rightUrlInner}",1,null,null,null,null,null,["https://business.google.com/create?fp\u003d7872224485628749634\u0026hl\u003dja\u0026authuser\u003d0\u0026gmbsrc\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026ppsrc\u003dGMBMI\u0026utm_campaign\u003djp-ja-et-ip-z-gmb-s-z-l~mrc%7Cclaimbz%7Cu\u0026utm_source\u003dgmb_mrc81\u0026utm_medium\u003det\u0026getstarted","ビジネス オーナーですか？",null,"0ahUKEwir7e6l7-DjAhVSwosBHV0bCvkQ_1kIDSgIMAA"]`,
        );
      default:
        return Promise.resolve('https://hello.world/address');
    }
  },
}));

beforeEach(() => {
  jest.resetAllMocks();
});

test('contains right url', async () => {
  const result = await getMapUrlWithLatLngByAddress('right');

  expect(result).toEqual(rightUrl);
});

test('does not contain right url', async () => {
  const result = await getMapUrlWithLatLngByAddress('wrong');

  expect(result).toEqual('');
});
