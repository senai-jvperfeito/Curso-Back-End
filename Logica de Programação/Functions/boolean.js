function value(valor){
    const tipo = typeof valor
    switch(tipo){
        case "boolean":
            return !valor;
        case "number":
            return valor*-1;
        default:
            return "Digite um Booleano ou um Número, não um "+tipo
    }
}