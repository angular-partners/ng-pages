/**
 * Normalize a port into a number, string, or false.
 */
export function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "listening" event.
 */
export function onListening(this: any) {
  const addr = this.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  // tslint:disable-next-line: no-console
  console.log('*** Server is listening on ' + bind);
}
