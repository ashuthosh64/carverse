"use client";
import React from "react";

function EmiCalculator() {
  const [carPrice, setCarPrice] = React.useState(25000);
  const [downPayment, setDownPayment] = React.useState(5000);
  const [loanTerm, setLoanTerm] = React.useState(60); // months
  const [interestRate, setInterestRate] = React.useState(7.5); // annual percentage

  const calculateEMI = () => {
    const principal = carPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm;

    if (principal <= 0) return 0;
    if (monthlyRate === 0) return principal / numPayments;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);

    return emi;
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTerm + downPayment;
  const totalInterest = totalAmount - carPrice;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            CarVerse EMI Calculator
          </h1>
          <p className="text-gray-600">
            Calculate your monthly car loan payments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Loan Details
            </h2>

            {/* Car Price */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Car Price: ${carPrice.toLocaleString()}
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$5,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Down Payment: ${downPayment.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max={carPrice * 0.5}
                step="500"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>${Math.round(carPrice * 0.5).toLocaleString()}</span>
              </div>
            </div>

            {/* Loan Term */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term: {loanTerm} months (
                {Math.round((loanTerm / 12) * 10) / 10} years)
              </label>
              <input
                type="range"
                min="12"
                max="84"
                step="6"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>12 months</span>
                <span>84 months</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {interestRate}% per year
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Payment Summary
            </h2>

            {/* EMI Display */}
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                <p className="text-3xl font-bold text-blue-600">
                  ${emi.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Car Price</span>
                <span className="font-semibold">
                  ${carPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Down Payment</span>
                <span className="font-semibold text-green-600">
                  -${downPayment.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-semibold">
                  ${(carPrice - downPayment).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Total Interest</span>
                <span className="font-semibold text-red-600">
                  ${totalInterest.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b-2 border-gray-300">
                <span className="text-gray-800 font-medium">Total Amount</span>
                <span className="font-bold text-lg">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Payment Schedule Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">
                Payment Schedule
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  • {loanTerm} monthly payments of ${emi.toFixed(2)}
                </p>
                <p>
                  • Total of ${(emi * loanTerm).toFixed(2)} over{" "}
                  {Math.round((loanTerm / 12) * 10) / 10} years
                </p>
                <p>• Plus ${downPayment.toLocaleString()} down payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            * This calculator provides estimates only. Actual rates and terms
            may vary.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default EmiCalculator;