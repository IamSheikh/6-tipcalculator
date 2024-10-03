import { useState, FormEvent } from "react";
import numeral from "numeral";

const App = () => {
  const [price, setPrice] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [result, setResult] = useState({
    total: 0,
    tip: 0,
    tipPerPerson: 0,
    totalPerPerson: 0,
    numberOfPeople: 1,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const totalTip = (tipPercentage / 100) * price;
    if (numberOfPeople > 1) {
      setResult({
        total: price + totalTip,
        tip: totalTip,
        tipPerPerson: totalTip / numberOfPeople,
        totalPerPerson: (price + totalTip) / numberOfPeople,
        numberOfPeople: numberOfPeople,
      });
    } else {
      setResult({
        total: price + totalTip,
        tip: totalTip,
        tipPerPerson: 0,
        totalPerPerson: 0,
        numberOfPeople: 1,
      });
    }

    setIsCalculated(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-red-500">A</span>
          <span className="text-orange-500">l</span>
          <span className="text-yellow-300">l</span>
          <span className="text-green-500">i</span>
          <span className="text-blue-500">s</span>
          <span className="text-violet-500">o</span>
          <span className="text-red-500">n</span>{" "}
          <span className="text-orange-500">B</span>
          <span className="text-yellow-300">u</span>
          <span className="text-green-500">r</span>
          <span className="text-blue-500">g</span>
          <span className="text-violet-500">e</span>
          <span className="text-red-500">r</span>
          <span className="text-orange-500">s</span> Tip Calculator
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col mt-4"
        >
          <div className="flex flex-col">
            <div className="flex">
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  placeholder="Price"
                  className="border border-gray-300 rounded-lg pl-7 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={price === 0 ? undefined : price}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </div>
              <div className="relative ml-5">
                <input
                  type="number"
                  placeholder="Tip %"
                  className="border border-gray-300 rounded-lg pl-4 pr-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  value={tipPercentage === 0 ? undefined : tipPercentage}
                  onChange={(e) => setTipPercentage(+e.target.value)}
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>

            <div className="flex self-center mt-2">
              <input
                type="number"
                value={numberOfPeople === 0 ? undefined : numberOfPeople}
                onChange={(e) => setNumberOfPeople(+e.target.value)}
                placeholder="Number of People"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div className="flex self-center mt-2">
            <button
              type="submit"
              className=" bg-blue-500
          hover:bg-blue-600
          text-white
          font-semibold
          py-2
          px-4
          ml-2
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2"
            >
              Calculate
            </button>
          </div>
        </form>
        {isCalculated && (
          <div>
            <div>
              <h1 className="text-xl">Total Amount: </h1>
              <h1 className="text-right text-xl">
                ${numeral(result.total).format("0.00")}
              </h1>
            </div>
            <div>
              <h1 className="text-xl">Tip: </h1>
              <h1 className="text-right text-xl">
                ${numeral(result.tip).format("0.00")}
              </h1>
            </div>
            {result.numberOfPeople > 1 && (
              <>
                <div>
                  <h1 className="text-xl">Tip Per Person: </h1>
                  <h1 className="text-right text-xl">
                    ${numeral(result.tipPerPerson).format("0.00")}
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl">Total Per Person: </h1>
                  <h1 className="text-right text-xl">
                    ${numeral(result.totalPerPerson).format("0.00")}
                  </h1>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
