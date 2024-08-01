export class FormatacaoSimples {
    formatar(cidade) {
      return `* ${cidade.Nome}\n`;
    }
  }
  
  export class FormatacaoDetalhada {
    formatar(cidade) {
      return `<li><span class="cidade">${cidade.Nome}</span> - ${cidade.Estado}</li>\n`;
    }
  }
  