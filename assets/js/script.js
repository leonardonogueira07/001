
/*MENU - RESPONSIBLE*/
let btn = document.getElementById('btn-div');
let btn1 = document.getElementById('btn-man');
let container = document.querySelector('.sidenav');
btn.addEventListener('click', function() {
    if(container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});
//Ocultação do Menu Responsivel 
btn1.addEventListener('click', function() {
    if(container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}); 
    //FORMULARIO VALIDAÇÃO = MESSAGE PERSONALIZADA
    const campos = document.querySelectorAll("[required]")

    //console.log(campos);
    function validarCampo(campo) {
        //Logica para verficar se tem erros
        function verifyErros() {
            let foundError = false;

            for(let error in campo.validity){
                //console.log(campo.validity[error]);
                if(campo.validity[error] && !campo.validity.valid) {
                    foundError = error
                }
            }
            return foundError;
        }
        //Message Customizada
        function customMessage(typeError) {
            const messages = {
                select: {
                    valueMissing: "Selecione o tipo de transacao"
                },
                text: {
                    valueMissing: "Por favor, preencha a mercadoria"
                },
                text: {
                    valueMissing: "Faltou informar o valor"
                }                               
            }
            return messages[campo.type][typeError]
        }
        //Setando a Message
        function setmessage(message) {
            const emError = campo.parentNode.querySelector("em.error")
            if(message) {
                emError.classList.add("active")
                emError.innerHTML = message
            } else {
                emError.classList.remove("active")
                emError.innerHTML = ""
            }
        }
        return function() {
            const error = verifyErros()
            
            if(error) {
                const message = customMessage(error)
                campo.style.borderColor = "red"
                setmessage(message)
            } else {
                campo.style.borderColor = "blue"
                setmessage()
            }
        }
    }
    //Validação de Campo
    function validacao(event) {
        const campo = event.target        
        const validation = validarCampo(campo)
                 
        validation()       
    }
    for(campo of campos){
        campo.addEventListener("invalid", event => {
            //Eliminar o Bubble
            event.preventDefault()
            validacao(event)
        })
        campo.addEventListener("blur", validacao)
    }
    //SOMENTE NUMEROS
    function somenteNum(evt) {
        var charCode = (evt.which) ? evt.which : Event.charCode
        if(charCode > 31 && (charCode < 48 || charCode > 57))

        return false;
        return true;

    }//MASCARA DE NUMEROS
    function mascaraValor(str) {
        var v = str.value.replace(/\D/g,'')
        
        v = (v/100).toFixed(2) + ''
        v = v.replace(".", ",")
        v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
        v = v.replace(/(\d)(\d{3}),/g, "$1.$2,")

        str.value = v
    }




//EXTRATO DE TRANSAÇÕES
    //EXTRATO DE TRANSAÇÕES
    function dados() {
        let Vselecao = document.getElementById('selecao').value;
        let Vmercadoria = document.getElementById('mercadoria').value;
        let Vvalor = document.getElementById('valor').value; 

        let conteudo = {
            selecao : Vselecao,
            mercadoria: Vmercadoria,
            valor : Vvalor
        };
    }
    

    
















 
   
    

    
    

    
    