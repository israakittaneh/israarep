hi //EX1 hiba is driver && israa is navigator 
function arrayFor(array)
{
  for(var i = 0 ;i < array.length ; i++)
  {
    console.log(array[i]);
  }
}
arrayFor([1,2,3]);
/*
1
2
3
*/

//Ex2  hiba is driver && israa is navigator 
function arrayWhile(array)
{
  var i = 0;
  while(i < array.lenght)
  {
    console.log(array[i]);
    i++;
  }
}
arrayWhile([1,2,3]);
/*
1
2
3
*/

//Ex3 hiba is driver && israa is navigator 
function sum(array)
{
  var sum = 0;
  for(var i =0 ; i< array.length ; i++)
  {
    sum = sum + array[i];
  }
  return sum;
}
sum([1,2,3]);//--->6
sum([1,2,4]);//-->7

//Ex4 hiba is driver && israa is navigator 
function sumEveryOther(array)
{
  var sum = 0;
  for(var i = 0 ; i < array.length ; i+=2)
  {
    sum = sum + array[i];
  }return sum;
}

sumEveryOther([1,2,3,4,5]);//-->9
sumEveryOther([1,2,4]);//-->5

//Ex5 hiba is driver && israa is navigator 
function sumStartAt(array , index)
{
  var sum = 0 ;
  for(var i = index ; i<array.length ; i++)
  {
    sum = sum +array[i];
  }return sum;

}
sumStartAt([1,2,3,4,5] ,1);//-->14
sumStartAt([1,2,4] ,2);//-->14

//Ex6 hiba is driver && israa is navigator 
function sumUntil(array , index)
{
  var sum = 0 ;
  for(var i = 0 ; i <= index ; i++)
  {
    sum = sum +array[i];
  }return sum;

}
sumUntil([1,2,3,4,5] , 2) ;//-->6
sumUntil([1,2,4] , 1) ;//-->3

//EX7 hiba is driver && israa is navigator 
function subtractReverse(array) {
  var sub = array[array.length-1];
  for (var i = array.length-2 ; i>=0 ; i--) {
    var sub = sub - array[i]
  }return sub;
}
subtractReverse([1,2,3]);//-->0
subtractReverse([0,1,2]);//-->1

//EX8 hiba is driver && israa is navigator 

function product(array) {
  var product = 1;
  for(var i = 0 ; i < array.length ; i++) {
    product = product * array[i];
  }
  return product;
}

product([1, 2, 3]);//-->6
product([0, -1, -2]);//-->0

//EX9 israa is driver && hiba is navigator 

function average(array)
{
  var sum = 0;
  for(var i = 0 ; i < array.length ; i++)
  {
    sum = sum + array[i];
  }
  return sum/array.length;

}
average([1,2,3]);//-->2
average([0,1,2]);//-->1

//EX10 israa is driver && hiba is navigator 
function square(array)
{
  var newarray =[];
  for(var i = 0 ; i < array.length ; i++)
  {
    newarray.push(array[i] * array[i]);
  }return newarray;

}
square([1,2,3]);//-->[1,4,9]
square([0,2,3]);//-->[1,4,9]




//EX11 israa is driver && hiba is navigator
function isArray(array)
{
  if(Array.isArray(array)){
  return true;
  }return false;
}
isArray([1,2,3,4]);//-->true
isArray("hi");//-->false


//EX12 israa is driver && hiba is navigator

function min(array)
{
  var min = array[0];
  
  for(var i = 1 ; i< array.length  ;i++)
  {
    if( array[i] <  min)
     { 
        min = array[i];
       
     }
     
   
  }return min;
}
min([1,2,3]);//-->1
min([-1,2,3]);//-->-1


//EX13 israa is driver && hiba is navigator
function max(array)
{
  var max = array[0];
  for(var i = 1 ; i < array.length ; i++)
  {
    if(array[i] > max)
    {
      max = array[i];
    }
    
  }return max;
}
max([1,2,3]);

