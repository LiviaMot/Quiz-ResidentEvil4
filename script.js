document.addEventListener('DOMContentLoaded', function () {
  const perguntas = [
    {
      pergunta: 'Qual é o protagonista principal de Resident Evil 4?',
      respostas: ['Leon Kennedy', 'Chris Redfield', 'Jill Valentine'],
      correta: 0
    },
    {
      pergunta:
        'Qual é o nome da misteriosa seita religiosa presente em Resident Evil 4?',
      respostas: [
        'Culto dos Los Illuminados',
        'Irmandade dos Majinis',
        'Sociedade dos Ganados'
      ],
      correta: 0
    },
    {
      pergunta: 'Onde se passa a maior parte da ação em Resident Evil 4?',
      respostas: ['Raccoon City', 'Arklay Mountains', 'Vila Rural na Espanha'],
      correta: 2
    },
    {
      pergunta: 'Quem é o chefe final em Resident Evil 4?',
      respostas: ['Albert Wesker', 'Osmund Saddler', 'Jack Krauser'],
      correta: 1
    },
    {
      pergunta:
        'Qual é o nome da irmã de Ashley Graham, a filha do presidente, em Resident Evil 4?',
      respostas: ['Lisa Graham', 'Mia Graham', 'Ada Wong'],
      correta: 2
    },
    {
      pergunta: 'Qual é o objetivo principal de Leon em Resident Evil 4?',
      respostas: [
        'Salvar sua irmã',
        'Salvar a filha do presidente',
        'Destruir Umbrella Corporation'
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é a nacionalidade de Ada Wong em Resident Evil 4?',
      respostas: ['Americana', 'Chinesa', 'Britânica'],
      correta: 1
    },
    {
      pergunta:
        'Qual é o nome da organização que Ada Wong trabalha em Resident Evil 4?',
      respostas: ['Umbrella Corporation', 'S.T.A.R.S.', 'The Organization'],
      correta: 2
    },
    {
      pergunta: 'Quem é o vilão principal que retorna em Resident Evil 4?',
      respostas: ['Nemesis', 'William Birkin', 'O Verdugo'],
      correta: 2
    },
    {
      pergunta:
        'Qual é o nome do comerciante misterioso que aparece ao longo do jogo em Resident Evil 4?',
      respostas: ['Barry Burton', 'Albert Wesker', 'O Mercador'],
      correta: 2
    }
  ]

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const residentEvil = template.content.cloneNode(true)
    residentEvil.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
      const dt = residentEvil.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta=' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        // acertos
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      // coloca a pergunta na tela
      residentEvil.querySelector('dl').appendChild(dt)
    }
    residentEvil.querySelector('dl dt').remove()

    quiz.appendChild(residentEvil)
  }
})
