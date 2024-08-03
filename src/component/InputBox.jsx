import { React, useId } from "react";

function inputBox({
	label,
	amount,
	currency,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	amountDisable = false,
	currencyDissable = false,
}) {
	const inputBoxId = useId();
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex `}>
			<div className='w-1/2'>
				<label
					htmlFor={inputBoxId}
					className='text-black/40 mb-2 inline-block'
				>
					{label}
				</label>
				<input
					id={inputBoxId}
					className='outline-none w-full bg-transparent py-1.5'
					type='text'
					value={amount !== undefined ? amount : ""}
					placeholder='Amount'
					onChange={(e) => onAmountChange(Number(e.target.value))}
					disabled={amountDisable}
				/>
			</div>
			<div className='w-1/2 flex flex-wrap justify-end text-right'>
				<p className='text-black/40 mb-2 w-full'>Currency Type</p>
				<select
					className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
					value={currency}
					onChange={(e) => onCurrencyChange(e.target.value)}
					disabled={currencyDissable}
				>
					{currencyOptions.map((e) => (
						<option key={e} value={e}>{e}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default inputBox;
