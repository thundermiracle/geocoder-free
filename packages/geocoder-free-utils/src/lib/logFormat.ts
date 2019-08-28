function logFormat(msg: string, func: (msg: string) => void | null): string {
  const formattedMsg = `${new Date().toLocaleString()} -- ${msg}`;
  if (func != null) {
    func(formattedMsg);
  }
  return formattedMsg;
}

export default logFormat;
