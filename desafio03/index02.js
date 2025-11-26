// --- Abstração / Interface implícita ---
// Cada "estratégia" de desconto é uma classe separada

class StandardCustomer {
    applyDiscount(price) {
      return price;
    }
  }
  
  class VipCustomer {
    applyDiscount(price) {
      return price * 0.90; // 10% off
    }
  }
  
  class PremiumCustomer {
    applyDiscount(price) {
      return price * 0.80; // 20% off
    }
  }
  
  // Extensão: Nova classe adicionada sem tocar nas anteriores!
  class BlackFridayCustomer {
    applyDiscount(price) {
      return price * 0.50; // 50% off
    }
  }
  
  // --- O Consumidor (Fechado para modificação) ---
  class DiscountCalculator {
    // Recebe o objeto do cliente (injeção), não uma string
    calculate(price, customerStrategy) {
      return customerStrategy.applyDiscount(price);
    }
  }
  
  // --- Uso ---
  
  const calculator = new DiscountCalculator();
  
  console.log("Standard:", calculator.calculate(100, new StandardCustomer()));
  console.log("VIP:", calculator.calculate(100, new VipCustomer()));
  console.log("Black Friday:", calculator.calculate(100, new BlackFridayCustomer()));