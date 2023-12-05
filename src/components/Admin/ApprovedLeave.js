import { useState } from "react";
import {Link} from "react-router-dom"
import userImage from "../../assets/images/bovi.jpeg";

function ApprovedLeave() {

  

  return (
    <div>
      <div>
      <table className="admin-content-table">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Role</th>
                                <th>Leave type</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Total Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                        <th>Stacy Peter</th>

                                <th>Washman</th>
                                <th>Sick</th>
                                <th>16/12/23</th>
                                <th>17/12/23</th>
                                <th>1 day</th>
                            </tr>
                            <tr>
                                <th>Stacy Peterwwwwwwwww</th>
                                <th>Washman</th>
                                <th>Sick</th>
                                <th>16/12/23</th>
                                <th>17/12/23</th>
                                <th>1 day</th>
                            </tr>

                        </tbody>
                    </table>
      </div>
    </div>
  );
}

export default ApprovedLeave;
