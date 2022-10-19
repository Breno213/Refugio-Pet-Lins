$(document).ready(function() {

    $('.btn-salvar').click(function (e){
        e.preventDefault()

        let dados = $('#form-raca').serialize()

        dados += `&operacao=${$('.btn-salvar').attr('data-operation')}`
    
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'crud/cadastRaca/modelo/salvar-raca.php',
            success: function(dados) {
                Swal.fire({
                    title: 'TCC Refugio',
                    text: dados.mensagem,
                    icon: dados.vendedor,
                    confirmButtonText: 'OK'
                })

                $('#modal-raca').modal('hide')
                $('#table-raca').DataTable().ajax.reload()
            }
        })

    })

})