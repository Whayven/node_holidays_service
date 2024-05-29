# Node Holidays Service API

**_Instructions_** : After cloning the respository, run `npm i` and then `npm run main` to start the server on port 5000.

This API provides information about holidays in different countries. It has the following endpoints:

## GET /api/countries

This endpoint returns a list of countries supported by the API. It does not require any parameters.

### Response

`
{
    "countryCode": string,
    "name":string
}`

## GET /api/holidays

This endpoint returns a CSV file containing information about the holidays from the requested country.

### Request

#### Parameters:

`country_code: string (max_length = 2, default = 'AT')`

### Response

`attachment: filename=holidays_{country_code}.csv`
