# ExpressJS-Incident-Report

## The required working flow :
- A POST endpoint to create a user (email unique, password, first name and last name), 
- A POST endpoint to login
- A POST endpoint that receives the incident report.
- The report should have the following data :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string }

- The endpoint receives the report, adds a weather data and stores it in a table “incidents”
. The weather report should be fetched from the API service of https://openweathermap.org/current
. The stored object should be then as follow :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string, “date”: date, “weather_report”: object }
- A GET endpoint that lists all the incidents.
- A GET endpoint to get a user incidents 
> Note only a register user should be able to create a report.
