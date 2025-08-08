// let abc = " 1 2 3 "
// let abc = " 12 3 "
// let def = (abc.replace(" ",""))
// let def2 = parseInt(def);
// console.log(def2);

const { useCallback } = require("react");

// console.log(true == "true");

	
// let a =0;
// function x(){
//     // let a = 3;
//     // console.log(typeof(a))
//     // console.log(a);
//     let y = () => {
//         console.log(a)
//       }
//       return y;
// }

// let z=x();
// console.log(z)
// z();

// let wm = new WeakMap();
// // let user = {name:"dev",lname:"it"};
// wm.set(user,23)
// console.log(wm);
// console.log(wm.get(user));
// console.log(user);

// let ws = new WeakSet();
// let user = [1,2,3,4,8,5,2,5,4,1,2,1]
// console.log(user)
// user = new WeakSet();
// console.log(user)

// let arr = new Array(5);
// let arr = [10,20,30,40,50,60]
// console.log(arr.push());//this willreturn the last index of the arr + 1
// arr.unshift(70);//adding to the starting of the array
// arr.reverse();//reverse
// console.log(arr.shift());//gives the firest element
//splice(startidx,delcount?,items)
// console.log(arr.splice(2,1))//removing the arr at index 2 with starting of that index and 1 ele
// arr.splice(2,0,60);//adding ele using it passing the 0 at the delcount so it will add the value in that location if delcount is 1 then it will remove that ele and will replace with that index with new ele
// arr.indexOf(60);//will give the first accurence of that ele idx
// arr.lastIndexOf(60);//will give the last idx of that ele that is accored
// arr.includes(60);//returns boll t f if the ele exists
// console.log(arr);

let nums = [1,4,9,16];
function sqrt2(x){
return Math.sqrt(x);
}
let rest = nums.map(sqrt2()); //map requires a callback 
console.log(rest)