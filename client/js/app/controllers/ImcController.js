class ImcController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputName = $('#inputName');
        this._inputHeight = $('#inputHeight');
        this._inputWeight = $('#inputWeight');
        this._form = $('.form');
        this._genders = this._form.elements['gender'];
        this._imcList = new ImcList(model =>
            this._imcModalView.update(model));
      
        this._imcModalView = new ImcModalView($('#imcModalView'));
        this._imcTableView = new ImcTableView($('#imcTableView'));
        this._imcModalView.update(this._imcList);
        this._imcTableView.update(this._imcList);
        this._modal = $('body');

        this._alert = new Alert();
        this._alertView = new AlertView($('#alertView'));
        this._alertView.update(this._alert);
    }

    add(event) {
       
        event.preventDefault();
        this._imcList.addListModal(this._createImc());
        this._imcList.saveListTable(this._createImc());
        this._imcModalView.update(this._imcList);
        this._clearForm();
        this._modal.classList.add('modal-show');
    }

    hideModal() {

        this._imcList.reset();
		this._imcModalView.update(this._imcList);
        this._modal.classList.remove('modal-show');
    }

    saveDataModal() {

        this._imcTableView.update(this._imcList);
        this._modal.classList.remove('modal-show');
        this._alert.alertText = "Dados do IMC salvos com sucesso!";
        this._alertView.update(this._alert);
        let btnsDelete = document.querySelectorAll('#imcTableView .close');
        for(let i = 0; i < btnsDelete.length; i++){
            btnsDelete[i].setAttribute('data-list', [i]);
        }
    }

    _createImc() {

        return  new Imc(
            this._inputName.value, 
            this._inputHeight.value, 
            this._inputWeight.value,
            this._genders.value
            )
    }

    listDelete(getValue) {
      
        this._imcList.del(getValue);
        this._imcTableView.update(this._imcList);
        let btnsDelete = document.querySelectorAll('#imcTableView .close');
        for(let i = 0; i < btnsDelete.length; i++){
            btnsDelete[i].setAttribute('data-list', [i]);
        }
    }

    _clearForm() {
        
        this._inputName.value = '';
        this._inputHeight.value = '0.00';
        this._inputWeight.value = '00.00';
        this._inputName.focus();
    }
}
