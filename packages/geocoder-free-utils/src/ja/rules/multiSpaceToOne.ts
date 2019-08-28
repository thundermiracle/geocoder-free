export default function multipleSpaceToOne(str: string): string {
  return str.replace(/  */g, ' ');
}
