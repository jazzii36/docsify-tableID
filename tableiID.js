<script>
// 遍历所有table 插入自增ID
const tables = document.getElementsByTagName('table');
for (let i = 0; i < tables.length; i++) {
  const table = tables[i];
  const rows = table.rows;
  const headerRow = rows[0];
  const headerCell = headerRow.insertCell(0);
  headerCell.innerHTML = 'ID';
  for (let j = 1; j < rows.length; j++) {
    const row = rows[j];
    const cell = row.insertCell(0);
    cell.innerHTML = j;
  }
}
</script>
