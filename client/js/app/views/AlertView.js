class AlertView extends View{

    constructor(element) {
        
        super(element);
    }

    template(model) {

        return model.alertText ? `<div class="alert alert-success" role="alert">${model.alertText} </div>` : `<div> </di>`; 
    }
}