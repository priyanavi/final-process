import React from 'react';
import Columns from './Columns';

function table() {
  return (
    <React.Fragment>
      <table>
        <tbody>
            <Columns/>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default table
