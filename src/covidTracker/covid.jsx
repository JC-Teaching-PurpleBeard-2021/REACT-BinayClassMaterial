import { React, useEffect, useState } from 'react';
import './covid.scss';
import { API } from './API';

export default function Covid() {
	const [covidCasesCountryWise, setCovidCases] = useState([]);

	useEffect(() => {
		API().then((data) => setCovidCases(data));
	}, []);

	return (
		<div className='content__child-app'>
			<h1>Covid</h1>
			<table className='table bg-light'>
				<thead>
					<tr className='table-primary fw-bold'>
						<td>Country</td>
						<td>Daily Confirmed</td>
						<td>Total Confirmed</td>
						<td>Active Cases</td>
						<td>Total Deaths</td>
						<td>Last Updated</td>
					</tr>
				</thead>
				<tbody>
					{covidCasesCountryWise ? (
						covidCasesCountryWise.map((countryData) => (
							<tr>
								<td>{countryData.country}</td>
								<td>{countryData.dailyConfirmed}</td>
								<td>{countryData.totalConfirmed}</td>
								<td>{countryData.activeCases}</td>
								<td>{countryData.totalDeaths}</td>
								<td>{new Date(countryData.lastUpdated).toDateString()}</td>
							</tr>
						))
					) : (
						<div>Data Not available. Come Back Later</div>
					)}
				</tbody>
			</table>
		</div>
	);
}
