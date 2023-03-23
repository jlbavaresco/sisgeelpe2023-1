import { useContext } from "react";
import Alerta from "../../Alerta";
import PredioContext from "./PredioContext";

function Form() {

    const { objeto, handleChange, acaoCadastrar,
        alerta } = useContext(PredioContext);

        (() => {
            'use strict'
          
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')
          
            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }
          
                form.classList.add('was-validated')
              }, false)
            })
          })()        

    return (
        <div className="modal fade" id="modalEdicao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edição de Prédio</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form type="sumbit" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label htmlFor="txtCodigo" className="form-label">Código</label>
                                <input type="number" className="form-control"
                                    id="txtCodigo" readOnly name="codigo" value={objeto.codigo}
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtNome" className="form-label">Nome</label>
                                <input type="text" className="form-control"
                                    id="txtNome" name="nome" value={objeto.nome}
                                    onChange={handleChange} required />
                                <div className="valid-feedback">
                                    Nome OK
                                </div>
                                <div className="invalid-feedback">
                                    Informe o nome
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtDescricao" className="form-label">Descrição</label>
                                <input type="text" className="form-control"
                                    id="txtDescricao" name="descricao" value={objeto.descricao}
                                    onChange={handleChange} required />
                                <div className="valid-feedback">
                                    Descrição OK
                                </div>
                                <div className="invalid-feedback">
                                    Informe a descrição
                                </div>                                    
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtSigla" className="form-label">Sigla</label>
                                <input type="text" className="form-control"
                                    id="txtSigla" name="sigla" value={objeto.sigla}
                                    onChange={handleChange}
                                    maxLength="4" required />
                                <div className="valid-feedback">
                                    Sigla OK
                                </div>
                                <div className="invalid-feedback">
                                    Informe a sigla
                                </div>                                     
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary" >Salvar
                                <i className="bi bi-save" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Form;