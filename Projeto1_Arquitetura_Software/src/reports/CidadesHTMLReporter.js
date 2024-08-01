import * as fs from 'node:fs';

export default class CidadesHTMLReporter {
  ler(caminho) {
    this.cidades = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <header>
          <h1>Relatório de Nomes de Cidades</h1>
        </header>
        <main>
          <ul>
    `;

    for (const cidade of this.cidades) {
      result += `     <li><span class="cidade">${cidade.Nome}</span> - AL</li>\n`;
    }

    result += `
          </ul>
        </main>
      </body>
    </html>`;

    return result;
  }
}


