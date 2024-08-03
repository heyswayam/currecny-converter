import React, { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	// const currencyInfo = useCurrencyInfo(from,to,amount);
	const options = ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD", "MXN", "SGD", "HKD", "NOK", "KRW", "TRY", "INR", "RUB", "BRL", "ZAR", "DKK", "PLN", "THB", "IDR", "HUF", "CZK", "ILS", "CLP", "PHP", "AED", "MYR", "SAR", "RON", "COP", "ARS", "TWD", "HRK", "DOP", "UAH", "EGP", "VND", "IQD", "KWD", "QAR", "BDT", "OMR", "LKR", "NGN", "PKR", "BDT", "OMR", "LKR", "NGN", "PKR"];


	// const convert = () => {
	// 	setConvertedAmount(useCurrencyInfo(from, to, amount));
	// };
	const conversionResult = useCurrencyInfo(from, to, amount);

	const convert = () => {
	  setConvertedAmount(conversionResult);
	};
	return (
		<div
			className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
			}}
		>
			<div className='w-full'>
				<div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
					{/* <form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					> */}
					<div className='w-full mb-1'>
						<InputBox
							label={`from`}
							amount={amount}
							currency={from}
							onAmountChange={(e) => setAmount(e)}
							onCurrencyChange={(e) => setFrom(e)}
							currencyOptions={options}
						/>
					</div>
					{/* <div className='relative w-full h-0.5'> */}
					{/* <button
						type='button'
						className='flex w-fit my-1 mx-auto border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
					>
						swap
					</button> */}
					{/* </div> */}

					<div className='w-full mb-1'>
						<InputBox
							label={`to`}
							amount={convertedAmount}
							currency={to}
							onCurrencyChange={(e) => setTo(e)}
							currencyOptions={options}
						/>
					</div>

					<button
						// type='submit'
						className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
						onClick={() => convert()}
					>
						Convert
					</button>
					{/* </form> */}
				</div>
			</div>
		</div>
	);
}

export default App;
