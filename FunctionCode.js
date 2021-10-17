const sum = function(num1 , num2) {
    return num1 + num2;
}; // done



const average = function (a, b) {
    
    return ((a+b)/2);
}; // done



const findFactorial = function(num){
    let a = 1;
    if (num == 0 || num == 1){
        return a;
    } else {
        for(i = num; i>=1; i--){
            a = a * i
        }
        return a;
    }
}; // done



const round = function(number) {
        
        return Math.round(number);
};  // done



const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent);
}; // done

const randomNumber = function () {
       return Math.random();
}; // done


const oneOrZero = function () {
    return Math.floor(Math.random() * 2);
}; // done


      
const randomRange = function(number) {
    if(number > 0 ) {
        }
        return Math.floor(Math.random() * number);
}; // done


const includeOf = function(string, character) {
    return (string.includes(character));
}; // done






const addToArray = function (array, string) {
    let add = array.push(string);
        return array;
}; // done



const convertToString = function (array) {
    
    return array.join(" ");
}; // done


const updateValue = function (array, value, index) {
    
    if (array.length <= index) { // Larger
        return "there is no element to updated in this index";
    } 
    else { array[index] = value; // smaller
    }
    return array;

};

const onlyString = function (array) {
    array = array.filter(item => typeof item === "string");
    return array;
}; //done


const users = [
    ["Jane", "123456" ],
    ["admin", "abc123" ],
  ];
  
const login = function (username, password) {
    if(username == users[0][0] && password == users[0][1])
    {
       console.log("Login Successful");
    }
    else if (username == users[1][0] && password == users[1][1])
    {
        console.log("Login Successful");
    }
    else {
        console.log("Login Faild");
    }
}; //done

const maximumNumber = function (numbers) {
    return Math.max(...numbers);
}; // done

const reversString = function (string) {
    return string.split("").reverse().join("");

}; //done



// extra 


const allUsers = [
    { username: "Jane", password: "123456" },
    { username: "admin", password: "abc123" },
  ];
  
  const createUser = function (username, password) {
    if(username == users[0][0] && password == users[0][1])
    {
       console.log("That username is not available");
    } 
  };