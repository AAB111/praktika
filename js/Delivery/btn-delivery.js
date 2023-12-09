/*Create Row Delivery*/
let modalCreateDelivery = null;
const createBtnDelivery = document.querySelector('.create-btn');
createBtnDelivery.addEventListener('click',(event)=>{
    modalCreateDelivery = new ItcModal({
        title:'Создать заказ',
        content: `
            <form id="contact" action="" method="post">
              <fieldset>
              <input placeholder="Клиент" class='name' type="text" tabindex="2" required autofocus>
              </fieldset>
              <fieldset>
              <input placeholder="Стоимость" class='price' type="number" min = "0" tabindex="3" required>
              </fieldset>
              <fieldset>
              <input placeholder="Комментарий" class='category' type="text" tabindex="2" required>
              </fieldset>
              <fieldset>
              <input placeholder="Дата исполнения" class='category' type="text" tabindex="2" required>
              </fieldset>
              <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Создать</button>
              </fieldset>
            </form>
        `,
    });
    modalCreateDelivery.show();
    const form = document.querySelector('#contact');
    form.addEventListener('submit',addDelivery);
});
function addDelivery(event){
    const form = document.querySelector('#contact')
    const now = new Date()
    const time = now.toLocaleString("ru", options)
    const delivery = new Delivery(form.querySelector('.name').value,form.querySelector('.category').value,form.querySelector('.price').value,time)
    arrDelivery.push(delivery);
    modalCreateDelivery.dispose();
    form.removeEventListener('click',addDelivery);
    event.preventDefault();
}

/*Filter client*/
const filterClient = document.querySelector('.dropdown');
filterClient.addEventListener('change',(event)=>{
    ClearTbody()
    ShowTable(currentPage)
});
