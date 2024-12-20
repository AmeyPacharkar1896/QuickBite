document.querySelectorAll('.add-item').forEach(button => {
  button.addEventListener('click', function () {
    const menuItem = this.closest('.menu-item');
    const itemName = menuItem.querySelector('.item-name').textContent;
    const itemImage = menuItem.querySelector('.item-image img').src;
    const ingredients = menuItem.querySelector('.ingredients').textContent;
    const description = `Delicious pizza with fresh ingredients`; // You can modify this
    const price = menuItem.querySelector('.price').textContent;

    // Populate the bottom sheet with item details
    document.getElementById('bottom-sheet-item-image').src = itemImage;
    document.getElementById('bottom-sheet-item-name').textContent = itemName;
    document.getElementById('bottom-sheet-description').textContent = description;
    document.getElementById('bottom-sheet-ingredients').textContent = `Ingredients: ${ingredients}`;
    
    // Show the bottom sheet
    document.getElementById('bottom-sheet').style.display = 'block';

    // Handle increase in quantity
    let quantity = 1;
    document.getElementById('increase-quantity').addEventListener('click', function () {
      quantity++;
      document.getElementById('quantity').textContent = quantity;
    });

    // Handle submit action
    document.getElementById('submit-button').addEventListener('click', function () {
      const extraIngredientCost = parseInt(document.getElementById('extra-ingredients').value, 10);
      const totalPrice = parseInt(price, 10) + extraIngredientCost;
      console.log(`Item added: ${itemName}, Quantity: ${quantity}, Total Price: ${totalPrice}`);
      
      // Close the bottom sheet
      document.getElementById('bottom-sheet').style.display = 'none';
    });
  });
});
