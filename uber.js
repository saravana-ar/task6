class UberPrice {
    constructor(baseRatePerKm, baseRatePerMinute, distance, duration, surgeMultiplier = 1) {
      this.baseRatePerKm = baseRatePerKm; 
      this.baseRatePerMinute = baseRatePerMinute; 
      this.distance = distance; 
      this.duration = duration; 
      this.surgeMultiplier = surgeMultiplier;  
    }
  
    calculatePrice() {
      var price = (
        this.baseRatePerKm * this.distance +
        this.baseRatePerMinute * this.duration
      ) * this.surgeMultiplier;
  
      return price;
    }
  }
  
  var baseRatePerKm = 5; 
  var baseRatePerMinute = 0.2; 
  var distance = 50; 
  var duration = 100;
  var surgeMultiplier = 1.5; 
  
  var calculator = new UberPrice(baseRatePerKm, baseRatePerMinute, distance, duration, surgeMultiplier);
  var price = calculator.calculatePrice();
  
  console.log(`Estimated Uber Price: RS ${price.toFixed(2)}`);
  