import './Admin.css';
import React from 'react';

const Admin = () => {
  return (
    <div className="admin">
      <h2>Admin Stuff</h2>
      <d1>The designers of this website</d1>
      <div class="image-container">
      <img src="/ron.jpg" alt="A cute cat" width="300" height="200"></img>
      <img src="/cute-dragon-omocat.gif" alt="A cute charmander" width="300" height="300"></img>
      </div>
      <d1>Important Stuff for Board Members:</d1>
      <li><a href="https://docs.google.com/spreadsheets/d/1Lry2lYUy9xDSLo9XxeeCrsQGXDA6Ze4-8SRGluJSngE/edit?gid=1413208263#gid=1413208263">LINK FOR TREASURER</a></li>
      <a href="mailto:dshi2@nd.edu,eguo2@nd.edu,ccs@nd.edu?subject=Reimbursement%20Request&body=NETID:%0D%0ANDID:%0D%0AEVENT:%0D%0A">REQUEST REIMBUREMENT FOR OTHER BOARD MEMBERS</a>

    </div>
  );
};

export default Admin;