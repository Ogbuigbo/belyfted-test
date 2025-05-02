import React, { useState } from 'react';
import NotificationIcon from "@/app/assets/icons/notificationIcon";
import SettingIcon from "@/app/assets/icons/settingsIcon";
import Image from 'next/image';
import DropdownIcon from "@/app/assets/icons/dropdownIcon";
import { HeaderProps } from '../types';
import NewDropDownIcon from "../assets/icons/newDropDownIcon";


const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <header className="header">
      <h1 className='header-text hide-on-mobile'>Overview</h1>
      <div className="header-left">
        <button 
          className="menu-button hide-on-desktop"
          onClick={onMenuClick}
        >
          ☰
        </button>
      </div>

      <div className="header-right">
        <div className="live-status hide-on-mobile">
        <div className={`toggle-switch ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="toggle-button"></div>
    </div>
          <span className='live-text'>Live</span>
        </div>

        <button className="icon-buttons">
          <NotificationIcon />
        </button>

        <button className="icon-buttons">
          <SettingIcon />
        </button>

        <div className="user-profile-container">
          <div className="user-profile" onClick={toggleDropdown}>
            <div className="avatar">
              <Image 
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1745991507/Ellipse_143_wq7akm.png"  
                alt='user-image' 
                className='user-image object-cover' 
                height={40} 
                width={40} 
              />
            </div>
            <div className="user-details hide-on-mobile">
              <div className="user-name">John Oluwaseyi</div>
              <div className="user-role">Profile</div>
            </div>
            <div className='hide-on-mobile cursor-pointer'>
            <NewDropDownIcon/>
            </div>
            <div className="mobile-user-initials hide-on-desktop">
              JO
              <DropdownIcon className={`dropdown-icon ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;