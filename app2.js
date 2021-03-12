class celular{
    constructor(color,peso, rdp, rdc, ram){
        this.color= color;
        this.peso= peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram= ram;
        this.encendido=false;
                
    }
    prender(){
        if (this.encendido ==false){
            alert("celular prendido");
            this.encendido=true;
        }
        else{
            alert("el celular ya esta encendido");
        }

    }
    reiniciando(){
        if (this.encendido ==true){
            alert("celular apagando");
            this.encendido=false;
        }
        else{
            alert("el celular ya esta apagado");
        }
 
    }
    tomarfotos(){
        alert(`foto tomada en una resolucion de : ${this.rdc}`);
    }
    tomarvideo(){
        alert(`Video tomado en una resolucion de : ${this.rdc}`);
    }

    movileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso:<b>${this.peso}</b><br>
        Resolucion de pantalla:<b>${this.rdp}</b><br>
        Resolucion de camara:${this.rdc}</b><br>
        Ram:${this.ram}</b><br>
        `
    }
}


class celularAltaGama extends celular{
    constructor(color,peso,rdc,ram,rdce){
    super(color,peso,rcd,ram);
        this.resolucionDeCamaraExtra=rdce;
    }

    grabarVideoLento(){
        alert("estas grabando en camara lenta")      
    }

    reconocimientoFacial(){
        alert("Vamos a iniciar el reconocimiento facial")
    }

    infoAltaGama(){
        return this.movileInfo() + `Resolucion camara trasera: ${this.resolucionDeCamaraExtra}`
    }

}




celular1 = new celular("azul", 100,"", "Full HD",6 )
celular2 = new celular("negro",120,)
document.write(celular1.movileInfo());

