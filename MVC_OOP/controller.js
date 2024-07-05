//Controller
export default class ProductController{
    //constructor Dependency Injection
    constructor(mgr){
        this.repoManager=mgr;
    }

    get(){
        return this.repoManager.getAll();
    }

    getById(id){
        return this.repoManager.getById(id);
    }

    post(product){
        this.repoManager.insert(product);
    }

    put(id, product){
        this.repoManager.update(id,product);
    }

    delete(id){
        this.repoManager.remove(id);
    }
}