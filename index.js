const fetch = require('node-fetch')

// https://www.npmjs.com/package/node-fetch#extract-set-cookie-header
const url = 'http://www.receita.fazenda.gov.br/PessoaJuridica/CNPJ/cnpjreva/cnpjreva_solicitacao3.asp'

;(async _ => {
  const res = await fetch(url)
  const cookies = res.headers.raw()['set-cookie']
  console.log(cookies)
})()