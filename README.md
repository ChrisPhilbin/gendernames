## About
This is a very basic React app designed specifically to hit the data.cityofnewyork.us API and fetch a list of all names. The associated gender, as well as the first name for each record are rendered to the DOM, as well as there being an option to export all records into a CSV in order to more easily work with Excel, Google Sheets, etc.

## Motivation / Use case
I wanted to be able to determine which names in an existing Salesforce (SFDC) database were male vs. female in order to appropiately market a "women in business" type event towards women. SFDC does have an already existing salutation (Mr, Mrs, Ms, etc.) field when creating/cloning a new contact record, however it's never consistently used. Having a bulk list in CSV format will make it easier to "bulk update" these contact records.

## Usage
To use the Gender Names React app, run the following commands:

### `git clone https://github.com/ChrisPhilbin/gendernames.git`
### `cd gendernames`
### `npm install`
### `npm start`