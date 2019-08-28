export default function removeHeadHyphen(str: string): string {
  return str.replace(/^[-]*/, '');
}
