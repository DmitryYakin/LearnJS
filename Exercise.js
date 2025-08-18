function divNumFizzBuzz (num1)
{
 if (num1%3===0 && num1%5===0){
        return "Fizzbuzz"
        }
        else if (num1%3===0){
        return "Fizz"
        }
        else if (num1%5===0){
        return "buzz"
        }
        else
            return num1;
}



console.log(divNumFizzBuzz(1))