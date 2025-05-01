import React from 'react';
import { BalanceInfo } from '@/app/types';
import Link from 'next/link';
import NairaIcon from "../assets/icons/NairaIcon"
import DropdownIcon from "../assets/icons/dropdownIcon"
import BrokenRightArrowIcon from "../assets/icons/brokenRightArrowIcon"
import RightArrowIcon from "../assets/icons/arrowRightIcon"
import MoneyYellowIcon from "../assets/icons/moneyYellowIcon"
import MoneyGreyIcon from "../assets/icons/moneyGreyIcon"
import { BalanceCardProps } from '@/app/types';


const BalanceCard: React.FC<BalanceCardProps> = ({ balanceInfo }) => {
  return (
    <div className="dashboard-container">
      <div className="balance-card">
        <div className="balance-card-left">
          <div className="currency-selector">
            <div className="currency-icon">
             <NairaIcon/>
              <span>NGN</span>
            <DropdownIcon/>
            </div>
          </div>

          <div className="balance-info">
            <div className="balance-label">Available balance</div>
            <div className="balance-amount">
              <span className="currency-symbol">$</span>
              <span className="balance-whole">32,000</span>
              <span className="balance-decimal">.09</span>
            </div>
          </div>
        </div>

        <div className="balance-card-right">
          <div className="balance-details">
            <div className="balance-row">
              <span className="balance-label-text">Ledger Balance :</span>
              <span className="balance-value">$200</span>
            </div>
            <div className="balance-row">
              <span className="balance-label-text">Locked Balance :</span>
              <span className="balance-value">$189</span>
            </div>
          </div>

          <div className="balance-divider"></div>

          <div className="rolling-reserve">
            <div>
            <Link href="#" className="reserve-link">Rolling Reserve</Link>
            <span className="reserve-value"> : $400</span>
            </div>
           <BrokenRightArrowIcon />
          </div>
        </div>
      </div>
      


  <div className="action-cards-wrapper">
      <div className="action-card payout-card">
        <h3 className="action-title">Make Payout🚀</h3>
        <p className="action-description">This works like a virtual bank where you use your car....</p>
        <Link href="#" className="action-button">
         <span className='actionbtn-text'>Get Started</span>
        <RightArrowIcon />
        </Link>
        <div className='money-icon'>
        <MoneyYellowIcon />
        </div>
      </div>
      
      <div className="action-card account-card">
        <h3 className="action-title">Request Virtual Account 🚀</h3>
        <p className="action-description">This works like a virtual bank where you use your car....</p>
        <Link href="#" className="action-button">
          <span className='actionbtn-text'>Get Started</span>
          <RightArrowIcon />
        </Link>
        <div className='money-icon'>
        <MoneyGreyIcon />
        </div>
      </div>
   </div>   
      </div>
   

  );
};

export default BalanceCard;