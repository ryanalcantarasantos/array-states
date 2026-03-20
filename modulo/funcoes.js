const exportar = require('./arquivos')

const lEstados = exportar.listaDeEstados.estados

function getListaDeEstados(){
    let uf = []

    let volume

    let lista

    lEstados.forEach(function(eEstados){
        uf.push(eEstados.sigla)
        
    })

    volume = uf.length

    lista = {uf, volume}

    
}

function getDadosEstado(){
    let nome

    let uf = []

    dEstados.forEach(function(eDados){
        
    })
}