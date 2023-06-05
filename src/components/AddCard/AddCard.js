import React,{useState} from 'react'
import "./AddCard.css"
import Button from '@mui/material/Button';
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast'
;export default function AddCard() {
  const Navigation = useNavigate();

  const [imeNaKartici, setImeNaKartici] = useState("");
  const [brojKartice, setBrojKartice] = useState("");
  const [datumIsticanja, setDatumIsticanja] = useState("");
  const [sigurnosniKod, setSigurnosniKod] = useState("");
  const {removeAllFromCart} =useContext(AppContext);
    const handleSubmit = () => {
    let novaGreska = "";
    if (imeNaKartici.trim() === "") {
      toast.error("Invalid name")

    }

    else if (brojKartice.trim() === "") {
      novaGreska = "invalid card number.";
      toast.error(novaGreska)

    }

    else if (datumIsticanja.trim() === "") {
      toast.error("Invalid card expiration date.")

    }

    else if (sigurnosniKod.trim() === "") {
      toast.error("Invalid zip-code.")

    }
    else
      {
        setImeNaKartici("");
      setBrojKartice("");
      setDatumIsticanja("");
      setSigurnosniKod("");
      toast.success("purchase successfully completed")
      removeAllFromCart()
      setTimeout(()=> {
        Navigation('/Products');
       }, 1500);
      }

  };
  return (
    <div className='addCard-div'>
      <div><Toaster    position="bottom-right"
/></div>
      <div className='payment'>
        <h1>PAYMENT: CARD</h1>
      </div>
      <div className='flex'>
      <div className='name-card'>
      <label htmlFor="ime" className='font'>Name on the card:</label>
        <input
          type="text"
          id="ime"
          value={imeNaKartici}
          onChange={(e) => setImeNaKartici(e.target.value)}
          required
          placeholder="e.g. John Doe"
        />
      </div>
      <div className='num-card'>
      <label htmlFor="datum_isticanja" className='font'>Expiry:</label>
          <input
            type="text"
            id="datum_isticanja"
            value={datumIsticanja}
            onChange={(e) => setDatumIsticanja(e.target.value)}
            placeholder="MM/YYYY"
            required
          />
      </div>
      </div>
      <div className='flex'>
      <div className='name-card'>
      <label htmlFor="broj_kartice" className='font'>Card number:</label>
        <input
          type="text"
          id="broj_kartice"
          value={brojKartice}
          onChange={(e) => setBrojKartice(e.target.value)}
          required
          placeholder="XXXX  XXXX  XXXX  XXXX"
        />
      </div>
      <div className='num-card'>
      <label htmlFor="sigurnosni_kod" className='font'>CVV:</label>
          <input
            type="text"
            id="sigurnosni_kod"
            value={sigurnosniKod}
            onChange={(e) => setSigurnosniKod(e.target.value)}
            required
            placeholder="XXX"
          />
      </div>
      </div>
      <Button variant="contained" onClick={()=>{handleSubmit()}} style={{marginTop:"30px",width:"40%",backgroundColor:"black",fontSize:"16px"}}>COMPLETE ORDER</Button>
    
    </div>
  )
}
