var nacionalidades = ["mexicano", "argentino", "argentino", "venezolano", "peruano", "mexicano", "argentino", "peruano", "venezolano" ]; 

document.write(nacionalidades);

var contarN = [];

for (let i = 0; i <= nacionalidades.length - 1; i++) {
    var con = nacionalidades[i];
    var numero = 0;
    for (let e = 0; e <= nacionalidades.length - 1; e++) {
        if (con == nacionalidades[e]) {
            numero++;
        }
        
    }
    contarN.push(nacionalidades[i]  + ' ' + numero + '<br>')
    
}

var contarN2 = contarN.filter(function (a , b) {
    return contarN.indexOf(a) == b;
});

document.write('<br>' + contarN2)


