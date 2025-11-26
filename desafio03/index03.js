class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addProduct(product) {
      this.items.push(product);
    }
  
    // A responsabilidade é atribuída aqui, pois ShoppingCart
    // é quem TEM a informação (a lista de items).
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  }
  
  // --- Cliente ---
  const cart = new ShoppingCart();
  cart.addProduct(new Product("Tênis", 200));
  cart.addProduct(new Product("Meias", 20));
  
  // O cliente apenas pergunta ao especialista.
  console.log(`Total: R$${cart.getTotal()}`);