const URL = 'https://docs.google.com/spreadsheets/d/1fjW4RBCmcjz39bh_H9ixOTBVuDamCV-JA3e_0OAlKM8'

fetch(`${URL}/gviz/tq?tqx=out:json`)
  .then(res => res.text())
  .then(text => {
    const json = JSON.parse(text.substring(47).slice(0, -2));  // remove google wrapper
    const rows = json.table.rows.map(r => r.c.map(c => c?.v));
    const tableBody = document.getElementById('table-body');
    rows.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  });

