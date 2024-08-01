import CidadesHTMLReport from '../reports/CidadesHTMLReporter.js';
import CidadesTXTReporter from '../reports/CidadesTXTReporter.js';

export default class ReportFactory {
  static criarRelatorio(tipo) {
    switch (tipo) {
      case 'HTML':
        return new CidadesHTMLReport();
      case 'TXT':
        return new CidadesTXTReporter();
      default:
        throw new Error('Tipo de relatório desconhecido');
    }
  }
}
