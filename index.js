const arguments = process.argv.slice(2);
const mainFunction = arguments[0]
a=+arguments[1]
b=+arguments[2]

const print =(mainFunction,a,b)=>
{
    if(mainFunction=="addition")
    {
      return a+b
    }
    if(mainFunction=="substraction")
    {
      return a-b
    }
    if(mainFunction=="multiplication")
    {
      return a*b
    }
    if(mainFunction=="division")
    {
      return a/b
    }
    if(mainFunction=="sine")
    {
      return Math.sin(a)
    }
    if(mainFunction=="cosine")
    {
      return Math.cos(a)
    }
    if(mainFunction=="tangent")
    {
      return Math.tan(a)
    }
     if(mainFunction=="cotangent")
    {
      return Math.cot(a)
    }
    if(mainFunction=="random" )
    {
      
     const {
       randomInteger,
     } = require('node:crypto');
   if(a && b)
     {
      
      const n = randomInteger(a, b);
      return(`random: ${n}`)
     }
 else if(a)
     {
      
      const n = randomInteger(a);
      return(`random: ${n}`)
     }
  else 
  {
    {
      const n = randomInteger(10000);
       return(`random: ${n}`);
      }
  }
    }
 
}
console.log(print(mainFunction,a,b))
