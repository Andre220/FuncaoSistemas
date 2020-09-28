function ValidaCpf(strCPF)
{
    //Fontes: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
    var Soma;
    var Resto;
    Soma = 0;

    strCPF = RemoveMask(strCPF);

    //Verificando se todos os números são iguais = CPF inválido, apesar de passar na validação númerica 
    var caracteresIguais = /^(.)\1+$/.test(strCPF); // usando Regex para testar se todos os caracteres sao iguais

    if (caracteresIguais == true)
    {
        return;
    }

    //Verificando o primeiro digito
    for (i = 1; i <= 9; i++)
    {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))
        Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)))
        return false;

    Soma = 0;

    //Verificando o segundo digito
    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))
        Resto = 0;

    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false;

    return true;
}

function RemoveMask(cpf)
{
    var strValue = cpf;

    strValue = strValue.replace(".", "");
    strValue = strValue.replace(".", "");
    strValue = strValue.replace("-", "");
    strValue = strValue.replace("/", "");
    strValue = strValue.replace("/", "");

    return strValue;
}