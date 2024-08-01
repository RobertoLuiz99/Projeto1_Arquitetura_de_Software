import ReportFactory from './factories/ReportFactory.js';
import RelatorioGenerator from './generators/RelatorioGenerator.js';
import { FormatacaoSimples, FormatacaoDetalhada } from './strategies/FormatarStrategy.js';

const [,, caminhoArquivo, formato] = process.argv;

// Validação do formato
if (!['html', 'txt'].includes(formato)) {
  console.error('Formato inválido. Use "html" ou "txt".');
  process.exit(1);
}

// Criação do relatório usando a fábrica
const relatorio = ReportFactory.criarRelatorio(formato.toUpperCase());

// Definindo a estratégia de formatação
const formatacao = formato === 'html' ? new FormatacaoDetalhada() : new FormatacaoSimples();

// Criação do gerador de relatórios
const gerador = new RelatorioGenerator(relatorio, formatacao);

// Geração do relatório
gerador.gerarRelatorio(caminhoArquivo);