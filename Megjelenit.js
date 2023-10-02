class FamilyMegjelenit {
  constructor(family, familia) {
      this.family = family;
      this.familia = familia;
      this.rendezesIrany = {}; // Rendezési irányokat nyomon követő objektum
      let text = this.htmlOsszeallit();
      this.familia.html(text);

      // Hozzáadunk egy eseménykezelőt a táblázat fejléc oszlopainak kattintásához
      $('#familyTable th').on('click', (event) => {
          const oszlopNev = $(event.target).data('oszlop');
          this.rendezTartalom(oszlopNev);
      });
  }

  htmlOsszeallit() {
      let text = "<table id='familyTable'>";
      if (this.family.length > 0) {
          text += "<thead><tr>";
          for (const tulajdonsag in this.family[0]) {
              if (this.family[0].hasOwnProperty(tulajdonsag)) {
                  text += `<th data-oszlop="${tulajdonsag}">${tulajdonsag}</th>`;
                  this.rendezesIrany[tulajdonsag] = 'asc'; // Kezdetben minden oszlopot növekvő irányba rendezünk
              }
          }
          text += "</tr></thead>";
      }
      text += "<tbody>";
      for (let i = 0; i < this.family.length; i++) {
          const element = this.family[i];
          text += "<tr>";
          for (const tulajdonsag in element) {
              if (element.hasOwnProperty(tulajdonsag)) {
                  text += `<td data-oszlop="${tulajdonsag}">${element[tulajdonsag]}</td>`;
              }
          }
          text += "</tr>";
      }
      text += "</tbody>";
      text += "</table>";
      return text;
  }

  rendezTartalom(oszlopNev) {
      const $table = $('#familyTable');
      const $tbody = $table.find('tbody');
      const $rows = $tbody.find('tr');

      $rows.sort((a, b) => {
          const cellA = $(a).find(`td[data-oszlop='${oszlopNev}']`).text();
          const cellB = $(b).find(`td[data-oszlop='${oszlopNev}']`).text();

          // A rendezési iránytől függően végrehajtjuk a rendezést
          if (this.rendezesIrany[oszlopNev] === 'asc') {
              return cellA.localeCompare(cellB);
          } else {
              return cellB.localeCompare(cellA);
          }
      });

      $tbody.html('');
      $rows.appendTo($tbody);

      // A rendezési irányt megfordítjuk
      this.rendezesIrany[oszlopNev] = (this.rendezesIrany[oszlopNev] === 'asc') ? 'desc' : 'asc';
  }
}

export default FamilyMegjelenit;

