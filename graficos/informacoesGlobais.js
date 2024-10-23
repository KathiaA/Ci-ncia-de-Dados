const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}

const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Podemos afirmar que no mundo existem cerca de <span> ${total_pessoas_mundo} </span> e desse total  <span> ${total_pessoas_com_acesso_a_educacao} </span> de pessoas tem acesso à educação. O tempo médio por dia que passam estudando é de <span> ${tempo_medio_dia_estudando} horas, já a quantidade de pessoas com ensino  superior é de aproximadamente <span> ${total_pessoas_com_educacao_superior} </span>`
    const container = document.getElementById('graficos-container')
container.appendChield(paragrafo):
vizualizarInformacoesGlobais()