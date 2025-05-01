import { ReactElement } from "react";
  
  export interface TransactionData {
    payin: number;
    payout: number;
    total: number;
  }
  
  export interface MonthlyData {
    month: string;
    value: number;
  }
  
  export interface BalanceInfo {
    available: number;
    ledger: number;
    locked: number;
    rollingReserve: number;
    currency: string;
  }
  
  export interface SidebarItem {
    icon: ReactElement;
    label: string;
    path: string;
    active?: boolean;
    style?: React.CSSProperties; 
  }

export interface BarDataItem {
  name: string;
  value: number;
}

 export interface PieDataItem {
  name: string;
  value: number;
  amount: string;
  color: string;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
} 

export interface BalanceCardProps {
  balanceInfo: BalanceInfo;
}

export interface HeaderProps {
  onMenuClick: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define types
export interface User {
  id: string;
  fullName: string;
  email: string;
  dateCreated: string;
  status: 'Active' | 'Inactive';
  role: 'Admin' | 'User';
}

export interface UserManagementTableProps {
  initialUsers: User[];
  title?: string;
}
