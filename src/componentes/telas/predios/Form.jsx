import { useContext } from "react";
import Alerta from "../../Alerta";
import PredioContext from "./PredioContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar,
        alerta } = useContext(PredioContext);

    return (
        <Dialogo id="modalEdicao" titulo="Edição de Prédio"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Codigo" tipo="number"
                name="codigo" value={objeto.codigo} onchange={handleChange}
                requirido={false} msgvalido=""
                msginvalido="" readonly={true}
                maxCaracteres={5} />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome} onchange={handleChange}
                requirido={true} msgvalido="Nome OK"
                msginvalido="Informe o nome" readonly={false}
                maxCaracteres={40} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao} onchange={handleChange}
                requirido={true} msgvalido="Descrição OK"
                msginvalido="Informe a descrição" readonly={false}
                maxCaracteres={40} />
            <CampoEntrada id="txtSigla" label="Sigla" tipo="text"
                name="sigla" value={objeto.sigla} onchange={handleChange}
                requirido={true} msgvalido="Sigla OK"
                msginvalido="Informe a Sigla" readonly={false}
                maxCaracteres={4} />
        </Dialogo>
    )

}

export default Form;