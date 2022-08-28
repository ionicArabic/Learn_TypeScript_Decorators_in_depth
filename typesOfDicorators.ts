let sampleDecorator2 = (constructor: Function)=>{
    console.log("Teacher class is getting excuted");
}

let samplePropertyDecorator = (target:object, Propertykey:string)=>{
    console.log("Teacher name Property is getting excuted");
}

let sampleMethodDecorator = (target:object, Propertykey:string, description:PropertyDescriptor)=>{
    console.log("Teacher name Method is getting excuted");
}

let sampleParameterDecorator = (target:object, Propertykey:string, parameterIndex:number)=>{
    console.log("Teacher name Parameter is getting excuted");
}


@sampleDecorator2
class Teasher {
    @samplePropertyDecorator
    public teascherName: string | undefined;
    
    constractor(name: string) {
        console.log("Object created");
        this.teascherName = name;
}
@sampleMethodDecorator    
teach(@sampleParameterDecorator teachTime: number) {      
        console.log("Teacher is teaching"); 
};
}


//let teacher = new Teasher();