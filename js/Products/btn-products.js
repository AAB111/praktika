/*Create Row Product*/
let modalCreateProduct = null;
const createBtnProduct = document.querySelector('.create-btn');
createBtnProduct.addEventListener('click',(event)=>{
    modalCreateProduct = new ItcModal({
        title:'Создать товар',
        content: `
            <form id="contact">
              <fieldset>
              <input placeholder="Название" class='name' type="text" tabindex="2" required autofocus>
              </fieldset>
              <fieldset>
              <input placeholder="Категория" class='category' type="text" tabindex="3" required>
              </fieldset>
              <fieldset>
              <input placeholder="Цена" class='price' type="number" min = "0" tabindex="4" required>
              </fieldset>
              <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Добавить</button>
              </fieldset>
            </form>
        `,
      });
    modalCreateProduct.show();
    const form = document.querySelector('#contact')
    form.addEventListener('submit',AddNewProduct);
});
function AddNewProduct(event)
{
    const form = document.querySelector('#contact')
    const product = new Product(form.querySelector('.name').value,form.querySelector('.category').value,form.querySelector('.price').value)
    arrProduct.push(product);
    modalCreateProduct.dispose();
    form.removeEventListener('click',AddNewProduct);
    event.preventDefault();
}

/*Delete Rows*/
let deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', function(event){
    modalDelete.show();
    const okBtn = document.querySelector('.btn-ok');
    const cancelBtn = document.querySelector('.btn-cancel');
    okBtn.addEventListener('click', CheckBoxAll);
    cancelBtn.addEventListener('click', HideModal);
});
function HideModal(event) 
{
    const okBtn = document.querySelector('.btn-ok');
    okBtn.removeEventListener('click', CheckBoxAll);
    const cancelBtn = document.querySelector('.btn-cancel');
    cancelBtn.removeEventListener('click', HideModal);
    modalDelete.hide();
};
function CheckBoxAll(event){
    const inputs = document.querySelectorAll('input[name=checkRow]');
    inputs.forEach((input)=>{
        if (input.checked) {
            input.parentElement.parentElement.remove();
        }
    })
    modalDelete.hide();
    const okBtn = document.querySelector('.btn-ok');
    okBtn.removeEventListener('click', CheckBoxAll);
    const cancelBtn = document.querySelector('.btn-cancel');
    cancelBtn.removeEventListener('click', HideModal);
};

/*Edit Row*/
const editBtnProduct = document.querySelector('.edit-btn');
let rowChecked = null;
let modalEditProduct = null;
editBtnProduct.addEventListener('click',(event)=>{
    const inputs = document.querySelectorAll('input[name=checkRow]');
    product = null;
    inputs.forEach((input)=>{
        if (input.checked) {
            rowChecked = input.parentElement.parentElement;
            const tds = rowChecked.querySelectorAll('td'); 
            arrProduct.every(prod => {
                if (prod.name == tds[1].textContent & prod.category == tds[2].textContent & prod.price == tds[3].textContent)
                {
                    product = prod;
                    return false;
                }
                return true;
            });
        }
    })
    if(product != null){
        modalEditProduct = new ItcModal({
            title:'Изменить товар',
            content: `
                <form id="contact" action="" method="post">
                <fieldset>
                <input placeholder="Название" value='${product.name}' class='name' type="text" tabindex="2" required autofocus>
                </fieldset>
                <fieldset>
                <input placeholder="Категория" class='category' value='${product.category}' type="text" tabindex="3" required>
                </fieldset>
                <fieldset>
                <input placeholder="Цена" class='price' value='${product.price}' type="number" min = "0" tabindex="4" required>
                </fieldset>
                <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Изменить</button>
                </fieldset>
            </form>
            `,
        });
        modalEditProduct.show();
        const form = document.querySelector('#contact')
        form.addEventListener('submit',EditProduct);
    }
});
function EditProduct(event){
    const form = document.querySelector('#contact');
    let tds = rowChecked.querySelectorAll('td');
    tds[1].textContent = form.querySelector('.name').value;
    tds[2].textContent = form.querySelector('.category').value;
    tds[3].textContent = form.querySelector('.price').value;
    modalEditProduct.dispose();
    form.removeEventListener('click',EditProduct);
    event.preventDefault();
}

/*Filter category Rows*/
const filterCategory = document.querySelector('.dropdown-select');
filterCategory.addEventListener('change',(event)=>{
    ClearTbody()
    ShowTable(currentPage)
});

/*Filter name Rows*/
const filterName = document.querySelector('.dropdown');
filterName.addEventListener('change',(event)=>{
    ClearTbody()
    ShowTable(currentPage)
});
