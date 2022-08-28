let sampleDecorator = (constructor: Function)=>{
    console.log("Student class is getting excuted");
}

/* function sampleDecorator(constructor: Function) {
    console.log("Student class is getting excuted");
} */
@sampleDecorator
class Student {
    constractor() {
        console.log("Object created");
    }
}

let student = new Student();
