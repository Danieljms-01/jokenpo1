var VitoriaJogador = 0
var VitoriaOponente = 0

function jogar(jogada) {
    const numero = Math.floor(Math.random() * 3) + 1;
    var RetornoJogador = document.getElementById("jogador");
    var RetornoOponente = document.getElementById("oponente");
    var RetornoX = document.getElementById("x");
    var j = ''
    
    


    if (numero == 1) {
        j = 'tesoura';
    }if (numero == 2) {
        j = 'pedra';
    }if (numero == 3){
        j = 'papel';
    }
    
        
        if (j == 'tesoura') {
            if (jogada == j) {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://freepngtransparent.com/wp-content/uploads/2023/03/X-Png-150.png" alt="foto"><p>Empate</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Oponente</p>';

            }else if (jogada == 'pedra') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "xv" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Oponente</p>';

                VitoriaJogador++
                

            }else if (jogada == 'papel') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Oponente</p>';

                VitoriaOponente++
                
            }     
        }else if (j == 'pedra') {
            if (jogada == j) {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://freepngtransparent.com/wp-content/uploads/2023/03/X-Png-150.png" alt="foto"><p>Empate</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Oponente</p>';

            }else if (jogada == 'papel') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "xv" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Oponente</p>';

                VitoriaJogador++

            }else if (jogada == 'tesoura') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Oponente</p>';

                VitoriaOponente++
            }     
            }else if (j == 'papel') {
                if (jogada == j) {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://freepngtransparent.com/wp-content/uploads/2023/03/X-Png-150.png" alt="foto"><p>Empate</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Oponente</p>';

            }else if (jogada == 'tesoura') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAEaDghUYOTY_hxTBJ68MVBhDdQDzZ1t5B5zjrrJqEw&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "xv" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Oponente</p>';

            
                VitoriaJogador++
             }else if (jogada == 'pedra') {
                RetornoJogador.innerHTML = '<img class = "foi j" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXPbhpyMBty2qKZ_JHH1FVX3ms3wlvmf0H4la6cnKQg&s" alt="foto"><p>Jogador</p>';

                RetornoX.innerHTML = '<img class = "x" src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png" alt="foto"><p>ganhador</p>';

                RetornoOponente.innerHTML = '<img class = "foi bot" src="https://images.freeimages.com/images/premium/previews/5040/50401512-paper-sheet-cartoon-character.jpg" alt="foto"><p>Oponente</p>';

                VitoriaOponente++
            } 
        }
       
        if (VitoriaJogador >= 3) {   
            RetornoX.innerHTML = '<img class = "x" src="https://i.pinimg.com/originals/7a/50/6c/7a506c3b52e619fdc469ad8e931497c0.png" alt="foto"><h1 CLASS="v">Você Venceu</h1><form action="" method="post"><button class="volta" window.location.reload(true);>Re-iniciar</button></form>'; 
        }else if (VitoriaOponente >= 3) {
            RetornoX.innerHTML = '<img class = "x" src="https://images.emojiterra.com/twitter/v14.0/512px/1f62d.png" alt="foto"><h1 CLASS="v">Você Perdeu</h1><form action="" method="post"><button class="volta" window.location.reload(true);>Re-iniciar</button></form>';
        }

        console.log(VitoriaJogador);
        console.log(VitoriaOponente);

}
