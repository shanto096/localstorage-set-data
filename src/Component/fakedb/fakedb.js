
const addToCard = (_id) => {
    let shopingCart = {};
     
    const addtoshoping = localStorage.getItem("shopingCart")
    if (addtoshoping) {
        shopingCart = JSON.parse(addtoshoping)
    }
    else{
        shopingCart = {}; 
    }

    

    const add2 = shopingCart[_id]
    // const add = localStorage.getItem(_id)
if (add2) {
    const newAdd = parseInt(add2) + 1
    shopingCart[_id] = newAdd
    // localStorage.setItem(_id, newAdd)

}
else{
    shopingCart[_id] = 1
    // localStorage.setItem(_id, 1)
}
    
localStorage.setItem("shopingCart",JSON.stringify(shopingCart))

}

const DeleteTodb = (_id) =>{
    const addtoshoping = localStorage.getItem("shopingCart")
    if (addtoshoping) {
        const deleteCart = JSON.parse(addtoshoping)
        if (_id in deleteCart) {
            delete deleteCart[_id]
            localStorage.setItem("shopingCart",JSON.stringify(deleteCart))
        }
       
    }
    
}
export {
    addToCard,
    DeleteTodb
}