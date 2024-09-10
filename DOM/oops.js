//class: factory to create number of real world entities
class Employee{
    constructor( fname, lname, ag, loc){
        this.firstname=fname;
        this.lastname=lname;
        this.age=ag;
        this.loc=loc;
    }
}

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    getx(){
         return this.x;
    }
    gety(){
        return this.y;
    }
    show() {
        console.log(`X :${this.x}, Y: ${this.y}`);
    }
}


class Shape {
    constructor(color,thickness) {
      this.color = color;
      this.thickness=thickness;
    }
 
    draw() {
      console.log(` Color :${this.color}  Thickness '${this.thickness}`);
    }
}
//relationship between Line and Shape   is a -------------inheritance (hiearchy) ( child parent relationship)
//relationship between Line and Point   has a ------------association (containment)
 
class Line extends Shape{
    constructor(color,thickness, startPoint, endPoint) {
        super(color, thickness);
        this.startPoint = startPoint;
        this.endPoint=endPoint;
    }
    getStartPoint() {
        return this.startPoint;
    }
 
    getEndPoint() {
          return this.endPoint;
    }
 
    draw(){
        super.draw();
        this.startPoint.show();
        this.endPoint.show();
    }
}
 
 
 
//object : real world entity
//JSON object
var employee1={
    firstname:"ravi",
    lastname:"tambade",
    age:49,
    location:"pune"
};
 
var employee2={
    firstname:"tejas",
    lastname:"pawale",
    age:25,
    location:"mumbai"
};


let  emp2=new Employee("sanika", "bhor",20, "pune");
let  emp3=new Employee("disha", "satpute",20, "rajguru nagar");

console.log(employee1);
console.log(employee2);
console.log(emp2);
console.log(emp3);

var stPoint=new Point(45,23);
var endPoint=new Point(77,100);
const l1 = new Line('red', 2,stPoint, endPoint);   //constructor called with passing parameters

var stPoint2=new Point(145,23);
var endPoint2=new Point(76,99);
const l2 = new Line('blue', 4,stPoint2, endPoint2);  //constructor called with passing parameters

l1.draw();
l2.draw();