//EX14 israa is driver && hiba is navigator
function shortestString(array)
{
  var shortest = array[0].length;
  for(var i = 1 ; i < array.length ; i++)
  {
    if(array[i].length < shortest )
    {
      shortest = array[i].length;
    }
  }return shortest;
}
shortestString(["hi" , "cat" ,"hello"]);//-->2
shortestString(["lol" , "kitty" ,"hey"]);//-->3

//EX15 israa is driver && hiba is navigator
function longestString(array)
{
  var longest = array[0].length;
  for(var i = 1 ; i < array.length ; i++)
  {
    if(array[i].length > longest )
    {
      longest = array[i].length;
    }
  }return longest;
}
longestString(["hi" , "cat" ,"hello"]);//-->5
longestString(["lol" , "cuttie" ,"hey"]);//-->3


//EX16 israa is driver && hiba is navigator

function minMax(array)
{
  var result = [];
  var min = array[0];
  var max = array[1];
  for(var i = 0; i < array.length ; i++)
  {
    if(array[i] < min )
    {
      min = array[i];
    }else if(array[i] > max)
    {
      max = array[i];
    }
  }
  result.push(min);
  result.push(max);
  return result;
}
minMax([1,5,4,3]);//-->[1,5]
minMax([1,5,-1,3]);

//EX17 israa is driver && hiba is navigator
function shortestLongest(array)
{
 var shortest = array[0];
  var longest = array[0];
 var result = [];
 for(var i = 0 ; i < array.length ; i++)
 {
   if(array[i].length < shortest.length )
   {
     shortest = array[i];
   }
   else if(array[i].length > longest.length )
   {
     longest = array[i];
   }
 }
 result.push(shortest);
 result.push(longest);
 return result;


}
shortestLongest([ "hi", "cat" , "hello"]);//-->['hi' ,'hello']

//EX18 israa is driver && hiba is navigator
function multiplyBy(array , number)
{
  var newarray = [];
  for(var i = 0 ; i < array.length ; i++)
  {
    newarray.push(array[i] * number);
  }
  return newarray;
}
multiplyBy([1,5,4,3] , 2);//-->[2,10,8,6]
multiplyBy([1,6,2,3] , 1);//-->[1,6,2,3]

//EX19 israa is driver && hiba is navigator
function multiplyByIndex(array)
{
 
  for(var i = 0 ; i< array.lenght ; i++)
  {
      array[i] = array[i] * i;
     
  }
  return array;
}
multiplyByIndex([1,5,4,3]);//[0,2,8,9]

*/
//EX20 israa is driver && hiba is navigator
function lengths(array)
{
  var newarray = [];
  for(var i = 0 ; i< array.length ; i++)
  {
     newarray.push(array[i].length);
  }return newarray;
}
lengths(["hi" ,"cat" ,"hello"]);//-->[2,3,5]
lengths(["lol" ,"cuttie"]);//-->[2,3,5]

//EX21 hiba is driver && israa is navigator

function totalNumberOfCharacter(array) {
  var sum = 0;
  for(var i = 0 ; i< array.lenght ; i++) 
  {
  sum = sum + array[i].length
  } return sum;
}
totalNumberOfCharacter(["hi", "cat" , " hello"]);

//EX22 hiba is driver && israa is navigator
function filterEvenLengthWords(array)
{
  var newarray = [];
  for(var i = 0 ; i < array.length ; i++)
  {
    if(array[i].length % 2 === 0 )
    {
      newarray.push(array[i]);
    }
  }return newarray;
}
filterEvenLengthWords(["hi" , "cat" ,"hello"]);//-->['hi']
filterEvenLengthWords(["" , "cuttie" ,"cat"]);//-->['' , 'cuttie']
//EX23 hiba is driver && israa is navigator
function popLastElement(array)
{
  for(var i = 0 ; i < array.length ; i++)
  {
     array[i].pop();
  }
  return array;
}
popLastElement([[1,2,3,4],[1,2],[3,4,5]]);//-->[1,2,3,],[1],[3,4,]



