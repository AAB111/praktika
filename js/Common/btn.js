/*Input page*/

const inputText = document.querySelector('.page')
inputText.addEventListener('change', (event) =>{
    const page = Number(inputText.value);
    ShowTable(page)
    currentPage = page;
})

/*Input count product on page*/

const inputCount = document.querySelector('.parametrs-table .dropdown-select')
inputCount.addEventListener('change', (event) =>{
    itemsPerPage = Number(inputCount.value)
    ShowTable(currentPage)
})