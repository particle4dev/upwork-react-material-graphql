type GetFullURLParam = {
  host?: string,
  pathname?: string,
  protocol?: string,
  port?: number
}

export default function getFullURL({
  host = process.env.HOST,
  pathname = '',
  protocol = process.env.PROTOCOL,
  port = parseInt(process.env.PORT)
}: GetFullURLParam): string {
  if(port === 80) {
    return `${protocol}://${host}${pathname}`;
  }
  return `${protocol}://${host}:${port}${pathname}`;
}
