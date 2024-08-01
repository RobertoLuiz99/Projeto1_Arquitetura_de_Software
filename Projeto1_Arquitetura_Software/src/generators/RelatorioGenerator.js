import * as fs from 'node:fs';

export default class RelatorioGenerator {
  constructor(relatorio, formatacao) {
    this.relatorio = relatorio;
    this.formatacao = formatacao;
  }

  gerarRelatorio(caminhoArquivo) {
    this.relatorio.ler(caminhoArquivo);
    this.relatorio.parse();
    const resultado = this.relatorio.reportar(this.formatacao);
    fs.writeFileSync(caminhoArquivo, resultado, 'utf8');
    console.log(`Relatório gerado com sucesso: ${caminhoArquivo}`);
  }
}