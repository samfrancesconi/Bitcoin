import './App.css';
import { useEffect, useState } from 'react';
import ValueSnippet from './ValueSnippet';
import DateSnippet from './DateSnippet';


const flagsHelper = {
  usa : 'https://media.istockphoto.com/photos/american-flag-background-waving-usa-flag-picture-id1159561821?k=20&m=1159561821&s=170667a&w=0&h=Ea_iNq7OhitWhiXUK-l9I238-Dlkc7hTvkrTuFArnpw=',
  europe: 'https://qph.fs.quoracdn.net/main-qimg-3be6fcf904541ca2b3d08d6a0e6fc01a',
  uk: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_the_United_Kingdom_Square.svg/1241px-Flag_of_the_United_Kingdom_Square.svg.png'
}

function App() {
  const[country, setCountry] = useState('LOADING...');
  const[coin, setCoin] = useState('LOADING...');
  const[flag, setFlag] = useState(flagsHelper.uk);
  const[date, setDate] = useState('LOADING')

  function dataLoader() {
    setTimeout(() => {   
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => {
        return res.json();
      })
      .then(data => {
        if(flag === flagsHelper.uk) {
          setCountry(data.bpi.EUR.code)
          setCoin(data.bpi.EUR.rate + ' €')
          setFlag(flagsHelper.europe)
          setDate(data.time.updated)
          }
        else if (flag === flagsHelper.europe) {
          setCountry(data.bpi.USD.code)
          setCoin(data.bpi.USD.rate + ' $')
          setFlag(flagsHelper.usa)
          setDate(data.time.updated)
        }  
        else {
          setCountry(data.bpi.GBP.code)
          setCoin(data.bpi.GBP.rate + ' £')
          setFlag(flagsHelper.uk)
          setDate(data.time.updated)
        }
        }
       )},2000)
   }


useEffect(dataLoader,[flag])


return(
  <div className="card"  style={{backgroundImage:`url(${flag})`}}> 
    <DateSnippet time={date}/>
    <ValueSnippet coin={country} rate={coin}/>
  </div>)
}

export default App;
