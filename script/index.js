function displayProducts(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;
      const title = document.createElement('h2');
      title.textContent = product.title;
      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;
      const description = document.createElement('p');
      description.textContent = product.description;
      const category = document.createElement('p');
      category.textContent = `Category: ${product.category}`;
      const rating = document.createElement('p');
      rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(description);
      card.appendChild(category);
      card.appendChild(rating);

      container.appendChild(card);
    });
  }

  fetch('https://fakestoreapi.com/products/')
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => console.error('Error fetching products:', error));