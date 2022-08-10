/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/






var mensajeEncriptado;

function encriptar(){

    var testeo=!!document.getElementById("input-texto").value;

    console.log(testeo);

    if(testeo==true){

        var mensaje=document.getElementById("input-texto").value;

    let array=mensaje.split("");
    
    for(let i=0; i<array.length;i++){
        if(array[i]=="a"){
            array[i]="ai";
        }

        if(array[i]=="e"){
            array[i]="enter";
        }

        if(array[i]=="i"){
            array[i]="imes";
        }

        if(array[i]=="o"){
            array[i]="ober";
        }
        
        if(array[i]=="u"){
            array[i]="ufat";
        }


    }
    mensajeEncriptado=array.join("");
    document.getElementById("output-texto").value=mensajeEncriptado;

    aparecer();

    }
    
    else{
        desaparecer();
    }
    


    

}



function desencriptar(){
    var testeo=!!document.getElementById("input-texto").value;

    if(testeo==true){
        var mensaje=document.getElementById("input-texto").value;
    let array=mensaje.split("");

    for(let i=0; i<array.length;i++){
        if(array[i]=="a" && array[i+1]=="i"){
            array.splice((i+1),1);
        }

        if(array[i]=="e" && array[i+1]=="n" && array[i+2]=="t" && array[i+3]=="e" && array[i+4]=="r"){
            array.splice((i+1),4);
        }
        if(array[i]=="i" && array[i+1]=="m" && array[i+2]=="e" && array[i+3]=="s"){
            array.splice((i+1),3);
        }
        if(array[i]=="o" && array[i+1]=="b" && array[i+2]=="e" && array[i+3]=="r"){
            array.splice((i+1),3);
        }
        if(array[i]=="u" && array[i+1]=="f" && array[i+2]=="a" && array[i+3]=="t"){
            array.splice((i+1),3);
        }
    }

    let mensajeDesencriptado=array.join("");
    document.getElementById("output-texto").value=mensajeDesencriptado;

    aparecer();

    }

    else{
        desaparecer();
    }
    
    

}





function copiar(){

    

    var content = document.getElementById('output-texto');
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
    
}

function copiaralportapapeles(){

    var texto = document.getElementById("output-texto").value;
    navigator.clipboard.writeText(texto);


}


function aparecer(){
    var muneco=document.getElementById("muñeco");
    var mensajeencontrado=document.getElementById("mensajeencontrado");
    muneco.style.opacity=0;
    mensajeencontrado.style.opacity=0;

    var output=document.getElementById("output-texto");
    var copiar=document.getElementById("copiar");
    copiar.style.opacity=1;
    output.style.opacity=1;

}

function desaparecer(){
    var muneco=document.getElementById("muñeco");
    var mensajeencontrado=document.getElementById("mensajeencontrado");


    muneco.style.opacity=1;
    mensajeencontrado.style.opacity=1;

    var output=document.getElementById("output-texto");
    var copiar=document.getElementById("copiar");
    copiar.style.opacity=0;
    output.style.opacity=0;
}
