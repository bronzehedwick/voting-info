import React from 'react'

const normal = ()=> <>
<h3>Normal Voting Schedule</h3>
<table>
  <tr>
      <th>Day</th>
      <th>Date</th>
      <th>Hours</th>
  </tr>
  <tr>
      <td>Tuesday</td>
      <td>November 3, 2020</td>
      <td>6 AM to 9 PM</td>
  </tr>
</table>
</>

const early = ()=><>
<h3>Early Voting Schedule</h3>
<table>
  <tr>
      <th>Day</th>
      <th>Date</th>
      <th>Hours</th>
  </tr>
  <tr>
      <td>Saturday</td>
      <td>October 24, 2020</td>
      <td>10 AM to 4 PM</td>
  </tr>
  <tr>
      <td>Sunday</td>
      <td>October 25, 2020</td>
      <td>10 AM to 4 PM</td>
  </tr>
  <tr>
      <td>Monday</td>
      <td>October 26, 2020</td>
      <td>7 AM to 3 PM</td>
  </tr>
  <tr>
      <td>Tuesday</td>
      <td>October 27, 2020</td>
      <td>12 PM to 8 PM</td>
  </tr>
  <tr>
      <td>Wednesday</td>
      <td>October 28, 2020</td>
      <td>12 PM to 8 PM</td>
  </tr>
  <tr>
      <td>Thursday</td>
      <td>October 29, 2020</td>
      <td>10 AM to 6 PM</td>
  </tr>
  <tr>
      <td>Friday</td>
      <td>October 30, 2020</td>
      <td>7 AM to 3 PM</td>
  </tr>
  <tr>
      <td>Saturday</td>
      <td>October 31, 2020</td>
      <td>10 AM to 4 PM</td>
  </tr>
  <tr>
      <td>Sunday</td>
      <td>November 1, 2020</td>
      <td>10 AM to 4 PM</td>
  </tr>
</table>
</>

export {early,normal}