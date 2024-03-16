

//  const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr , key){
    return arr.reduce(function(accumulator , nextObj){
        accumulator.push(nextObj[key]);
        return accumulator ;  
    } , [] );
}

//  console.log(extractValue(arr,'name')) 
// (4) ['Elie', 'Tim', 'Matt', 'Colt']






function vowelCount(str){
    const vowels = ['a' , 'e', 'i', 'o', 'u'];

    const strArray = Array.from(str.toLowerCase());

    return strArray.reduce(function(obj , nextLetter){
        if(vowels.includes(nextLetter)){

            if(obj[nextLetter]){
                obj[nextLetter] ++ ;
            }
            else{
                obj[nextLetter] = 1 ;
            }
        }
        return obj ;
    } , {} )
}

//  console.log(vowelCount('Paulo'))
//  {a: 1, u: 1, o: 1}









function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator , next , index){
        accumulator[index][key] = value;
        return accumulator ;
    } , arr )
}

//  console.log(addKeyAndValue(arr, 'title', 'Instructor'))

//      0: {name: 'Elie', title: 'Instructor'}
//      1: {name: 'Tim', title: 'Instructor'}
//      2: {name: 'Matt', title: 'Instructor'}
//      3: {name: 'Colt', title: 'Instructor'}







const arr = [1,2,3,4,5,6,7,8];



function partition(arr , callback){
    const trueArr = [];
    const falseArr = [];

    for(let value of arr){
        const result = callback(value);

        if (result === true ){
            trueArr.push(value);
        }else{
            falseArr.push(value);
        }
    }
    return [ trueArr , falseArr ];
}

function isEven(val){
    return val % 2 === 0;
  }
  

  
 console.log(partition(arr, isEven)) 
 // [[2,4,6,8], [1,3,5,7]];
  