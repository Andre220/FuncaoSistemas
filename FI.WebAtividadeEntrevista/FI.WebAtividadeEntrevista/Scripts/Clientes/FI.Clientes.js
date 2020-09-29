var beneficiarios = [];

$(document).ready(function ()
{

    var countBeneficiarios = 0;  
    $('#formCadastroBeneficiario').submit(function (e)
    {
        e.preventDefault();

        countBeneficiarios += 1;

        $('table tbody').append(
            '<tr> <td id="' + countBeneficiarios + '">' +
            $("#formCadastroBeneficiario").find("#beneficiarioCpf").val() +
            '</td> <td>' +
            $("#formCadastroBeneficiario").find("#beneficiarioNome").val()
            + '</td> </tr>');


        beneficiarios.push({
            //"id": countBeneficiarios,
            "CPF": $(this).find("#beneficiarioCpf").val(),
            "Nome": $(this).find("#beneficiarioNome").val(),
            //"idCliente": null,
        });
    })

    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        if (!ValidaCpf(RemoveMask($(this).find("#Cpf").val()))) {
            alert("CPF inválido");
            return;
        }
        else
        {
            $("#formCadastroBeneficiario tbody tr").each(function (i)
            {
                var line = $(this);
                var cells = line.find('td');
                $(cells).each(function (j) {
                    var info = $(this);
                    console.log(info.text());
                })
            })

            $.ajax({
                url: urlPost,
                method: "POST",
                data: {
                    "NOME": $(this).find("#Nome").val(),
                    "CPF": RemoveMask($(this).find("#Cpf").val()),
                    "CEP": $(this).find("#CEP").val(),
                    "Email": $(this).find("#Email").val(),
                    "Sobrenome": $(this).find("#Sobrenome").val(),
                    "Nacionalidade": $(this).find("#Nacionalidade").val(),
                    "Estado": $(this).find("#Estado").val(),
                    "Cidade": $(this).find("#Cidade").val(),
                    "Logradouro": $(this).find("#Logradouro").val(),
                    "Telefone": $(this).find("#Telefone").val(),
                    "Beneficiarios": beneficiarios 
                    //"Beneficiarios": JSON.stringify({ 'beneficiarios': beneficiarios}) 
                },
                error:
                    function (r) {
                        if (r.status == 400)
                            ModalDialog("Ocorreu um erro", r.responseJSON);
                        else if (r.status == 500)
                            ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                    },
                success:
                    function (r) {
                        ModalDialog("Sucesso!", r)
                        $("#formCadastro")[0].reset();
                    }
            });
        }        
    })
    
})

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}