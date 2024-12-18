import React ,{useState} from 'react' ;
function Counter()
{   
    let [number , setNumber] = useState(0) ;

    const Increase  = () => {setNumber(number+1) ; }
    const Decrease = () => {setNumber(number-1) ;}
    const Reset = () => {setNumber(0) ;}
   
   return(
    <div>
    
    <h3>{number}</h3>
    <button class="lick" onClick={Increase}>Increase </button>
    <button class="lick" onClick={Decrease}>Decrease </button>
    <button class="lick" onClick={Reset}>Reset </button>
     </div>
    

   ) ;



}


export default Counter