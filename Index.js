// Function to be called when the 'Add To Cart' button is clicked
function addToCart() {
    const productName = document.querySelector('.single-pro-details h2').textContent;
    const productPrice = document.querySelector('.single-pro-details h2 + h2').textContent;
    const productQuantity = document.querySelector('.single-pro-details input[type="number"]').value;
    
    // Log the product details (for debugging)
    console.log(`Product Name: ${productName}, Price: ${productPrice}, Quantity: ${productQuantity}`);
  
    // Create a reference to the 'cart' node in Firebase Realtime Database
    const cartRef = ref(database, 'cart');
  
    // Push the product data to Firebase
    push(cartRef, {
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      timestamp: Date.now()
    })
    .then(() => {
      alert('Product added to cart successfully!');
    })
    .catch((error) => {
      console.error('Error adding product to cart: ', error);
    });
  }
  