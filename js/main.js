function hello(){
var son1 = prompt('Birinchi sonni kiriting: ')
var son2 = prompt('Ikkinchi sonni kiriting: ')
var biriktiru = Number(son1)+Number(son2)
alert('Sizni javobingiz: ' + biriktiru)
}

function ayru(){
    var raqam = prompt('1-sonni kiriting: ')
    var raqam2 = prompt('2-sonni kiriting: ')
    var biriktiruchi = Number(raqam) - Number(raqam2)
    alert('Sizni javobingiz: ' + biriktiruchi)
}

function bolish(){
    var raqamm = prompt('1-sonni kiriting: ')
    var raqamm2 = prompt('2-sonni kiriting: ')
    var biriktiruchim = Number(raqamm) / Number(raqamm2)
    alert('Sizni javobingiz: ' + biriktiruchim)
}

function kopaytiruvchi(){
    var odiyson1 = prompt('birinchi sonni kiriting: ')
    var odiyson2 = prompt('ikkinchi sonni kiriting: ')
    var koshuvchi = Number(odiyson1) * Number(odiyson2)
    alert('Sizni javobingiz: ' + koshuvchi)
}
function kvadrat(){
    var odiysonn1 = prompt('birinchi sonni kiriting: ')
    var odiysonn2 = prompt('ikkinchi sonni kiriting: ')
    var koshuvchin = Number(odiysonn1) ** Number(odiysonn2)
    alert('Sizni javobingiz: ' + koshuvchin)
}