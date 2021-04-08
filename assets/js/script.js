
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

/*FORMULARIO
function transac() {
    if (document.querySelector("input").value==''){ 
        alert('Preencha o campo de mercadoria');       
        document.querySelector("input").focus();
                
    } else {
        let tipo = document.getElementById('selecao').value;
        let mercadoria = document.getElementById('mercadoria').value;
        let valor = document.getElementById('valor').value;
        console.log(transac);
        
        let transacValor = {
            nameSelecao: tipo,
            nameMercadoria: mercadoria,
            nameValor: valor        
        };console.log(transacValor);
    }
       
};*/
/*
    let button = document.querySelector('button');
    let mercadoria = document.getElementById('mercadoria');
    let valor = document.getElementById('valor');    
    let para = document.getElementById('msg');
    let contador = 0;
    button.onclick = function(e) {
        if (mercadoria.value || valor.value ){            
            para.textContent = '';
            contador += 1;
            console.log("Deu Ruim!");
        } else {
            para.textContent = 'Voçê prescisa inserir algo nos campos acima!';
            contador += 1;
            console.log("Deu Bom demais");
        };
        if (contador > 0) {

            e.preventDefault();

        }
        
    } */
/*
    let selecao = document.getElementById('selecao');
    let mercadoria = document.getElementById('mercadoria');
    let valor = document.getElementById('valor');    

    function validation() {        

        if(mercadoria.value == "" || mercadoria.value.length < 3) {
            document.getElementById("msgMercadoria").textContent = "Preencha este campo!";
            mercadoria.focus();
            return false
        } else {
            document.getElementById("msgMercadoria").textContent = "";
            
        }
        if(valor.value == "" || valor.length < 2) {
            document.getElementById("msgValor").textContent  = "Preencha este campo!";
            valor.focus();
            return false
        } else {
            document.getElementById("msgValor").textContent = "";
            
        }
        
    }*/


/* atualizada
    function validation () {
        let Vselecao = document.getElementById('selecao').value;
        let Vmercadoria = document.getElementById('mercadoria').value;
        let Vvalor = document.getElementById('valor').value; 

        let conteudo = {
            selecao : Vselecao,
            mercadoria: Vmercadoria,
            valor : Vvalor
        };
        
        if(Vmercadoria == "" || Vmercadoria.length < 3) {
            document.getElementById("msgMercadoria").textContent = "Preencha este campo!";
            
            return false
        } else {
            document.getElementById("msgMercadoria").textContent = "";
            
        }
        if(Vvalor == "" || Vvalor.length < 2) {
            document.getElementById("msgValor").textContent  = "Preencha este campo!";
            
            return false
        } else {
            document.getElementById("msgValor").textContent = "";
            
        }
        

        console.log(conteudo);
    } 
    

    function cadastrar(Vselecao, Vmercadoria, Vvalor ) {
        let novoCad = {selecao: Vselecao, mercadori: Vmercadoria, valor : Vvalor };

        if(typeof(Storage) !== "undefined") {

        }
        else alert("dsad");
    } */

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
                number: {
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
    

    
















 
   
    

    
    

    
    