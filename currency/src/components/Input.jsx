import React, { useId } from "react";

const Input = ({
  label = "label",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountId = useId();
  return (
    <div
      className="row  lex flex-lg-row flex-wrap justify-content-lg-between rounded-3 "
      style={{ backgroundColor: "white" }}
    >
      <div className="col-6 ">
        <label
          htmlFor={amountId}
          className="bg-black bg-opacity-50  text-capitalize m-0 rounded-2 m-1 p-1 fw-medium  "
        >
          {label}
        </label>
        <input
          id={amountId}
          className="border-0 text-lg-start "
          type="number"
          placeholder=""
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="col-6  m-0 p-2 text-end">
        <select
          className=" rounded-2 bg-info bg-opacity-50 "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
