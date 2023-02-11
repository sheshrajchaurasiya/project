/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  {id: 1, name: "vinay", age:"25", profession:"developer" },
  {id: 2, name: "ajay", age:"15", profession:"bowler" },
  {id: 3, name: "devraj", age:"16", profession:"batsman" },
]

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(val=>{
    if(val.profession=="developer")
    console.log(val.name)
  }
    )
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(val=>{
   if(val.profession=="developer")
   console.log(val.name)
  }
   )
}

function addData() {
  //Write your code here
  let obj= {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(obj)
  console.log(arr)

}

function removeAdmin() {
  //Write your code here
 let arr3 = arr.filter(val=>{
   return val.profession!="admin"
  }
    )
    console.log(arr3)
}

function concatenateArray() {
  //Write your code here
   let allrounder= arr.concat(arr2)
   console.log(allrounder)
}