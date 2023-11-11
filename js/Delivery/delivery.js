class Delivery{
    constructor(id, client,price,comment,dateCreate,dateEnd,methodObtaining){
        this.id = id;
        this.client = client;
        this.price = price;
        this.comment = comment;
        this.dateCreate = dateCreate;
        this.dateEnd = dateEnd;
        this.status = 'Новые'
        this.methodObtaining = methodObtaining;
    }    
}
function createRow(delivery){
    let row = document.createElement('tr');
    row.classList.add('row-element');

    var idCell = document.createElement('td');
    idCell.textContent = delivery.id;

    var clientCell = document.createElement('td');
    clientCell.textContent = delivery.client;

    var priceCell = document.createElement('td');
    priceCell.textContent = delivery.price;

    var commentCell = document.createElement('td');
    commentCell.textContent = delivery.comment;

    var dateCreateCell = document.createElement('td');
    dateCreateCell.textContent = delivery.dateCreate;

    var dateEndCell = document.createElement('td');
    dateEndCell.textContent = delivery.dateEnd;
    
    var  methodObtainingCell = document.createElement('td');
    methodObtainingCell.textContent = delivery.methodObtaining;

    row.appendChild(idCell)
    row.appendChild(clientCell)
    row.appendChild(priceCell)
    row.appendChild(commentCell)
    row.appendChild(dateCreateCell);
    row.appendChild(dateEndCell);
    row.appendChild(methodObtainingCell);
    return row
}
function addRowDelivery(delivery)
{
    const row = printRow(delivery);
    // row.addEventListener('click', function(event){
    //     const input = row.querySelector('input');
    //     input.checked = !input.checked;
    // });
    // const input = row.querySelector('input[name=checkRow]');
    // input.addEventListener('click', function(event){
    //     event.stopPropagation();
    // });
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
let filterClient = ''
function ShowPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const category = document.querySelector('.functions .dropdown-select').value;
    clearTbody()
    let arrShowDelivery = []
    if (filterClient != '') 
    {
        arrDelivery.forEach(delivery=>{
            if (delivery.client.toLowerCase().match(filterClient))
            {
                arrShowDelivery.push(delivery)
            }
        })
    }
    else
    {
        arrShowDelivery = arrDelivery
    }
    if (currentStatus.textContent.trim().toLowerCase() === 'все'){
        arrShowDelivery = arrShowDelivery.slice(startIndex, endIndex)
        arrShowDelivery.forEach(delivery => {
            addRowDelivery(delivery)
        });
    }
    else
    {
        let arrShow =[] 
        arrShowDelivery.forEach(delivery=>{
            if (delivery.status.toLowerCase() === currentStatus.textContent.trim().toLowerCase())
            {
                arrShow.push(delivery)
            }
        })
        let arrSliceDelivery = arrShow.slice(startIndex, endIndex)
        arrSliceDelivery.forEach(delivery => {
            addRowDelivery(delivery)
        });
    }
  }

const listLi = document.querySelectorAll('.list-status li')
listLi.forEach((li)=>{
    li.addEventListener('click',(event)=>{
        li.classList.toggle('list-status-li-active')
        currentStatus.classList.toggle('list-status-li-active')
        currentStatus = li
        ShowPage(currentPage)
    })
})
currentStatus = listLi[0]
currentStatus.classList.toggle('list-status-li-active')
let itemsPerPage = 10
let currentPage = 0
// const inputAll =  document.querySelector('input[name=checkRowAll]') 
// inputAll.addEventListener('click',(event)=>{
//     inputs = document.querySelectorAll('input[name=checkRow]')
//     inputs.forEach(input=>{
//         input.checked = inputAll.checked;
//     })
// })
/*Создание массива товара*/
const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  };
const now = new Date()
const time = now.toLocaleString("ru", options)
now.setDate(now.getDate() + 2)
const timeEnd = now.toLocaleString('ru', options)
const arrDelivery = [new Delivery('0','Иван Иванов','1000','',time,timeEnd,'Самовывоз'),
                    new Delivery('1','Макс Иванов','800','',time,timeEnd,'Самовывоз'),
                    new Delivery('2','Игорь Иванов','900','',time,timeEnd,'Самовывоз'),
                    new Delivery('3','Дима Иванов','1200','',time,timeEnd,'Самовывоз'),
                    new Delivery('4','Дима Иванов','1500','',time,timeEnd,'Самовывоз')]
ShowPage(currentPage)