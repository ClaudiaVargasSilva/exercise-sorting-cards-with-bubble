// BTN RELOAD //

let reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
    window.location.reload();
});






// BTN DRAW //
let arr = [];
let draw = document.querySelector(".draw");
draw.addEventListener("click", function () {
    //mostrar las cartas//
    let input = document.querySelector("#input");
    let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let tipos = ["spade", "suit", "heart", "dinamond"];

    for (let i = 1; i <= input.value; i++) {
        //console.log(input.value);
        let main = document.querySelector("MAIN");
        let span = document.createElement("SPAN");
        let div = document.createElement("DIV");

        div.classList.add("card");
        span.classList.add(tipos[Math.floor(Math.random() * tipos.length)]);
        span.innerHTML = cartas[Math.floor(Math.random() * cartas.length)];
        arr.push({ number: span.innerHTML, type: span.classList.value });
        span.classList.add("number");
        div.appendChild(span);
        main.appendChild(div);
    };
    console.log(arr);
});

// BTN SORT //
let sort = document.querySelector(".sort");
sort.addEventListener("click", function () {

    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if ((arr[index]["number"]) > (arr[index + 1]["number"])) {
                let aux = arr[index]["number"];
                arr[index]["number"] = arr[index + 1]["number"];
                arr[index + 1]["number"] = aux;

                let tipoCardA = arr[index]["type"];
                arr[index]["type"] = arr[index + 1]["type"];
                arr[index + 1]["type"] = tipoCardA
                // crear contenedor //
                let contenedor = document.createElement("DIV");
                /////////IMPRIMIR CARTAS ////
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
                        //let cartaMain = document.querySelector("main");
                        //cartaMain.appendChild(divCarta);
                        contenedor.appendChild(divCarta);
                    }
                /////////IMPRIMIR CARTAS ////
                document.body.appendChild(contenedor);
            }
            index++;
        }
        wall--; //decrease the wall for optimization
    }
    console.log(arr)
});










