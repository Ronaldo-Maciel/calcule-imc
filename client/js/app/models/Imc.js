class Imc {

    constructor(name, height, weight, genders) {

        this._name = name;
        this._height = height;
        this._weight = weight;
        this._genders = genders;
        Object.freeze(this);
    }

    get totalImc() {

        return Math.abs(this._weight / (this._height * this._height)).toFixed(2);
    }

    get case() {

        let caseImc = this.totalImc;
        let gender = this._genders;
        let man = gender == 'masculino';    
        let woman = gender == 'feminino';    
        if(woman && caseImc < 19.1 || man && caseImc < 20.7){
            return 'Abaixo do peso';
        }
        else if(woman && caseImc > 19.1 && caseImc < 25.8 || man && caseImc > 20.7 && caseImc < 26.4 ) {
            return 'Peso normal';
        }
        else if(woman && caseImc > 25.8 && caseImc < 27.3 || man && caseImc > 26.4 && caseImc < 27.8) {
            return 'pouco acima do peso';
        }    
        else if(woman && caseImc > 27.3 && caseImc < 32.3 || man && caseImc > 27.8 && caseImc < 31.1){
            return 'Acima do peso ideal';
        }
        else {
            return 'Obeso';
        }
    }

    get name() {

        return this._name;
    }

    get height() {

        return this._height;
    }

    get weight() {

        return this._weight;
    }

    get genders() {

        return this._genders;
    }

    get id() {
        
        return 0;
    }
}