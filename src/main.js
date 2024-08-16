import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterData } from './dataFunctions.js';
import { filterInput } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';



const mainConteiner = document.getElementById("root")
mainConteiner.appendChild(renderItems(data))

const filterSelectRegion = document.getElementById("filterRegion")

filterSelectRegion.addEventListener("change", () => {
  mainConteiner.innerHTML = ""
  const filteredData = filterData(data, "Región", filterSelectRegion.value)
  mainConteiner.appendChild(renderItems(filteredData))
})

const filterSelectDepartamento = document.getElementById("filterDepartamento")

filterSelectDepartamento.addEventListener("change", () => {
  mainConteiner.innerHTML = ""
  const filteredData = filterData(data, "Departamento", filterSelectDepartamento.value)
  mainConteiner.appendChild(renderItems(filteredData))
})


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  mainConteiner.innerHTML = ""
  const filteredInput = filterInput(data, searchInput.value)
  mainConteiner.appendChild(renderItems(filteredInput))
})

const selectOrder = document.getElementById("filterOrdenar");
selectOrder.addEventListener("change", () => {
  mainConteiner.innerHTML = ""
  const sortedData = sortData(data, selectOrder.value)
  mainConteiner.appendChild(renderItems(sortedData))
})
