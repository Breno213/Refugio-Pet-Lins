$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-adm').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'crud/adm/modelo/salvar-adm.php',
            success: function(dados) {
                Swal.fire({
                    title: 'e-Rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-adm').modal('hide')
                $('#table-adm').DataTable().ajax.reload()
            }
        })
    })

})