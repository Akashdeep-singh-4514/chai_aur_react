import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/currencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className="container  text-white "
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundRepeat: "repeat",
        }}
      >
        <span
          className="bg-white text-black text-xl-start  px-4 rounded-3  "
          style={{ backgroundColor: "white", fontSize: 40, marginLeft: 400 }}
        >
          Currency Converter
        </span>
        <div
          className=""
          style={{ width: 200, marginLeft: 500, marginTop: 100 }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div>
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-primary-subtle rounded-2 text-bg-dark text-black"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="bg-primary-subtle rounded-2 text-bg-dark text-black  "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
