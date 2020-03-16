import compose from 'ramda/src/compose';
import purgeFullAddress from './purgeFullAddress';
import splitAndPurgeAddress from './splitAndPurgeAddress';

export default compose(
  splitAndPurgeAddress,
  purgeFullAddress,
);
