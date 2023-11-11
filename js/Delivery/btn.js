// /*Delete Rows*/
// let deleteBtn = document.querySelector('.delete-btn');
// deleteBtn.addEventListener('click', function(event){
//     modalDelete.show();
//     const okBtn = document.querySelector('.btn-ok');
//     const cancelBtn = document.querySelector('.btn-cancel');
//     okBtn.addEventListener('click', checkBoxAll);
//     cancelBtn.addEventListener('click', hideModal);
// });
function hideModal(event) 
{
    const okBtn = document.querySelector('.btn-ok');
    okBtn.removeEventListener('click', checkBoxAll);
    const cancelBtn = document.querySelector('.btn-cancel');
    cancelBtn.removeEventListener('click', hideModal);
    modalDelete.hide();
}
function checkBoxAll(event){
    const inputs = document.querySelectorAll('input[name=checkRow]');
    inputs.forEach((input)=>{
        if (input.checked) {
            input.parentElement.parentElement.remove();
        }
    })
    modalDelete.hide();
    const okBtn = document.querySelector('.btn-ok');
    okBtn.removeEventListener('click', checkBoxAll);
    const cancelBtn = document.querySelector('.btn-cancel');
    cancelBtn.removeEventListener('click', hideModal);
};

/*Filter Rows*/
const inputClient = document.querySelector('.functions .dropdown input')
inputClient.addEventListener('change',(event)=>{
    filterClient = inputClient.value.toLowerCase().trim()
    ShowPage(currentPage)
})

/*Create Row*/

const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click',(event)=>{
    modalCreate.show();
    const form = document.querySelector('#contact')
    form.addEventListener('submit',addNewProduct);
});
function addNewProduct(event){
    const form = document.querySelector('#contact')
    const product = new Product(form.querySelector('.name').value,form.querySelector('.category').value,form.querySelector('.price').value)
    arrDelivery.push(product);
    modalCreate.hide();
    form.removeEventListener('click',addNewProduct);
    event.preventDefault();
}

/*Input page*/
const inputText = document.querySelector('.page')
inputText.addEventListener('change', (event) =>{
    const page = Number(inputText.value);
    ShowPage(page)
    currentPage = page;
})

/*Input count product on page*/

const inputCount = document.querySelector('.parametrs-table .dropdown-select')
inputCount.addEventListener('change', (event) =>{
    itemsPerPage = Number(inputCount.value)
    ShowPage(currentPage)
})