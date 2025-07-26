
import { useEffect, useState } from 'react';
import { currencyData } from './data.js';

const Currency = () => {
    const [fromcureency,setfromcurrency]=useState('INR')
    const [toCurrency,setToCurrency] = useState('USD')
    const [amount,setAmount]=useState(1)
    const [ansAmount,setansAmount]=useState(0)
    const [data,setData]=useState({}) //data is object type

    //Api call here-->>
    useEffect (()=> {
        const handleCurrency = async()=>{
            const response= await fetch(`https://v6.exchangerate-api.com/v6/75fa2117d0fd644ebdb26b7e/latest/${fromcureency}`)
            const data2 =await response.json() 
            console.log('data',data2);
            setData(data2) //<<<--data store here-->>
            
        }
        handleCurrency();
    },[fromcureency])


    const handleAmountChange =(event)=>{
        setAmount(event.target.value);
    }
    const handleConvert=() =>{
        const converseRate= data.conversion_rates[toCurrency]
        const answer=amount*converseRate //<<<-----for answer after converdion--->>
        setansAmount(answer);

    }
    

  const currencyOptions = Object.entries(currencyData).map(([code, name]) => (
    <option key={code} value={code}>
      {code} - {name}
    </option>
  ));

  return (
    <div className='main'>
    <div className='Currency'>
      <div className='Select'>
        <p>From</p>
        <select value={fromcureency} onChange={(e) => setfromcurrency(e.target.value)}>
        {currencyOptions}</select>
        <input className='CurrencyInput'
         placeholder='Amount'
         value={amount}
         onChange={handleAmountChange}
         type='number'/>
       
      </div>

      <p>To</p>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencyOptions}</select>
        <button onClick={handleConvert}>Convert</button>
       <input className='CurrencyInput'
         placeholder='Amount'
         value={ansAmount}
         type='number'/>
      
    </div>
    </div>
  );
};

export default Currency;
