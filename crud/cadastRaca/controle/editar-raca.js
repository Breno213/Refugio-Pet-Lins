$(document).ready(function(){

    $('#table-tipo').on('click', 'button.btn-edit', function(e){
        e.preventDefault()

        //Limpar todas as informações já existentes em nossa modal
       $('.modal-title').empty()
       $('.modal-body').empty()

       //Incluir nonos textos no cabeçalho da minha janela modal
       $('.modal-title').append('Editar registro')

       let ID = `idraca=${$(this).attr('id')}`

       $('.btn-salvar').removeAttr('data-operation')

       $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        data: ID,
        url: 'crud/cadastRaca/modelo/visualizar-raca.php',
        success: function(dado){
            if(dado.tipo == 'success'){
                $('.modal-body').load('crud/cadastRaca/visao/form-raca.html', function () {
                    $('#nome').val(dado.dados.NOME)
                    $('#idraca').val(dado.dados.ID)
                })
                $('.btn-salvar').show()
                $('#modal-raca').modal('show')
         }else{
            Swal.fire({
                title: 'Ong ',
                text: dados.mensagem,
                icon: dados.tipo,
                confirmButtonText: 'OK'
            })
        }
        }
       })
    })

})