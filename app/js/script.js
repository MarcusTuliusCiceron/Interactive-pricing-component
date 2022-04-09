const btnProduct = document.querySelector('.btn_header_product')
const listProduct = document.querySelector('.list_header_product')
const btnCompany = document.querySelector('.btn_header_company')
const listCompany = document.querySelector('.list_header_company')
const btnConnect = document.querySelector('.btn_header_connect')
const listConnect = document.querySelector('.list_header_connect')
const hamburgerBtn = document.querySelector('.HamburgerBtn')
const hamburgerMenu = document.querySelector('.HamburgerMenu')

function openMenu(list, btn){
    closeMenu()
    console.log('open')
    list.classList.add('open')
    btn.classList.add('open')
}

function closeMenu(){
    listCompany.classList.remove('open')
    listConnect.classList.remove('open')
    listProduct.classList.remove('open')
    btnCompany.classList.remove('open')
    btnConnect.classList.remove('open')
    btnProduct.classList.remove('open')
}

document.body.addEventListener('click', (e)=>{
    if ( e.explicitOriginalTarget == btnProduct){
        if (listProduct.classList.contains('open')){
            closeMenu()
        }
        else{
            openMenu(listProduct, btnProduct)
            listConnect.classList.remove('open')
            listCompany.classList.remove('open')
        }
        
    }
    else if ( e.explicitOriginalTarget == btnCompany){
        if (listCompany.classList.contains('open')){
            closeMenu()
        }
        else{
            openMenu(listCompany, btnCompany)
            listConnect.classList.remove('open')
            listProduct.classList.remove('open')
        }
        
    }
    else if ( e.explicitOriginalTarget == btnConnect){
        if (listConnect.classList.contains('open')){
            closeMenu()
        }
        else{
            openMenu(listConnect, btnConnect)
            listProduct.classList.remove('open')
            listCompany.classList.remove('open')
        }
    }
    else{
        closeMenu()
    }

    console.log(e.explicitOriginalTarget)
}) 

hamburgerBtn.addEventListener("click", ()=>{
    hamburgerBtn.classList.toggle('open')
    hamburgerMenu.classList.toggle('open')
})