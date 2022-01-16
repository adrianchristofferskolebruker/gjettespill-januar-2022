let losningsord = ["b", "e", "r", "g", "e", "n"];
let gjettedeBokstaver = [];
let riktigeBokstaver = ["_", "_", "_", "_", "_", "_"];

let antallForsok = 5; //antall forsøk igjen

let message1El = document.getElementById("message1"); //henter elementet der meldinger skrives ut
let message2El = document.getElementById("message2");
message1El.innerText = "Løsningsordet har " + losningsord.length + " bokstaver."


let knappEl = document.querySelector("button");
knappEl.addEventListener("click", registrerSvar);

//legger til muighet til å bruke "Enter"-tasten i stedet for
let inputEl = document.getElementById("input");
inputEl.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        registrerSvar();
    }
});

function registrerSvar(){

    let inputElVal = inputEl.value;

    let feilsvar = false;
    for (let i = 0; i <= losningsord.length && !feilsvar; i++) {
        if (losningsord.indexOf(inputElVal) === -1) {
            antallForsok--; //bruker opp ett forsøk
            let pEl = document.getElementsByClassName("backgroundgreen");
            pEl[0].className = "backgroundred"; //endrer det første grønne elementet til rødt
            feilsvar = true;
        } else if (losningsord[i] === inputElVal) {
            riktigeBokstaver.splice(i, 1, inputElVal);
        }
    }

    //legger til bokstaven i array med gjettede bokstaver
    gjettedeBokstaver.push(inputElVal);

    //skriver ut melding dersom man ikke har flere forsøk eller man har gjettet riktig ord
    if (antallForsok <= 0){
        message1El.innerText = "Du har ikke flere forsøk igjen."
    } else if (riktigeBokstaver.toString() === losningsord.toString())  {
        message1El.innerText = "Du gjettet riktig!"
    } else {
        //sorterer de gjettede bokstavene i alfabetisk rekkefølge
        gjettedeBokstaver.sort();
        //skriver ut melding med status så langt
        message1El.innerText = "Løsningsordet har " + losningsord.length +
             " bokstaver. Totalt har du gjettet " + gjettedeBokstaver.length + " bokstaver: " + gjettedeBokstaver
    }


    message2El.innerText = "Du har gjettet disse riktige bokstavene: " + skrivUt(riktigeBokstaver)

    document.getElementById("input").value = "";
    document.getElementById("input").focus();
}

function skrivUt(riktigeBokstaver) {
    let res = "";
    for (let i=0; i<riktigeBokstaver.length;i++) {
        res += riktigeBokstaver[i] + " ";
    }
    return res;
}