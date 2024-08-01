import * as fs from 'node:fs';

export default class CidadesTXTReporter {
  ler(caminho) {
    this.cidades = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    this.cidades = JSON.parse(this.cidades);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades\n=============================`; 

    for (const cidade of this.cidades) {
      result += `\n* ${cidade['Nome']}`;
    }

    return result;
  }
}


