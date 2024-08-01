import * as fs from 'node:fs';

class ReportDecorator {
  constructor(relatorio) {
    this.relatorio = relatorio;
  }

  ler(caminho) {
    this.relatorio.ler(caminho);
  }

  parse() {
    this.relatorio.parse();
  }

  reportar() {
    return this.relatorio.reportar();
  }

  gerarRelatorio(caminhoArquivo) {
    this.ler(caminhoArquivo);
    this.parse();
    const resultado = this.reportar();
    fs.writeFileSync(caminhoArquivo, resultado, 'utf8');
    console.log(`Relatório gerado com sucesso: ${caminhoArquivo}`);
  }
}

export default ReportDecorator;
