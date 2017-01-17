class ImcModalView extends View{

    constructor(element) {
        
        super(element);
    }

    template(model) {

        return `
            <div class="bs-component">
                <div class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            ${model.listModal.map(l => `
                           
                            <div class="modal-header">
                                <button onclick="imcController.hideModal()" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                           
                                <h4 class="modal-title">${l.name}, seu IMC é <span class="text-imc">${l.totalImc}</span></h4>
                            </div>
                            <div class="modal-body">
                                <p>${l.case}</p>
                            </div>

                             `).join('')}
                            <div class="modal-footer">
                                <button onclick="imcController.hideModal()" type="button" class="btn btn-default" data-dismiss="modal">Descartar</button>
                                <button onclick="imcController.saveDataModal()" type="button" id="save" class="btn btn-primary">Salvar Dados</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}