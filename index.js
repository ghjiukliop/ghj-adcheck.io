document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const tableBody = document.getElementById('account-table-body');
  const dropdownList = document.getElementById('dropdown-list');
  const totalAcc = document.querySelector('.on_off_acc h3:first-child');
  const onlineCount = document.querySelector('.on_off_acc h3:nth-child(2)');

  let totalAccounts = 20;
  let onlineAccounts = 0;

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = tableBody.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const userNameCell = row.cells[1];
      const userName = userNameCell.textContent.toLowerCase();

      if (userName.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  });

  const toggleBtn = document.getElementById('toggle-btn');
  const popup = document.querySelector('.popup');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });
  } else {
    console.error("Không tìm thấy phần tử với ID 'toggle-btn'");
  }

  document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = `https://example.com/connect?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    document.getElementById('website').value = url;

    // Cập nhật bảng
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const deleteCell = newRow.insertCell(7);

    cell1.innerText = tableBody.rows.length + 1;
    cell2.innerText = username;
    cell3.innerText = 'Offline';
    cell4.innerText = '1 (0/1000)';
    cell5.innerText = '0';
    cell6.innerText = '0';
    cell7.innerText = '0';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Xóa';
    deleteButton.addEventListener('click', () => {
      const rowIndex = newRow.rowIndex - 1;
      tableBody.deleteRow(rowIndex);
      updateDropdownList();
      totalAccounts--;
      totalAcc.innerText = `Total acc: ${totalAccounts}`;
      updateOnlineCount();
    });
    deleteCell.appendChild(deleteButton);

    const newDropdownItem = document.createElement('li');
    newDropdownItem.innerText = username;
    dropdownList.appendChild(newDropdownItem);

    totalAccounts++;
    totalAcc.innerText = `Total acc: ${totalAccounts}`;
    updateOnlineCount();

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('website').value = '';

    popup.style.display = 'none';
  });

  function updateOnlineCount() {
    onlineAccounts = tableBody.querySelectorAll('tr td:nth-child(3)').length;
    onlineCount.innerText = `Online: ${onlineAccounts}/${totalAccounts}`;
  }

  function updateDropdownList() {
    dropdownList.innerHTML = '';
    const offlineAcc = document.createElement('li');
    offlineAcc.innerText = 'offline acc';
    dropdownList.appendChild(offlineAcc);

    Array.from(tableBody.rows).forEach(row => {
      const username = row.cells[1].innerText;
      const newDropdownItem = document.createElement('li');
      newDropdownItem.innerText = username;
      dropdownList.appendChild(newDropdownItem);
    });
  }

  updateOnlineCount();
});
