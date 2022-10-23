$(document).ready(function(){
    $('#table-raca').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "crud/cadastRaca/modelo/list-raca.php",
            "type": "POST"
        },
        "columns": [
        {
            "data": 'IDRACA',
            "className": 'text-center'
        },
        {
            "data": 'NOME',
            "className": 'text-center'
        },
        {
            "data": 'IDRACA',
            "className": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id="${data}" class="btn btn-info btn-view">Visualizar</button>
                <button id="${data}" class="btn btn-warning btn-edit"> Editar</button>
                <button id="${data}" class="btn btn-danger btn-delete"> Excluir</button>
                `
            } 
        }
    
]
})
})