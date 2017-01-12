class ImcList {

    constructor() {
        
        this._list = [];
        this._listTable = [];
    }

    addListModal(imc) {
        
        this._list = [];
        this._list.push(imc);
    }

    saveListTable(saveImc) {

        this._listTable.push(saveImc);
    }

    get list() {
        // can not change original list in controller
        // defensive programming
        return [].concat(this._list);
	}

    get listTable() {

        return [].concat(this._listTable);
    }

    reset() {

        this._listTable.pop();
        this._list = [];
    }
}