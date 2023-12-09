class Delivery{
    constructor(client,price,comment,dateCreate,dateEnd,status='Новые'){
        this.client = client;
        this.price = price;
        this.comment = comment;
        this.dateCreate = dateCreate;
        this.dateEnd = dateEnd;
        this.status = status;
    }    
}
function CreateRow(delivery){
    let row = document.createElement('tr');
    row.classList.add('row-element');

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

    row.appendChild(clientCell)
    row.appendChild(priceCell)
    row.appendChild(commentCell)
    row.appendChild(dateCreateCell);
    row.appendChild(dateEndCell);
    row.appendChild(methodObtainingCell);
    return row
}
function AddRowDelivery(delivery)
{
    const row = PrintRow(delivery);
    row.addEventListener('click', function(event){
        const modalEditStatus = new ItcModal({
            title:'Изменить товар',
            content: `
                <form id="contact" action="" method="post">
                <fieldset>
                <input placeholder="Клиент" value='${delivery.client}' class='name' type="text" tabindex="2" required autofocus>
                </fieldset>
                <fieldset>
                <input placeholder="Цена" class='price' value='${delivery.price}' type="number" min = "0" tabindex="4" required>
                </fieldset>
                <fieldset>
                <input placeholder="Дата исполнения" class='category' value='${delivery.dateEnd}' type="text" tabindex="3" required>
                </fieldset>
                <fieldset>
                <input placeholder="Статус" class='status' value='${delivery.status}' type="number" min = "0" tabindex="4" required>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Изменить</button>
                </fieldset>
                
            </form>
            `,
        });
        modalEditStatus.show();
        const form = document.querySelector('#contact')
        form.addEventListener('submit',EditProduct);
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
    ClearTbody()
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // const category = document.querySelector('.functions .dropdown-select').value;
    const client = document.querySelector('.dropdown .dropdown-select').value;
    let arrShowDelivery = []
    if (client != '') 
    {
        arrDelivery.forEach(delivery=>{
            if (delivery.client.toLowerCase().match(client))
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
            AddRowDelivery(delivery)
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
            AddRowDelivery(delivery)
        });
    }
  }
const listLi = document.querySelectorAll('.list-status li')
listLi.forEach((li)=>{
    li.addEventListener('click',(event)=>{
        li.classList.toggle('list-status-li-active')
        currentStatus.classList.toggle('list-status-li-active')
        currentStatus = li
        ShowTable(currentPage)
    })
})
currentStatus = listLi[0]
currentStatus.classList.toggle('list-status-li-active')
let itemsPerPage = 10
let currentPage = 0
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
const arrDelivery = [new Delivery('Иван Иванов','1000','',time,timeEnd,'собранные'),
                    new Delivery('Макс Иванов','800','',time,timeEnd,'возврат'),
                    new Delivery('Игорь Иванов','900','',time,timeEnd),
                    new Delivery('Дима Иванов','1200','',time,timeEnd),
                    new Delivery('Дима Иванов','1500','',time,timeEnd)]
ShowTable(currentPage)
