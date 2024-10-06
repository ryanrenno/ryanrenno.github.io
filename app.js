document.getElementById('generate-list').addEventListener('click', function() {
    const selectedMeals = document.querySelectorAll('.meal-option:checked');
    const groceryList = new Set();

    // Add ingredients from each selected meal to the grocery list
    selectedMeals.forEach(meal => {
        const ingredients = meal.getAttribute('data-ingredients').split(', ');
        ingredients.forEach(ingredient => groceryList.add(ingredient));
    });

    // Display the grocery list
    const groceryItems = document.getElementById('grocery-items');
    groceryItems.innerHTML = ''; // Clear previous list
    groceryList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        groceryItems.appendChild(li);
    });
});
