
        var qnt = document.getElementsByClassName('quantity');
        var valor = document.getElementsByClassName('price');
        var totalGeral = document.getElementById('total');
        totalGeral.textContent = 0;

        for (var i = 0; i < qnt.length; i++) {
            qnt[i].addEventListener('input', function() {
                var total = 0;
                for (var j = 0; j < qnt.length; j++) {
                    var quantidade = parseInt(qnt[j].value);
                    var texto = valor[j].textContent;
                    var preço = parseInt(texto.replace('R$', ''));
                    
                        total += quantidade * preço;
                   
                }
                totalGeral.textContent = 'R$ ' + total;
            });
        };

        var titulo = document.querySelector('.rock');
        titulo.style.color = 'purple';
        titulo.style.fontSize = '30px';
        titulo.style.textAlign = 'center';
        titulo.style.fontFamily = 'jaro';
    

