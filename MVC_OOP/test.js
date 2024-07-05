const { productController } = require("./controller");

let mgr = new productManager();
 let controller=new productController(mgr);

 let flower1 = new product(12,"rose",20.50,45);
 let flower2 = new product(13,"mogra",50.50,75);
 let flower3 = new product(14,"lotus",220.50,15);
 let flower4 = new product(15,"lili",27.50,55);
 let flower5 = new product(16,"tulip",120.50,415);

 controller.push(flower1);
 controller.push(flower2);
 controller.push(flower3);
 controller.push(flower4);
 controller.push(flower5);

 let allProducts=controller.get();
 console.log(allProducts);
 allProducts.display((flower)=>{
    flower.display();
 })

 console.log("end of JS Application");