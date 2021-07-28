import React from "react";

export default function Saudacao(props) {
    
    const [tipo, setTipo] = React.useState(props.tipo);
    const [nome, setNome] = React.useState(props.nome);

    const updateNome = () => {
        var newNome = document.getElementById("nome").value;
        setNome(newNome);
    }

    const updateTipo = () => {
        var newTipo = document.getElementById("tipo").value;
        setTipo(newTipo);
    }

    return (
        <div>
            <h1>{tipo} {nome}!</h1>
            <hr></hr>
            <input id="tipo" placeholder="Tipo..." value={tipo} onChange={updateTipo}></input>
            <input id= "nome" placeholder="Nome..." value={nome} onChange={updateNome}></input>
        </div>
    )

}