$(document).ready(function(){
    


    $('button').click(function(){
        
    })

    $('form').on('submit',function(e){
        e.preventDefault(e);
    const TarefaNova = $('#input-place').val();
    const NovoItem = $('<li style="text-decoration: line-through"></li>');
        $(`<ul>${TarefaNova}</ul>`).appendTo(NovoItem);
        $(NovoItem).appendTo('ul')
        $('input').val('');
    
    })

})