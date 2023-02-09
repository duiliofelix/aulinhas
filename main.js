let alunos = ["Leo 1", "Leo 2", "Van", "Fany", "Robinho"]

for (let indice = 0; indice < alunos.length; indice += 1) {
    console.log("O nome do aluno é " + alunos[indice])
}

const meuInput = document.querySelector('.search-input')
const meuBtn = document.querySelector('button')

let valorDoTexto
meuInput.addEventListener('keyup', (event) => {
    valorDoTexto = event.target.value
})

meuBtn.addEventListener('click', () => {
    if (valorDoTexto % 2 == 0) {
        console.log('é par')
    } else {
        console.log('é ímpar')
    }
})


// Verificar se o valorDoTexto é de fato um número