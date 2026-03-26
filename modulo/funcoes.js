const exportar = require('./arquivos')

const listaDeEstados = exportar.listaDeEstados.estados


const getListaDeEstados = function(){
    
    let uf = []

    let lista

    let quantidade

    listaDeEstados.forEach(function(eEstados){
        uf.push(eEstados.sigla)
    })

    lista = {uf, quantidade}

    quantidade = uf.length

    return lista
}





const getDadosEstado = function(dEstados){

    let sigla = String(dEstados).toUpperCase()
    
    let uf 

    for(let estados of listaDeEstados){
        if(sigla == estados.sigla){
            return uf = {
                uf : estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
                regiao: estados.regiao
            }
        }
    }

    return false
}





const getCapitalEstado = function(cEstados){

    let sigla = String(cEstados).toUpperCase()

    let resultado = false

    listaDeEstados.forEach(function(item){
        if(sigla == item.sigla){
            return resultado = {
                uf : item.sigla, descricao: item.nome, capital: item.capital, 
            }
        }
    })

    return resultado

}



const getEstadosRegiao = function(regiao){

    let rEscolhida = String(regiao).toUpperCase()

    let uf = {

        'regiao': rEscolhida.toUpperCase(),
        'estados': []
    }

    for (let estado of listaDeEstados) {
        if (rEscolhida == String(estado.regiao).toUpperCase()) {
            uf.estados.push({
                "uf": estado.sigla, 
                "descricao": estado.nome
            })
        }
    }

    if (uf.estados.length === 0){
        return false
    }else{
        return uf
    }
}




const getCapitalPais = function () {

    let cPais = {
        "capitais": []
    }

    listaDeEstados.forEach(function (cCapitais) {
        if (cCapitais.capital_pais) {
            cPais.capitais.push({
                "capital_atual": pegarCapitais.capital_pais.capital,
                "uf": pegarCapitais.sigla,
                "descricao": pegarCapitais.nome,
                "capital": pegarCapitais.capital,
                "regiao": pegarCapitais.regiao,
                "capital_pais_ano_inicio": pegarCapitais.capital_pais.ano_inicio,
                "capital_pais_ano_termino": pegarCapitais.capital_pais.ano_fim
            })
        }
    })

    return cPais
}

const getCidades = function (cCity) {

    let sInf = String(cCity).toUpperCase()

    let iCity

    let cidades = []

    for (let sigla of listaDeEstados) {
        if (sInf == String(sigla.sigla).toUpperCase()) {
            sigla.cidades.forEach(function (todasCidades) {
                cidades.push(todasCidades.nome)

                iCity = {
                    "uf": sigla.sigla,
                    "descricao": sigla.nome,
                    "quantidade_cidades": sigla.cidades.length,
                    "cidades": cidades
                }
            })
        }
    }

    if (cidades.length === 0)

        return false

    return iCity
}