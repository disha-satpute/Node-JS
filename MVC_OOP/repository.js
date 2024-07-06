
export  default class ProductManager{
    constructor(){
        this.products=[];
    }

    insert(product){
        this.products.push(product);
    }

    update(id, productTobeUpdated){
        this.products=products.filter((product)=>(product.id !==id));
        this.product.push(productTobeUpdated);
    }

    getAll(){
        return this.products;
    }

    getById(id){
        let foundProduct=this.products.find((product)=>(product.id ==id));
        return foundProduct;
    }

    delete(id){
        this.products=products.filter((product)=>(product.id !==id));
        return this.products;
    }
}




