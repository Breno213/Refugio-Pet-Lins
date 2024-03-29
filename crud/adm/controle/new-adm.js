$(document).ready(function() {

    $('.btn-new').click(function(e){
        e.preventDefault()

        //Limpar todas as informações já existentes em nossa modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        //Incluir novos textos no cabeçalho da minha janela modal
        $('.modal-title').append('Adicionar novo registro')

        //Incluir nosso formulário dentro do corpo da nossa janela modal
        $('.modal-body').load('crud/adm/visao/form-adm.html')

        //Iremos incluir uma função no botão salvar para demonstrar um novo registro
        $('.btn-save').attr('data-operation', 'insert')

        //Abrir a janela modal
        $('#modal-adm').modal('show')
    })

})