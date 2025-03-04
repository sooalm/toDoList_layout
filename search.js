export function search() { 

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const items = document.querySelectorAll('.task');
    searchInput.addEventListener('input', function() {
      const searchText = this.value.toLowerCase().trim();
      items.forEach(item => {
        const itemText = item.querySelector(".task__text").textContent.toLowerCase();
        const itemText2 = item.querySelector(".task__category").textContent.toLowerCase();
        if (itemText.includes(searchText) || itemText2.includes(searchText) ) {
          item.classList.remove('task--hide');
        } else {
          item.classList.add('task--hide');
        }
      });
    });
  });
}