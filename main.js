$(document).ready(function(){

    $('form').on('submit',function(e){

        e.preventDefault();

    const TarefaNova = $('#input-place').val();

        $('#commit').prepend("<li>" + TarefaNova + "</li>")

        $('li').click(function() {
            // Adicionando a classe "completed" ao elemento <li>
            $(this).addClass('completed');
            $('input').val('');
        });


    });


})