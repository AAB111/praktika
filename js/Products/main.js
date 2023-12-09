function CreateRow(product){
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
function AddRowDelivery(product)
{
    const row = PrintRow(product);
    row.addEventListener('click', function(event){
        const input = row.querySelector('input');
        input.checked = !input.checked;
    });
    const input = row.querySelector('input[name=checkRow]');
    input.addEventListener('click', function(event){
        event.stopPropagation();
    });
}
function PrintRow(product){
    const row = CreateRow(product);
    document.querySelector('tbody').appendChild(row);
    return row;
}
function ClearTbody(){
    const container = document.querySelector('tbody');
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
} 
}
function ShowTable(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const category = document.querySelector('.functions .dropdown-select').value;
    const name = document.querySelector('.functions .dropdown').value;
    ClearTbody()
    if(name != ''){
        const arrShowProduct = []
        arrProduct.forEach(product => 
        {
            if (product.name.toLowerCase().match(`${name.trim().toLowerCase()}`)){
                arrShowProduct.push(product)
            }
        });
        arrSliceProduct = arrShowProduct.slice(startIndex,endIndex);
        arrSliceProduct.forEach(product => {
            AddRowDelivery(product)
        });
    }
    else if (category === 'Категория'){
        const arrShowProduct = arrProduct.slice(startIndex, endIndex)
        arrShowProduct.forEach(product => {
            AddRowDelivery(product)
        });
    }
    else
    {
        const arrShowProduct = []
        arrProduct.forEach(prod=>{
            if (prod.category == category)
            {
                arrShowProduct.push(prod)
            }
        })
        arrSliceProduct = arrShowProduct.slice(startIndex, endIndex)
        arrSliceProduct.forEach(product => {
            AddRowDelivery(product)
        });
    }
}


class Product{
    constructor(name, category,price){
        this.name = name;
        this.category = category;
        this.price = price;
    }    
}

const arrProduct = [new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Цветы','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Цветы','100'),new Product('Роза','Семена','100'),
                    new Product('Роза','Семена','100'),new Product('Роза','Цветы','100')];
let itemsPerPage = 10
let currentPage = 0 
const inputAll =  document.querySelector('input[name=checkRowAll]') 
inputAll.addEventListener('click',(event)=>{
    inputs = document.querySelectorAll('input[name=checkRow]')
    inputs.forEach(input=>{
        input.checked = inputAll.checked;
    })
})
ShowTable(currentPage)


