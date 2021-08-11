export const API = async () => {
	return await fetch('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=GB').then((res) => res.json());
};
