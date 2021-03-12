class animal{
    constructor(especie, edad, color){
        this.esp= especie;
        this.age = edad;
        this.col = color;
        this.informacion= `Soy ${this.esp}, tengo, 
        ${this.age}, y soy de color ${this.age}`;   
    
        }
        verInformacion (){
            document.write(this.informacion)
        }
       

}

class perro extends animal{
    constructor(especie, edad, color, raza){
        super(especie,edad, color, raza)
        this.raz=raza;
    }
    static ladrar(){
        document.write("!woof!")
    }

    get getRaza(){
        return this.raza;
    }

    set modificarRazas(newName){
        this.raz = newName;
    }
}


let perro1 = new perro("perro", "12", "rojo","golden");

//document.write(perro.informacion+"<br>");
//perro1.verInformacion();
perro1.modificarRazas="pedro"; 
document.write(perro1.getRaza);
