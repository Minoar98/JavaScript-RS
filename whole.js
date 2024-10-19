//Convert Fahrenheit to Celsius

function toCelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9
}
console.log(toCelcius(32));


const cricketer = {
    name: "Sachin Tendulkar",
    age : 42,
    isPresent: false,
    odiCentury: 49,
    testCentury: 51,
    totalCentury :function(){
        `${this.odiCentury}`
    }
}