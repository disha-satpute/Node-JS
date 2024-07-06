//Data Persistance using File IO with
import fs from 'fs';
const fileName="product.json";


export default class FileManager{
    constructor(){
        this.product=[];
        this.load();
     }
    load(){
        fs.readFile(fileName, (err,data)=>{
            let products=JSON.parse(data.toString());
          this.product=products;
        })
    }

    getAll=()=>{
        return this.product;
    };

    getById=(id)=>{

            let foundProduct=this.product.find((product)=>(product.id ==id));
              return foundProduct;
    };

    remove=(id)=>{
            this.product=this.product.filter((product)=>(product.id !=id));
            let strProducts=JSON.stringify(this.product);
            fs.writeFile(fileName,strProducts,()=>{
            })
        }
    insert=(product)=>{
            this.product.push(product);
            let strProducts=JSON.stringify(this.product);
            fs.writeFile(fileName,strProducts,()=>{
                this.getAll();
            })
        }

    update=(id,productTobeUpdated)=>{
            this.product=this.product.filter((person)=>(person.id !=id));
            this.product.push(productTobeUpdated);
            let strProducts=JSON.stringify(this.product);
            fs.writeFile(fileName,strProducts,()=>{

            })

    }
}
