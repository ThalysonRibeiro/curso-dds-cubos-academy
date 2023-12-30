//Truthiness verdadeiras
if (true)
    if ({})
        if (42)
            if ("foo")
                if (new Date())
                    if (-42)
                        if (3.14)
                            if (-3.14)
                                if (Infinity)
                                    if (-Infinity)
                                        //Truthiness falso
                                        if (false)
                                            if (null)
                                                if (undefined)
                                                    if (0)
                                                        if (NaN)
                                                            if ('')
                                                                if (document.all) [1]



// neste exemplo de number somente o 0 que da falso o resto dos numeros saõ verdadeiro.
{
    const x = 18;
    if (x) {
        console.log("Deu verdadeiro");
    } else {
        console.log("Deu falsio");
    }
}
//neste exemplo de string somente o strging vazio que da salso, todo o resto da verdadeiro.
{
    const x = "junior";
    if (x) {
        console.log("Deu verdadeiro");
    } else {
        console.log("Deu falsio");
    }
}
//outras formas
{
    const nome = "";
    if (!nome) {
        console.log("Por favor, preencha seu nome.");
    }
}

{
    const nome = "";
    if (nome === "") {
        console.log("Por favor, preencha seu nome.");
    }
}

