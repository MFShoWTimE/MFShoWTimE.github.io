
function preco(){
var modalidade1=window.document.getElementById("modalidade1").value
var modalidade2=window.document.getElementById("modalidade2").value
var preco=0
var z=window.document.getElementById('res')
if(modalidade1=='MMA' && modalidade2=="Judo"){
preco=40
z.innerText=`O preço do Pack MMA e Judo é de ${preco}€`
}
else if(modalidade1=='Judo' && modalidade2=="MMA"){
    preco=40
    z.innerText=`O preço do Pack MMA e Judo é de ${preco}€`
    }

else if(modalidade1=='MMA' && modalidade2=="KickBoxing"){
preco=45
z.innerText=` O preço do Pack MMA e KickBoxing é de ${preco}€`
}

else if(modalidade1=='KickBoxing' && modalidade2=="MMA"){
    preco=45
    z.innerText=` O preço do Pack MMA e KickBoxing é de ${preco}€`
    }

else if(modalidade1=='Judo' && modalidade2=="KickBoxing"){
    preco=35
    z.innerText=` O preço do Pack Judo e kickboxing é de ${preco}€`
    }
    else if(modalidade1=='KickBoxing' && modalidade2=="Judo"){
        preco=35
        z.innerText=` O preço do Pack Judo e kickboxing é de ${preco}€`
        }
else{
    z.innerText=`Escreveu mal o nome de uma das Modalidades ,nomes Aceites:MMA,Judo,KickBoxing.`
}

}