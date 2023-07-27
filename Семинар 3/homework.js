greeting();
greeting("Чупокабра");
greeting(prompt("Дорогой друг, введите Ваше имя пожалуйста"));

function greeting(name){
    if(name == null) name = "Аноним";
    console.log(`Добро пожаловать в консоль, дорогой друг ${name}!!!`);
}