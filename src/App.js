import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { CSVLink, CSVDownload } from 'react-csv'

const App = () => {

  let [records, setRecords] = useState([])

  let displayRecords


  fetch('https://data.cityofnewyork.us/api/views/25th-nujf/rows.json')
    .then(response => response.json())
    .then(response => (setRecords(records.concat(response.data))))
    .catch(console.log("Couldn't connect to the API!"))

  if (records.length === 0) {
    displayRecords = (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } else {
    displayRecords = (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Gender</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {records.map((record, index) => (
              <tr>
                <td>{index}</td>
                <td>{record[9]}</td>
                <td>{record[11]}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      </div>
    )
  }

    return(
      <>
        <CSVLink data={records}>Download raw name data</CSVLink>
        {displayRecords}
      </>
    )

}

export default App