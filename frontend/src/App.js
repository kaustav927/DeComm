import React, {useState, useEffect} from 'react';
import getBlockchain from './ethereum.js';
import Store from './Store.js';


function App() {
  const [paymentProcessor, setPaymentProcessor]= useState(undefined);
  const [dai,setDai]= useState(undefined); 

  useEffect(()=>{
    const init=async ()=>{
      const {paymentProcessor,dai}=await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setDai(dai);
    }
    init()
  }, [])

  if(typeof window.ethereum==='undefined'){
    return(
      <div className='container'>
        <div className='col-sm-12'>
          <h1>DeComm</h1>
          <p> You need to intall the latest version of Metamask inorder to use this store</p>
        </div>
      </div>
    )
  }
  return (
    <div>
        <div className='container'>
        <div className='col-sm-12'>
          <h1>DeComm</h1>
          <Store paymentProcessor={paymentProcessor} dai={dai}/>
        </div>
      </div>
    </div>
  );
}

export default App;
