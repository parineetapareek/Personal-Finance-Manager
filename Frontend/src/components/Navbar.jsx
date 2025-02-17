import React from 'react';

function Navbar() {
  return (
    <>
    <aside>
      <ul>
        <li>Website Name</li>
        <li>Menu</li>
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>My Wallet</li>
          <li>Goals</li>
        </ul>
        <li>Settings</li>
        <ul>
          <li>Settings</li>
          <li>Account</li>
        </ul>
      </ul>
    </aside>
    </>
  )
}

export default Navbar;