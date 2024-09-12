function calculator() {
    for (let bool = true; bool == true;) {
        let firstnumber = prompt("Введите первое число");
        let secondnumber = prompt("Введите второе число");
        let znak = prompt("Введите нужный оператор");

        if (znak == "+")
            alert("Результат = " + (Number(firstnumber) + Number(secondnumber)));
        else if (znak == "-")
            alert("Результат = " (Number(firstnumber) - Number(secondnumber)));
        else if (znak == "*")
            alert("Результат = " (Number(firstnumber) * Number(secondnumber)));
        else if (znak == "/")
            alert("Результат = " (Number(firstnumber) / Number(secondnumber)));
        else alert("Неверный оператор");
        let booll = prompt("заново?");
        if (booll == "yes") {
            bool == true;
        } else {
            bool = false;
        }
    }
}