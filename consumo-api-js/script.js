console.log('JQuery load!');


$(document).ready(function(){
    console.log('JQuery load!');

    $('#retornoCEP').hide(); 

    $('#cep').on('blur', function(value) {
        var inputCep = $('#cep');      
        console.log(inputCep.val());

        buscaCEP(inputCep.val()).then(
        (response) => {
            console.log(response);
            if(response && response.cep !== '89069150') {
                $('#retornoCEP').show();
                $('#rua').val(response.logradouro);
                $('#bairro').val(response.bairro);
                $('#cidade').val(response.localidade);
                $('#uf').val(response.uf);
            }
        }
    );

    });

});

async function buscaCEP(cep) {
    var urlAPI = `https://viacep.com.br/ws/${cep}/json/`;
   
    return fetch(urlAPI).then(resp => resp.json());

}






