let person ={
    name: "Dev",
    Age: "25",
    social : {
        faceBook: {
            account1 : "abc@xyz.com",
            account2 : "xyz@abc.com"
        },
        twitter:{
            free:{
                account : "abc@xyz.com"
            },
            paid:{
                account : "abc@xyz.com"
            }
        }
    }
}

// let person2 = person;

// console.log("Initially")
// console.log(person)
// console.log(person2)

// person2.name = "DevIt";

// console.log("After")
// console.log(person)
// console.log(person2)

// now The actually coping this 

// let person3 = {...person} //shallow copy
// but it will fial at nested object 

// console.log("Initially")
// console.log("person : ",person)
// console.log("person3 : ",person3)

// person3.name = "DevIt";
// person3.social.twitter.paid = "nothing@asd.com";

// console.log("After")
// console.log("person : ",person)
// console.log("person3 : ",person3)
// console.log("person : ",person.social.twitter.paid)
// console.log("person3 : ",person3.social.twitter.paid)



//deep copy
// let person4 = JSON.parse(JSON.stringify(person));

// person4.social.twitter.paid = "nothing@asd.com";

// console.log("person : ",person.social.twitter.paid)
// console.log("person4 : ",person4.social.twitter.paid)

// console.log(person4)

// function makeDeepCopy(obj){
//     if(typeof obj !== 'object' || obj === null){
//         return obj;
//     }

//     var copiedval = Array.isArray(obj) ? [] : {};
//     var keys = Object.keys(obj);

//     for(var i = 0; i<keys.length; i++){
//         copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
//     }
//     return copiedval;
// }

// let person5 = makeDeepCopy(person);

// person5.social.twitter.paid ="acvfd"
// console.log(person5); 
// console.log(JSON.stringify(person5));
// console.log(typeof(JSON.stringify(person5,null,2)));
// console.dir(person5, { depth: null });

let person6 = structuredClone(person);
console.log(JSON.stringify(person6,null,2));

