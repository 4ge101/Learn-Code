function filterItems(category) {
    // Get all items
    const items = document.querySelectorAll('.item');
  
    items.forEach((item) => {
      // Show all items if 'all' is selected
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        // Show items that match the category, hide others
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }
  