let contenedor = document.createElement("DIV");
                ////////
                for (let j = 0; j < arr.length; j++) {
                        //crear div//
                        let divCarta = document.createElement("DIV");
                        divCarta.classList.add("card");
                        let numberCarta = arr[j]["number"];
                        let tipoCarta = arr[j]["type"];
                        //crear span//
                        let spanCarta = document.createElement("SPAN");
                        spanCarta.classList.add("number");
                        spanCarta.innerHTML = numberCarta;
                        spanCarta.classList.add(tipoCarta);
                        //unir//
                        divCarta.appendChild(spanCarta);
                        //main//
                        let cartaMain = document.querySelector("main");
                        cartaMain.appendChild(divCarta);
                    
                        /*if (j == arr.length - 1) {
                            let br = document.createElement("BR");
                            cartaMain.appendChild(br);
                        }*/
                    }
                /////////////////
                document.body.appendChild(contenedor);