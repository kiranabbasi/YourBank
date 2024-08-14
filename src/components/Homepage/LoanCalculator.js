import React, { useState, useEffect } from 'react';

const LoanCalculator = () => {
  const [loanType, setLoanType] = useState('personalLoan'); // 'personal' or 'business'
  const [loanAmount, setLoanAmount] = useState(30000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(5); // Example APR for personal loan

  const handleLoanTypeChange = (type) => {
    setLoanType(type);
    if (type === 'personalLoan') {
      setLoanAmount(30000);
      setLoanTerm(12);
      setInterestRate(5); // Example APR for personal loan
    } else if (type === 'businessLoan') {
      setLoanAmount(300000);
      setLoanTerm(12);
      setInterestRate(7); // Example APR for business loan
    }
  };

  const calculateLoan = () => {
    const principal = loanAmount;
    const apr = interestRate / 100;
    const compoundingPeriods = 12; // Monthly compounding
    const loanTermsInMonths = loanTerm;

    // Calculate Effective Annual Rate (EAR)
    const ear = Math.pow(1 + apr / compoundingPeriods, compoundingPeriods) - 1;

    // Calculate monthly interest rate
    const monthlyInterestRate = Math.pow(1 + ear, 1 / 12) - 1;

    if (!isNaN(principal) && !isNaN(monthlyInterestRate) && !isNaN(loanTermsInMonths)) {
      const x = Math.pow(1 + monthlyInterestRate, loanTermsInMonths);
      const monthly = (principal * x * monthlyInterestRate) / (x - 1);

      if (isFinite(monthly)) {
        return {
          monthlyPayment: monthly.toFixed(2),
          totalPayment: (monthly * loanTermsInMonths).toFixed(2),
        };
      }
    }
    return { monthlyPayment: 0, totalPayment: 0 };
  };

  const { monthlyPayment, totalPayment } = calculateLoan();

  const updateSliderBackground = (slider, min, max, value) => {
    const percentage = ((value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, #CAFF33 ${percentage}%, #e5e7eb ${percentage}%)`;
  };

  useEffect(() => {
    const loanAmountSlider = document.getElementById('loan-amount-slider');
    const loanTermSlider = document.getElementById('loan-term-slider');
    updateSliderBackground(loanAmountSlider, loanType === 'personalLoan' ? 30000 : 300000, loanType === 'personalLoan' ? 3000000 : 1000000, loanAmount);
    updateSliderBackground(loanTermSlider, 12, loanType === 'personalLoan' ? 60 : 96, loanTerm);
  }, [loanAmount, loanTerm, loanType]);

  const handleLoanAmountChange = (e) => {
    const value = Number(e.target.value);
    setLoanAmount(value);
    updateSliderBackground(e.target, loanType === 'personalLoan' ? 30000 : 300000, loanType === 'personalLoan' ? 3000000 : 1000000, value);
  };

  const handleLoanTermChange = (e) => {
    const value = Number(e.target.value);
    setLoanTerm(value);
    updateSliderBackground(e.target, 12, loanType === 'personalLoan' ? 60 : 96, value);
  };

  return (
    <div className=" p-6 rounded-lg shadow-lg shadow-primary border-2 border-primary ">
      <div className='flex justify-between min-[900px]:flex-row flex-col items-center min-[900px]:gap-2 gap-8'>
        <p className="text-3xl ">How much do you need?</p>
        <div className="border border-zinc-700 rounded-full p-2 h-16 bg-customGray font-normal w-72 ">
          <div className="tab-container flex gap-3 relative">
            <div className={`tab-bg ${loanType === 'personalLoan' ? 'left-0' : 'left-50'}`}></div>
            <button
              onClick={() => handleLoanTypeChange('personalLoan')}
              className={`rounded-full p-2 my-1 duration-700 ${loanType === 'personalLoan' ? 'text-black' : 'text-white'}`}
            >
              Personal Loan
            </button>
            <button
              onClick={() => handleLoanTypeChange('businessLoan')}
              className={`rounded-full p-2 my-1 duration-700 ${loanType === 'businessLoan' ? 'text-black' : 'text-white'}`}
            >
              Business Loan
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <label className="block text-zinc-500 mb-2">Loan Amount</label>
        <input
          id="loan-amount-slider"
          type="range"
          min={loanType === 'personalLoan' ? 30000 : 300000}
          max={loanType === 'personalLoan' ? 3000000 : 1000000}
          value={loanAmount}
          onChange={handleLoanAmountChange}
          className="w-full"
        />
        <div className="text-right">{loanAmount.toLocaleString()}</div>
      </div>
      <div className="mt-10">
        <label className="block text-zinc-500 mb-2">Terms Length (Months)</label>
        <input
          id="loan-term-slider"
          type="range"
          min="12"
          max={loanType === 'personalLoan' ? 60 : 96}
          value={loanTerm}
          onChange={handleLoanTermChange}
          className="w-full"
        />
        <div className="text-right">{loanTerm} months</div>
      </div>
      <div className="flex  bg-customGray p-4 rounded-xl mt-16 flex-wrap  gap-5 min-[900px]:justify-between items-center justify-center  ">
        <div className="">
          <div className="text-zinc-300">YOU ARE GETTING</div>
          <div className="text-2xl">RS. {loanAmount}</div>
        </div>
        <div className="">
          <div className="text-zinc-300">TERMS OF USE</div>
          <div className="text-2xl">Month {loanTerm}</div>
        </div>
        <div className="">
          <div className="text-zinc-300">RETURN EVERY MONTH</div>
          <div className="text-2xl">RS. {monthlyPayment}</div>
        </div>
        <div className="">
          <div className="text-zinc-300">TOTAL MUST RETURN</div>
          <div className="text-2xl">RS. {totalPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
