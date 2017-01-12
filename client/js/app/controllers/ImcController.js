class ImcController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputName = $('#inputName');
        this._inputHeight = $('#inputHeight');
        this._inputWeight = $('#inputWeight');
        this._form = $('.form');
        this._genders = this._form.elements['gender'];
        this._imcList = new ImcList();
        this._imcView = new ImcView($('#imcView'));
        this._imcTableView = new ImcTableView($('#imcTableView'));
        this._imcView.update(this._imcList);
        this._imcTableView.update(this._imcList);
        this._modal = document.querySelector('body');
        
    }

    add(event) {
       
        event.preventDefault();
        this._imcList.addListModal(this._createImc());
        this._imcList.saveListTable(this._createImc());
        this._imcView.update(this._imcList);
        this._clearForm();
        this._modal.classList.add('modal-show');
        
    }

    saveDataModal() {
        
        this._imcView.update(this._imcList);
        this._imcTableView.update(this._imcList);
        this._modal.classList.remove('modal-show');
    }

    _createImc() {

        return  new Imc(
            this._inputName.value, 
            this._inputHeight.value, 
            this._inputWeight.value,
            this._genders.value
            )
    }
    
    hideModal() {

        this._imcList.reset();
		this._imcView.update(this._imcList);
        this._imcTableView.update(this._imcList);
        this._modal.classList.remove('modal-show');
    }

    _clearForm() {
        
        this._inputName.value = '';
        this._inputHeight.value = '0.00';
        this._inputWeight.value = '00.00';
        this._inputName.focus();
    }


}
