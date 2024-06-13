document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const tableBody = document.getElementById('account-table-body');
  
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const rows = tableBody.rows;
  
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const userNameCell = row.cells[0];
        const userName = userNameCell.textContent.toLowerCase();
  
        if (userName.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    });
  
    /**pop up  */
    const toggleBtn = document.getElementById('toggle-btn');
    const popup = document.querySelector('.popup');
  
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        popup.style.display = popup.style.display === 'none'? 'block' : 'none';
      });
    } else {
      console.error("Element with ID 'toggle-btn' not found");
    }
  });