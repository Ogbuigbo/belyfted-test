"use client";

import BalanceCard from '../app/_components/BalanceCard';
import { User, BalanceInfo, TransactionData } from '../app/types';
import { useState } from 'react';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';
import FinancialDashboard from './_components/PaymentChart';
import UserManagementTable from '../app/_components/UserTable';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const balanceInfo: BalanceInfo = {
    available: 32000.09,
    ledger: 200,
    locked: 189,
    rollingReserve: 400,
    currency: 'NGN'
  };


  const users: User[] = [
    {
      id: '1',
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      dateCreated: '2023-10-01',
      status: 'Active',
      role: 'User'
    },
    {
      id: '2',
      fullName: 'Jane Smith',
      email: 'janesmith@example.com',
      dateCreated: '2023-09-15',
      status: 'Active',
      role: 'Admin'
    }
  ];


  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content" style={{ flex: 1, overflow: 'auto' }}>
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className='main-dashboard'>
        <div>
           
            <BalanceCard balanceInfo={balanceInfo} />
            <FinancialDashboard />

         
                <UserManagementTable initialUsers={users} />
            
          </div>
        </main>
      </div>
    </div>
  );
}