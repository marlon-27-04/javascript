function estudiante(){
    let presente =  document.getElementById("respuesta").value;

    if (presente === "presente"){
        alert("el estudiante está presente");
    }
    else{
        alert("el estudiante no asistió");
    }
}