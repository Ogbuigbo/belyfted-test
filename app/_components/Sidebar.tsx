import React from 'react';
import { SidebarItem } from '@/app/types';
import Image from 'next/image';
import HomeIcon from "../assets/icons/homeIcon";
import WalletIcon from "../assets/icons/walletIcon";
import ProfileIcon from "../assets/icons/profileIcon";
import MoneySendIcon from "../assets/icons/moneysendIcon";
import MoneyRecieveIcon from "../assets/icons/moneyrecieveIcon";
import ProfileUserIcon from "../assets/icons/profileUserIcon";
import SidebarSettingIcon from "../assets/icons/sidebarSettingIcon";
import { SidebarProps } from '@/app/types';


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarItems: SidebarItem[] = [
    { 
      icon: <HomeIcon />, 
      label: 'Home', 
      path: '/', 
      active: true,
      style: { color: '#303032' } 
    },
    { 
      icon: <WalletIcon />, 
      label: 'Wallet', 
      path: '/wallet',
      style: { color: '#E6E9EE' } 
    },
    { 
      icon: <ProfileIcon />, 
      label: 'My Profile', 
      path: '/profile',
      style: { color: '#303032' } 
    },
    { 
      icon: <MoneyRecieveIcon />, 
      label: 'In-bound Payments', 
      path: '/inbound',
      style: { color: '#E6E9EE' } 
    },
    { 
      icon: <MoneySendIcon />, 
      label: 'Out-bound Payments', 
      path: '/outbound',
      style: { color: '#E6E9EE' }  
    },
    { 
      icon: <ProfileUserIcon />, 
      label: 'Users and Roles', 
      path: '/users',
      style: { color: '#303032' } 
    },
    { 
      icon: <SidebarSettingIcon />, 
      label: 'Settings', 
      path: '/settings',
      style: { color: '#E6E9EE' }  
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo">
              <Image src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1745992320/Logo_4_rfabjo.png" alt='logo' height={38} width={115} />
            </div>
          </div>
          <button
            className="close-button hide-on-desktop"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {sidebarItems.map((item, index) => (
              <li key={index} className={`nav-item`}  style={{
                ...item.style
              }}>
                <p
                  className={`nav-link ${item.active ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Desktop sidebar spacer */}
      <div className="sidebar-spacer hide-on-mobile" />
    </>
  );
};

export default Sidebar;