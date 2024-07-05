//Model
class Product{
    //Parameterized constructor
    constructor(id, title, description, unitprice, quantity){
        this.id=id;
        this.title=title;
        this.description=description;
        this.unitprice=unitprice;
        this.quantity=quantity;
    }

    display(){
        console.log( "Id="+this.id);
        console.log( "Title="+this.title);
        console.log( "Description="+this.description);
        console.log( "Unit Price="+this.unitprice);
        console.log( "Quantities Available="+this.quantity);
    }
};

//Repository Manager
//Collection

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




