const addProducts = (id)=>{
    let shoppingCard = getData()
    let quantity = shoppingCard[id]
    if(quantity){
        let newQuantity = quantity + 1
        shoppingCard[id] = newQuantity
    } else{
        shoppingCard[id] = 1
    }
    localStorage.setItem('cardId', JSON.stringify(shoppingCard))
}

// get data from local store 
const getData = ()=>{
    let shoppingCard = {}

    let storedData = localStorage.getItem('cardId')
    if(storedData){
        shoppingCard = JSON.parse(storedData)
    }
    return shoppingCard
}

const removeProduct = (id) => {
    let shoppingCard = getData()

    if(id in shoppingCard){
        delete shoppingCard[id]
        localStorage.setItem('cardId', JSON.stringify(shoppingCard))
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('cardIdt');
}


export {addProducts,getData, removeProduct,deleteShoppingCart}

