import { compose } from 'ramda';
import purgeFullAddress from './purgeFullAddress';
import splitAndPurgeAddress from './splitAndPurgeAddress';

export default compose(
  splitAndPurgeAddress,
  purgeFullAddress,
);
