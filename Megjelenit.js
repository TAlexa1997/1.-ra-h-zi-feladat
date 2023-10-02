class FamilyMegjelenit {
    constructor(family, familia) {
        this.family = family;
        this.familia = familia;
        let text = this.htmlOsszeallit(); // Nem kell a 'family' paramétert itt átadni
        this.familia.html(text);
    }

    htmlOsszeallit() {
      let text = "<table>";
      if (this.family.length > 0) {
           text += `<th scope="row"></th>`;
          for (const tulajdonsag in this.family[0]) {
              if (this.family[0].hasOwnProperty(tulajdonsag)) {
                  text += `<th>${tulajdonsag}</th>`;
              }
          }
          text += "</tr>";
      }
      for (let i = 0; i < this.family.length; i++) {
        const element = this.family[i];
        text += "<tr>";
        text += `<th scope="row">${[i+1]}</th>`;
        for (const tulajdonsag in element) {
            if (element.hasOwnProperty(tulajdonsag)) {
              
                text += `<td>${element[tulajdonsag]}</td>`;
            }
        }
        text += "</tr>";
    }
    
    text += "</table>";
    return text;
}
}

export default FamilyMegjelenit;
