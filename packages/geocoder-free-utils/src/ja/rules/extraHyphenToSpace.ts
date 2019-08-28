import isAlphaOrNum from '../../lib/isAlphaOrNum';
import countOfStr from '../../lib/countOfStr';

/**
 * ハイフン前後に英数字以外の文字がある場合、ハイフンをスペースへ
 * 1-日, 日-2　→　1 日, 日 2
 */
export default function extraHyphenToSpace(str: string): string {
  const baseStr = str;
  const hyphenTo = ' ';

  const hyphenCount = countOfStr(baseStr, '-');

  const replaceList = [];
  let startPos = 0;
  for (let index = 0; index < hyphenCount; index += 1) {
    const hInd = baseStr.indexOf('-', startPos);
    startPos = hInd + 1;

    // 先頭と最後ではない場合
    if (hInd !== 0 && hInd !== baseStr.length - 1) {
      const cBef = baseStr.substr(hInd - 1, 1);
      const cAft = baseStr.substr(hInd + 1, 1);

      if (!isAlphaOrNum(cBef) && isAlphaOrNum(cAft)) {
        /*
         * character before is not number, but after is, replace to space
         * 新宿ビル-205室
         */
        replaceList.push([`${cBef}-${cAft}`, `${cBef}${hyphenTo}${cAft}`]);
      } else if (isAlphaOrNum(cBef) && !isAlphaOrNum(cAft)) {
        /*
         * character before is number, but after is not, replace to space
         * 3-2-1-新宿ビル
         */
        replaceList.push([`${cBef}-${cAft}`, `${cBef}${hyphenTo}${cAft}`]);
      }
    }
  }
  // console.log(replaceList)
  const result = replaceList.reduce((prev, [bef, aft]) => {
    return prev.replace(bef, aft);
  }, baseStr);

  return result;
}
