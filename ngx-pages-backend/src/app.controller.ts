import { Controller, Get, Header } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Header('content-type', 'text/html')
  home(): string {

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>npx-pages-backend</title>
</head>
<body id="home">

  <h1>npx-pages-backend</h1>

  <p>
  <a href="/graphql">GraphQL playground</a>
  </p>

  <hr>
  <small>Uptime: ${ this.formatSeconds(process.uptime()) }</small>

</body>
</html>`;
  }

  private formatSeconds(seconds) {
    const pad = (s) => {
      return (s < 10 ? '0' : '') + s;
    };

    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor(seconds % (60 * 60) / 60);
    const secs = Math.floor(seconds % 60);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(secs);
  }
}
