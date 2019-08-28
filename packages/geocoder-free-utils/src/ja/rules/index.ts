import { compose } from 'ramda';

import zenToHan from './zenToHan';
import multiHyphenToOne from './multiHyphenToOne';
import multiSpaceToOne from './multiSpaceToOne';
import rmHeadHyphen from './rmHeadHyphen';
import rmTailHyphen from './rmTailHyphen';
import extraHyphenToSpace from './extraHyphenToSpace';

const fullAddressTransformer = compose(
  multiSpaceToOne,
  multiHyphenToOne,
  zenToHan,
);

const splitAddressTransformer = compose(
  extraHyphenToSpace,
  multiHyphenToOne,
  rmTailHyphen,
  rmHeadHyphen,
);

export { fullAddressTransformer, splitAddressTransformer };
