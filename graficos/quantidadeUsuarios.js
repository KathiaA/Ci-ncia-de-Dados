import { getCSS, tickConfig } from "./common.js";
async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)

const data = [
  {
    x: nomeDasRedes,
    y: quantidadeUsuarios,
    type: 'bar',
    marker: {
       color: getCSS('--primary-color')
    }
  }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
     title: {
    text: 'Educação no Mundo',
    x: 0,
     font: {
         color: getCSS('--primary-color'),
         family: getCSS('--font'),
         size: 30
     }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Niveis Educacionais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Pessoas com acesso à Educação',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()