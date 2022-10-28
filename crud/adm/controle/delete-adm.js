$(document).ready(function() {

    $('#table-adm').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let IDADM = `IDADM=${$(this).attr('idadm')}`

        Swal.fire({
            title: 'e-Rifa',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: IDADM,
                    url: 'crud/adm/modelo/delete-adm.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'e-Rifa',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-adm').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})