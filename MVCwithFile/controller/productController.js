import Product from '../model/Product.js';
//Controller
export default class ProductController{
    //constructor Dependency Injection
    constructor(mgr){
        this.repoManager=mgr;
      /*  let flower1=new Product(12,"Gerbera","Wedding Flower",12,512500);
        let flower2=new Product(13,"Rose","Valentine Flower",26,5564);
        let flower3=new Product(14,"Lotus","Worship Flower",39,87000);
        let flower4=new Product(15,"Marigold","Festival Flower",4,87900);

         //Initial data repository insertion
        this.repoManager=mgr;
        this.repoManager.insert(flower1);
        this.repoManager.insert(flower2);
        this.repoManager.insert(flower3);
        this.repoManager.insert(flower4);*/
    }

    get = (req, res) => {
        let allProducts = this.repoManager.getAll();
        res.send(allProducts);
    }

    getById = async (req, res) => {
            let id = req.params.id; // Assuming id is passed in the URL parameters
            let product = await this.repoManager.getById(id);
            res.send(product);
    }

    post = async(req, res) => {
            let productData = req.body; // Assuming product data is sent in the request body
            let product = new Product(productData.id, productData.name, productData.description, productData.quantity, productData.price);
            await this.repoManager.insert(product);
            res.send("Product inserted successfully");
    }
    put =async (req, res) => {
            let id = req.params.id; // Assuming id is passed in the URL parameters
            let productData = req.body; // Assuming updated product data is sent in the request body
          await  this.repoManager.update(id, productData);
          res.send("updated successfully");
      }

    delete = async(req, res) => {

            let id = req.params.id; // Assuming id is passed in the URL parameters
          await  this.repoManager.remove(id);
            res.send("Product deleted successfully");

    }
}