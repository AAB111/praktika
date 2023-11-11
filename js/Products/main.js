class Product{
    constructor(name, category,price){
        this.name = name;
        this.category = category;
        this.price = price;
    }    
}
function createRow(product){
    let row = document.createElement('tr');
    row.classList.add('row-element');
    var checkboxCell = document.createElement('td');
    checkboxCell.innerHTML = '<input type="checkbox" name="checkRow">';

    var nameCell = document.createElement('td');
    nameCell.textContent = product.name;

    var categoryCell = document.createElement('td');
    categoryCell.textContent = product.category;

    var priceCell = document.createElement('td');
    priceCell.textContent = product.price;
    row.appendChild(checkboxCell)
    row.appendChild(nameCell)
    row.appendChild(categoryCell)
    row.appendChild(priceCell)
    return row
}
function addRowDelivery(product)
{
    const row = printRow(product);
    row.addEventListener('click', function(event){
        const input = row.querySelector('input');
        input.checked = !input.checked;
    });
    const input = row.querySelector('input[name=checkRow]');
    input.addEventListener('click', function(event){
        event.stopPropagation();
    });
}
function printRow(product){
    const row = createRow(product);
    document.querySelector('tbody').appendChild(row);
    return row;
}
function clearTbody(){
    const container = document.querySelector('tbody');
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
} 
}

function ShowPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const category = document.querySelector('.functions .dropdown-select').value;
    clearTbody()
    if (category === 'Категория'){
        const arrShowProduct = arrProduct.slice(startIndex, endIndex)
        arrShowProduct.forEach(product => {
            addRowDelivery(product)
        });
    }
    else{
        const arrShowProduct = []
        arrProduct.forEach(prod=>{
            if (prod.category == category)
            {
                arrShowProduct.push(prod)
            }
        })
        arrSliceProduct = arrShowProduct.slice(startIndex, endIndex)
        arrSliceProduct.forEach(product => {
            addRowDelivery(product)
        });
    }
  }

let itemsPerPage = 10
let currentPage = 0
const inputAll =  document.querySelector('input[name=checkRowAll]') 
inputAll.addEventListener('click',(event)=>{
    inputs = document.querySelectorAll('input[name=checkRow]')
    inputs.forEach(input=>{
        input.checked = inputAll.checked;
    })
})
/*Создание массива товара*/
const arrProduct = [new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Цветы','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Цветы','100')];
ShowPage(currentPage)


