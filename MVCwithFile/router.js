import ProductController from './controller/productController.js';
import FileManager from './IO_mgmt/file.js';

export default function(app){

   let mgr=new FileManager();
    let controller=new ProductController(mgr);

    //Map controller callback functions for rest API routes
    app.get("/api/products", controller.get);
    app.get("/api/products/:id", controller.getById);
    app.post("/api/insert",controller.post);
    app.put("/api/update/:id",controller.put);
    app.delete("/api/delete/:id",controller.delete);
}