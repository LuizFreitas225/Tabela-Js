var InfoPaciente = document.querySelectorAll(".paciente");
console.log(InfoPaciente);
var c;

for(c=0; c< InfoPaciente.length; c++){
    var tdpeso = InfoPaciente[c].querySelector(".info-peso");
    console.log(tdpeso);
    var peso = tdpeso.textContent;
    console.log(peso);

    var tdaltura = InfoPaciente[c].querySelector(".info-altura");
    console.log(tdaltura)
    var altura= tdaltura.textContent;
    console.log(altura);
    var imc= peso / (altura * altura);
     
    InfoPaciente[c].querySelector(".info-imc").textContent= imc;
    console.log(imc);
    
}