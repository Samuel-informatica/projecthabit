// form é a várialvel que está recebendo a informação do querySelector("form")
const form = document.querySelector("form")
// Está sendo criado a variável nlwSetup para receber tudo que contém no form, criando a variável NLWSetup
const nlwSetup = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Data está incluso")
    return
  }

  alert("Incluido com sucesso")
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('NWLSetupHabits', JSON.stringify(nlwSetup.data))
}
// // Propriedade de data, precisar ser conforme tem dentro da div no html, exemplo data-name="run"
// const data = {
//   run: ["01-16", "01-17", "01-18"],
//   water: ["01-19", "01-20", "01-21"],
//   food: ["01-22", "01-17", "01-18"],
//   journal: ["01-16", "01-17", "01-18"],
//   love: ["01-16", "01-17", "01-18", "01-22", "01-23", "01-24"],
// }

const data = JSON.parse(localStorage.getItem("NWLSetupHabits")) || {}

// // Essa função serve para setar a informação que contém dentro do data e mandar para dentro da nlwSetup, que seria no caso dentro do form
nlwSetup.setData(data)
// //Essa função serve para executar a função da inserção
nlwSetup.load()
