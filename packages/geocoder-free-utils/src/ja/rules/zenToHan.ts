export default function zenkakuToHankaku(str: string): string {
  // 10進数の場合
  let result = str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });

  // // 16進数の場合
  // result = result.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => {
  //   return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  // });

  // 特殊文字（ハイフンとスペース）
  //　日本語に使う「ー」を変換しない
  result = result.replace(/[―－‐]/g, '-');
  result = result.replace(/　/g, ' ');

  return result;
}
