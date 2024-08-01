import ReportFactory from './factories/ReportFactory.js';
import RelatorioGenerator from './generators/RelatorioGenerator.js';
import { FormatacaoSimples, FormatacaoDetalhada } from './strategies/FormatarStrategy.js';

const [,, caminhoArquivo, formato] = process.argv;


if (!['html', 'txt'].includes(formato)) {
  console.error('Formato inválido. Use "html" ou "txt".');
  process.exit(1);
}


const relatorio = ReportFactory.criarRelatorio(formato.toUpperCase());


const formatacao = formato === 'html' ? new FormatacaoDetalhada() : new FormatacaoSimples();


const gerador = new RelatorioGenerator(relatorio, formatacao);


gerador.gerarRelatorio(caminhoArquivo);