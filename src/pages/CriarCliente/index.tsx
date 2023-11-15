import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { IDataRequest } from "../../provider/api";
import "./index.css"

const CriarCliente = () => {

    const [nome, setNome] = useState<string>();
    const [sobreNome, setSobreNome] = useState<string>();
    const [dataNascimento, setDataNascimento] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [telefone, setTelefone] = useState<string>();

    const enviarCliente = () => {
        const request: IDataRequest = {
            url: "/clientes/",
            data: {
                nome: nome,
                sobreNome: sobreNome,
                dataNascimento: dataNascimento,
                email: email, 
                telefone: telefone
            }
        } 
    }

    return (
        <div className="body">
            <div className="box">
                <div className="box-input">
                    <TextField variant="outlined" 
                    label="Nome" 
                    fullWidth 
                    onChange={(t) => {
                        setNome(t.target.value);
                    }}/>
                </div>
                <div className="box-input">
                    <TextField variant="outlined" 
                    label="Sobre Nome" 
                    fullWidth
                    onChange={(t) => {
                        setSobreNome(t.target.value);
                    }}/>
                </div>
                <div className="box-input">
                    <TextField variant="outlined" 
                    label="Data Nascimento" 
                    fullWidth
                    onChange={(t) => {
                        setDataNascimento(t.target.value);
                    }}/>
                </div>
                <div className="box-input">
                    <TextField variant="outlined" 
                    label="E-mail" 
                    fullWidth
                    onChange={(t) => {
                        setEmail(t.target.value);
                    }}/>
                </div>
                <div className="box-input">
                    <TextField variant="outlined" 
                    label="Telefone" 
                    fullWidth
                    onChange={(t) => {
                        setTelefone(t.target.value);
                    }}/>
                </div>
                <div className="box-input">
                    <Button fullWidth 
                    variant="contained"
                    onClick={() => {
                        enviarCliente();
                    }}>Enviar Cliente</Button>
                </div>
            </div>
        </div>
    )
}

export default CriarCliente;