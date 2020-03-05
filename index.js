var pr=prompt("Enter the name","")
var pr1=prompt("mark1")
if(isNaN(pr1))
{
    alert("Enter valid data")
    var pr1=prompt("mark2")
}
    var pr2=prompt("mark2")
if(isNaN(pr2)&&(pr2>=1||pr2<=100))
{
    alert("Enter valid data");
    var pr2=prompt("mark2")
   
}
var pr3=prompt("mark3")
if(isNaN(pr3)&&(pr3>=1||pr3<=100))
{
    var pr3=prompt("mark3")
    alert("Enter valid data");
}
else{
function Person(name, mk1, mk2, mk3) {
    this.Name = name;
    this.mark1=mk1 ;
    this.mark2 = mk2;
    this.mark3 = mk3;    
  }
 
  var one = new Person(pr,pr1,pr2,pr3);
  function total(one)
 {
    this.total=parseInt(one.mark1)+parseInt(one.mark2)+parseInt(one.mark3)+" "+one.Name;
 }
  var two=new total(one) ;
  function avg(two)
 {
   //console.log(parseInt(one.mark1))
    this.avg=(parseInt(two.total)/3)+" "+one.Name;
 }
 var three=new avg(two) ;
 function final(three)
 {
   //console.log(parseInt(one.mark1))
    this.final=one.name+" "+two.total+" "+three.avg;
 }
 var four=new final(three)
console.log(one)
console.log(two)
console.log(three)
console.log(three)
}