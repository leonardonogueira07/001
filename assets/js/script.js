
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

btn1.addEventListener('click', function() {
    if(container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});

/*FORMULARIO*/
function transac() {
    let tipo = document.getElementById('selecao').value;
    let mercadoria = document.getElementById('mercadoria').value;
    let valor = document.getElementById('valor').value;
    console.log(transac);

    let transacValor = {
        nameSelecao: tipo,
        nameMercadoria: mercadoria,
        nameValor: valor        
    };

    console.log(transacValor);
};