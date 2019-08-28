export default function multipleHyphenToOne(str: string): string {
  return str.replace(/--*/g, '-');
}
