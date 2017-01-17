class ImcList {

    constructor() {
        
        this._listModal = [];
        this._listTable = [];
    }

    addListModal(imc) {
        
        this._listModal = [];
        this._listModal.push(imc);
    }

    saveListTable(saveImc) {

        this._listTable.push(saveImc);
    }

    get listModal() {

        // no can change original list in controller
        return [].concat(this._listModal);
	}

    get listTable() {

        return [].concat(this._listTable);
    }

    del(getValue) {
       
       this._listTable.splice(getValue, 1);
    }

    reset() {

        this._listModal = [];
        this._listTable.pop();
    }
}