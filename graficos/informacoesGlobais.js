const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9) 
    const pessoasAcessoEducacao = (dados.total_pessoas_com_acesso_a_educacao/1e9)
    const pessoasEducacaoSuperior = (dados.total_pessoas_com_educacao_superior/1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas)*60)
    const porcentagemConectada = ((pessoasEducacaoSuperior/pessoasNoMundo)*100).toFixed(2)
    console.log(dados)
const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Podemos afirmar que no mundo existem cerca de <span> ${pessoasNoMundo} </span> e desse total  <span> ${pessoasAcessoEducacao} </span> de pessoas tem acesso à educação. O tempo médio por dia que passam estudando é de <span> ${horas}</span> horas e <span> ${minutos}</span> minutos, já a quantidade de pessoas com ensino  superior é de aproximadamente <span> ${pessoasEducacaoSuperior} </span>.<br>Isso equivale a aproximadamente <span> ${porcentagemConectada}% </span> da população mundial.`
    const container = document.getElementById('graficos-container')
container.appendChild(paragrafo);
}
vizualizarInformacoesGlobais()