//create nested object
let person = {
    name: "Joan",
    age: "27",
    job_experience: {
        2017: "project management",
        2018: {
            first_half: "HR",
            second_half: {
                quarter3: "office manager",
                quarter4: "marketing",

            },
        },
        2019: "sales",
        2020: "business operations",

    },
    address: {
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
    }
}

//declare variables to store some of the properties of the objects, such as the name and age of a person.
let candidate = person.name;
let age = person.age;

//take these variables as arguments in the functions
//to change the properties of the person by changing the variable values.

function intro(candidate, age) {
    console.log(`${candidate} is ${age} years old.`);
}

intro("Qing", 28);

//find something new from W3school:
//We can define functions inside an object.
//E.G. 

const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }


};
//access to object funtion
console.log(person2.fullName());
person2.fullName();