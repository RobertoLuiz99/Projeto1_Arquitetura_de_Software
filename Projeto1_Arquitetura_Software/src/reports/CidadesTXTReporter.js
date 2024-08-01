import * as fs from 'node:fs';

export default class CidadesTXTReporter {
  ler(caminho) {
    this.cidades = fs.readFileSync(caminho, 'utf-8'); // Leia o arquivo como texto
  }

  parse() {
    this.cidades = JSON.parse(this.cidades); // Converta o texto JSON para objeto
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades\n=============================`; 

    for (const cidade of this.cidades) {
      result += `\n* ${cidade['Nome']}`;
    }

    return result;
  }
}


