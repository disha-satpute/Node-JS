export  default class Product{
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
