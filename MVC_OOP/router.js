import Product from './model.js';
import ProductController from './controller.js';
import ProductManager from './repository.js';
export default function(app){
    let allProducts=[];
    let mgr=new ProductManager();
    let controller=new ProductController(mgr);
    app.get("/api/products",(req, res)=>{
                                        //let allProducts=productController.get();
                                        //Models
                                        let flower1=new Product(12,"Gerbera","Wedding Flower",12,512500);
                                        let flower2=new Product(13,"Rose","Valentine Flower",26,5564);
                                        let flower3=new Product(14,"Lotus","Worship Flower",39,87000);
                                        let flower4=new Product(15,"Marigold","Festival Flower",4,87900);

                                        //Performing operations
                                        controller.post(flower1);
                                        controller.post(flower2);
                                        controller.post(flower3);
                                        controller.post(flower4);
                                        allProducts=controller.get()
                                        res.send(allProducts)});
    app.get("/api/products/:id", (req, res) => {
                                            let productId = req.params.id;
                                            let product = controller.getById(productId);
                                            res.send(product);
                                          });
  // POST a new product
  app.post("/api/products", (req, res) => {
    let { id, name, description, quantity, price } = req.body;
    let newProduct = new Product(id, name, description, quantity, price);
    controller.post(newProduct);
    res.send("Product added successfully");
  });

  // PUT (update) an existing product
  app.put("/api/products/:id", (req, res) => {
    let productId = req.params.id;
    let { name, description, quantity, price } = req.body;
    let updatedProduct = new Product(productId, name, description, quantity, price);
    controller.put(productId, updatedProduct);
    res.send("Product updated successfully");
  });

  // DELETE a product
  app.delete("/api/products/:id", (req, res) => {
    let productId = req.params.id;
    controller.delete(productId);
    res.send("Product deleted successfully");
  });
}