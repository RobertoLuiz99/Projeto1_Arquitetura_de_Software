import * as fs from 'node:fs';
import path from 'node:path';
import CidadesHTMLReporter from '../reports/CidadesHTMLReporter.js';
import CidadesTXTReporter from '../reports/CidadesTXTReporter.js';

const testDataFile = path.resolve('./data/cidades-2.json');
const outputHTMLFile = path.resolve('./src/test/relatorio_novo.html');
const outputTXTFile = path.resolve('./src/test/relatorio.txt');

const runTest = () => {
  try {
    // Teste HTML
    const htmlReporter = new CidadesHTMLReporter();
    htmlReporter.ler(testDataFile);
    htmlReporter.parse();
    const htmlResult = htmlReporter.reportar();
    fs.writeFileSync(outputHTMLFile, htmlResult);
    console.log(`Relatório HTML gerado com sucesso: ${outputHTMLFile}`);

    // Teste TXT
    const txtReporter = new CidadesTXTReporter();
    txtReporter.ler(testDataFile);
    txtReporter.parse();
    const txtResult = txtReporter.reportar();
    fs.writeFileSync(outputTXTFile, txtResult);
    console.log(`Relatório TXT gerado com sucesso: ${outputTXTFile}`);

  } catch (error) {
    console.error(`Erro ao processar o arquivo: ${error.message}`);
  }
};

runTest();
