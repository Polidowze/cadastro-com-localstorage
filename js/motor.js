    let chave = "Nome 1";
    let chave2 = "Email 1";
    let i = 1;
// function ArmazenaDados()
//     {
//     localStorage.setItem(chave, document.getElementById("nm").value);
//     localStorage.setItem(chave2, document.getElementById("email").value);
//     LimparCampo();
//     }

function ConsultarDados()
    {
        let socorro =  "";
        for (let i2 = 0; i2 < localStorage.length/2; i2++) {
            socorro += "Código " + i2 + ": " + localStorage.getItem("Nome "+i2) + " - " + localStorage.getItem("Email "+ i2) + "<br>";
        }
        document.getElementById("resultado").innerHTML = socorro;
    }

function LimparCampo()
{
    document.getElementById("nm").value = "";
    document.getElementById("email").value = "";
}

function AtualizarDados()
{

    localStorage.setItem("Nome " +  document.getElementById("cd").value, document.getElementById("nm").value);
    localStorage.setItem("Email " + document.getElementById("cd").value, document.getElementById("email").value);
    document.getElementById("cd").value = "";

    LimparCampo();
}

function LimparSatanas(){
    localStorage.clear();
}

function Pesquisa(){
    document.getElementById("nm").value = localStorage.getItem("Nome " +  document.getElementById("cd").value);
    document.getElementById("email").value = localStorage.getItem("Email " +  document.getElementById("cd").value);
    document.getElementById("resultado").innerHTML = "Código " + document.getElementById("cd").value + ": " + localStorage.getItem("Nome " + document.getElementById("cd").value) + " - " + localStorage.getItem("Email " + document.getElementById("cd").value);
}

function InsertData()
    {
    i = localStorage.length/2;
    localStorage.setItem("Nome " + i , document.getElementById("nm").value);
    localStorage.setItem("Email " + i , document.getElementById("email").value);
    LimparCampo();
    }

function DeleteData()
{
    localStorage.removeItem("Nome " + document.getElementById("cd").value);
    localStorage.removeItem("Email " + document.getElementById("cd").value);
    document.getElementById("cd").value = "";

}