//EX24 hiba is driver && israa is navigator

function pushLastElement(array , elements)
{
  for(var i = 0 ; i < array.length ; i++)
  {
    array[i].push(elements);
  }
  return array;
}
pushLastElement([[2,3] , [2] ,[3,4]] , 1 );//-->[[2,3,1] ,[2,1] ,[3,4,1]]

//EX25 hiba is driver && israa is navigator
function sumArrays(array)
{ 
  var sum = 0;
  for(var i = 0 ; i < array.length ; i++)
  {
     for(j= 0 ; j < array[i].length ; j++)
     {
       sum = sum + array[i][j];
     }
  }return sum;
}
sumArrays([[1,2,3,4,] ,[1,2] ,[3,4,5]]);//-->25
sumArrays([[1,0,3] ,[1] ,[3,10]]);//-->18

//EX26 hiba is driver && israa is navigator
function multiplyBySmallest(array)
{
  var newarray = [];
  var smallest = array[0];
  for(var i = 0 ; i< array.lenght ; i++)
  {
     if(array[i] < smallest)
     {
       smallest = array[i];
     }
  }
  for(var j = 0 ; j< array.length ; j++)
  {
    newarray.push(smallest * array[j]);
  }
  return newarray;
}
 multiplyBySmallest([2,3,4]);//-->[4,6,8]
  multiplyBySmallest([0,1,4]);//-->[0,0,0]

//EX27 hiba is driver && israa is navigator

function joinArray(array)
{
  var newarray = [];
  for(var i = 0; i<array.length ; i++)
  {
    for(var j = 0 ; j < array[i].length ; j++)
    {
      newarray.push(array[i][j]);
    }
  }return newarray;
}
joinArray([[2,3],[2],[3,4]]);//-->[2,3,23,4]
joinArray([[1],[1,2]]);//-->[1,1,2]

//EX28 hiba is driver && israa is navigator
function sumOddEven(array) {
  var odd = 0;
  var even = 0;
  var newarray = [];
  for(var i = 0 ; i <array.length ; i++)
  {
    if (array[i] % 2 === 0) {
      even += array[i];
    }else{
    
    odd += array[i];
    }
    }
newarray.push(odd);
newarray.push(even);
return newarray;
}
sumOddEven([1,2,3,4]);//-->[4,6]
sumOddEven([0,1,4]);//-->[1,4]

//EX29 israa is driver && hiba is navigator

function shortestOfmixed(array)
{  var arrayofstring =[];
  for(var i = 0 ; i < array.length ; i++)
  {
    if(typeof(array[i]) === "string" )
    {
      arrayofstring.push(array[i]);
    }
    }
     if(arrayofstring.length === 0)
    {
      return 'emptystring';
    }
   
    var shortset = arrayofstring[0];
    for(var j = 0 ; j < arrayofstring.length ; j++ )
    {
      if(arrayofstring[j].length < shortset.length)
      {
        shortset = arrayofstring[j];
      }
    }
   
   return shortset
  
}
 shortestOfmixed([4,"two" , 2 ,"three"]);//-->two
shortestOfmixed([4,"too" ,"two",2 ,"three"]);//-->too
shortestOfmixed([0,1,4]);//-->""




//EX30 israa is driver && hiba is navigator
function smallestofMixed(array)
{
 
  var arraynumbers = [];
  for(var i = 0 ; i < array.length ; i++)
  {
    if(typeof(array[i]) === "number")
    {
        arraynumbers.push(array[i]);
    }
  }
 
  if(arraynumbers.length !== 0)
  {
    return min(arraynumbers);
  }
  return 0;
}

smallestofMixed(["two" ,"three"]);//-->0
smallestofMixed([4,"two" ,2 ,"three"]);//-->2







