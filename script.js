
    let signInfo = ['star', 'moon', 'sun', 'comet'];
    let fortuneOutput = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'];
    let advice = ['go out and eat', 'not read this', 'play more', 'trust no one'];

    

     const randomArray = (array) =>{
        let randomNumber =  Math.floor(Math.random() * array.length);
        let displayWord = array[randomNumber];
       return displayWord;
       };


       console.log(`Your sign right now is a ${randomArray(signInfo)}`);
       console.log(`You are having: ${randomArray(fortuneOutput)}`);
       console.log(`You should: ${randomArray(advice)}`);
       

     
       
       
      
       


 
   

  
