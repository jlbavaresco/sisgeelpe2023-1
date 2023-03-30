import { useContext } from "react";
import Alerta from "../../Alerta";
import SalaContext from "./SalaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {

    const { objeto, handleChange, acaoCadastrar,
        alerta, listaPredios } = useContext(SalaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Edição de Prédio"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Codigo" tipo="number"
                name="codigo" value={objeto.codigo} onchange={handleChange}
                requirido={false} msgvalido=""
                msginvalido="" readonly={true}
                maxCaracteres={5} />
            <CampoEntrada id="txtNumero" label="Número" tipo="number"
                name="numero" value={objeto.numero} onchange={handleChange}
                requirido={true} msgvalido="Número OK"
                msginvalido="Informe o numero" readonly={false}
                maxCaracteres={5} />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao} onchange={handleChange}
                requirido={true} msgvalido="Descrição OK"
                msginvalido="Informe a descrição" readonly={false}
                maxCaracteres={40} />
            <CampoEntrada id="txtCapacidade" label="Capacidade" tipo="number"
                name="capacidade" value={objeto.capacidade} onchange={handleChange}
                requirido={true} msgvalido="Capacidade OK"
                msginvalido="Informe o capacidade" readonly={false}
                maxCaracteres={5} />                
            <CampoSelect id="selecPredio" label="Prédio" 
                name="predio" value={objeto.predio} onchange={handleChange}
                requirido={true} msgvalido="Prédio OK"
                msginvalido="Selecione o prédio">
                {
                    listaPredios.map((pred) => (
                        <option key={pred.codigo} value={pred.codigo}>
                            {pred.nome}
                        </option>
                    ))
                }          
            </CampoSelect>
        </Dialogo>
    )

}

export default Form;