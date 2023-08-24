import { useState } from 'react';

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);

  const calculateTipe = () => {
    const bill = parseFloat(billAmount);
    const tip = (bill * tipPercentage) / 100;
    setTipAmount(tip);
  };

  return (
    <div>
      <h1>Calculatrice de Pourboire</h1>
      <label>
        Montant de la facture:
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Pourcentage de pourboire: 
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
        />
        %
      </label>
      <br />
      <button onClick={calculateTipe}>Calculer le pourboire</button>
      <p>Montant du pourboire: {tipAmount.toFixed(2)}</p>
    </div>
  );
}

export default TipCalculator;
