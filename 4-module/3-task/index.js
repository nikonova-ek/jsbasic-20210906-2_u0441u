function highlight(table) {
  let tbody = table.querySelector('tbody');
  for (let row of tbody.rows) {
    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let statusCell = row.cells[3];
    if (statusCell.dataset.available === undefined) {
      row.hidden = true;
    }

    row.classList.add(statusCell.dataset.available === 'true' ? 'available' : 'unavailable');

    row.classList.add(genderCell.innerHTML === 'm' ? 'male' : 'female');

    if (parseInt(ageCell.innerHTML) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
