import { Product} from "./Class/Product"

let products = []

document.querySelector('.productFormContainer__form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let productNameTextField = document.getElementById('productName')
    let productPriceTextField = document.getElementById('productPrice')
    let productNameTextYear = document.getElementById('productYear')
    let newProduct = new Product(productNameTextField.value, productPriceTextField.value, productNameTextYear.value)
    
    if(newProduct.checkIfDataIsvalid())
    {
        products.push(newProduct)
        newProduct.addProductToDom()
    }
    else
    {
        alert("Invalid Input")
    }
    
})