function ValidaCpf(strCPF)
{
    //Fonte: http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
    var Soma;
    var Resto;
    Soma = 0;

    strCPF = RemoveMask(strCPF);

    //Verificando se todos os números são iguais = CPF inválido, apesar de passar na validação númerica 
    var lastChar;
    for (var i = 1; i < strCPF.Lenght; i++)
    {
        if (i > 1)
        {

        }
        else
        {
            lastChar = strCPF[i];
        }
    }

    if (strCPF == "00000000000")
        return false;
        

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

    return cpf;
}