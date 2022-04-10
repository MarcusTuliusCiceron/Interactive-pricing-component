const bar = document.querySelector('.input_bar')
const pageview = document.querySelector('.pageview')
const monthprice = document.querySelector('.monthprice')
const billingToggle = document.querySelector('.billing_toggle')

const priceNodiscount = [8, 12, 16, 24, 36]
const priceDiscount = [6, 9, 12, 18, 27] 

const view = ["10K", "50K", "100K", "500K", "1M"]

let index = 3




billingToggle.addEventListener("input", ()=>{
    if (billingToggle.checked){
        monthprice.innerText = `$${priceDiscount[index]} `
    }
    else{
        monthprice.innerText = `$${priceNodiscount[index]} `
    }

})

bar.addEventListener('input', ()=>{

    if (bar.value >= priceNodiscount[index + 1]){
        index = index + 1
        
    }
    if (bar.value < priceNodiscount[index]){
        index = index - 1
    }
    if (billingToggle.checked){
        monthprice.innerText = `$${priceDiscount[index]} `
    }
    else{
        monthprice.innerText = `$${priceNodiscount[index]} `
    }
    pageview.innerText = `${view[index]} pageviews`
    
    console.log(index)
})



    //document.documentElement.style.setProperty('--progress', `90%` )

