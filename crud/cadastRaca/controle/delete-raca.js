$(document).ready(function(){

    $('#table-raca').on('click', 'button.btn-delete', function(e){
        e.preventDefault()

        let ID = `idraca=${$(this).attr('id')}`

        Swal.fire({
            title: 'Ong',
            text: 'Deseja realmente excluir este registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO' 
        }).then((result) => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'crud/cadastRaca/modelo/delete-raca.php',
                    success: function(dados){
                        Swal.fire({
                            title: 'Ong',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })
                        $('#table-raca').DataTable().ajax.reload()
                    }
                })
     }
})
})
})