class ImcTableView extends View{

    constructor(element) {
        super(element);
    }

    template(model) {

        return `
        <div class="well bs-component">
          <table class="table table-striped table-hover ">
            <thead>
            <tr>
              <th>Nome</th>
              <th>Sexo</th>
              <th>IMC</th>
              <th>Resultado</th>
            </tr>
            </thead>
            <tbody>
            ${model.listTable.map(l => `

            <tr>
              <td>${l.name}</td>
              <td> ${l.genders} </td>
              <td>${l.totalImc} </td>
              <td>${l.case} </td>
            </tr>

            `).join('')}
            
            </tbody>
          </table>
        </div>
        `
    }
}