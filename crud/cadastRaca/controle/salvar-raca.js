$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-tipo').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'crud/cadastRaca/modelo/salvar-raca.php',
            success: function(dados) {
                Swal.fire({
                    title: 'e-Rifa',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-tipo').modal('hide')
                $('#table-tipo').DataTable().ajax.reload()
            }
        })
    })

})