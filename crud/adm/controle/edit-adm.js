$(document).ready(function() {

    $('#table-adm').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização de registro')

        let IDADM = `IDADM=${$(this).attr('idadm')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDADM,
            url: 'crud/adm/modelo/view-adm.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('crud/adm/visao/form-adm.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#EMAIL').val(dado.dados.EMAIL)
                        $('#LOGIN').val(dado.dados.LOGIN)
                        $('#SENHA').val(dado.dados.SENHA)
                        $('#IDADM').val(dado.dados.IDADM)


                        // Consultar todos os tipos cadastrados em banco de dados

                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-adm').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'e-Rifa', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // vendedor de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})