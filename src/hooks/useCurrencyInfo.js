import { useEffect, useState } from "react";

function useCurrencyInfo(from, to, amt) {
	const [data, setData] = useState(null);

	useEffect(() => {
		const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amt}`;
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key":
					"a3c1898b34mshac7162f4077ffbbp1a6790jsn6e8499ea712b",
				"X-RapidAPI-Host":
					"currency-conversion-and-exchange-rates.p.rapidapi.com",
			},
		};
		fetch(url, options)
			.then((res) => {
				return res.json();
			})
			.then((data) => setData(data.result))
			.catch((err) => console.log(err));
	}, [from, to, amt]);

	return data;
}

export default useCurrencyInfo;
