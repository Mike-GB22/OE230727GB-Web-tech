let product = prompt("Введите название продукта (есть мандарины, бананы, груши)");
 
switch (product.toLowerCase) {
    case "мандарины":
    case "мандарин":
    case "мандаринов":
        alert('Мандарины стоят 100 руб/кг.');
        break;
    case "бананы": 
    case "банан": 
    case "бананов": 
    case "груши":
    case "груша":
    case "грушов":        
        alert('Бананы и груши стоят 70 руб/кг.');
        break;
    default: alert('Нет такого продукта.');
  
}