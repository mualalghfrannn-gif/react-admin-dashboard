import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';
import TrafficIcon from '@mui/icons-material/Traffic';
import './Row1.css';
export default function Row1() {
  return (
    <div style={{ display:"flex",flexWrap:"wrap",gap:"7px",justifyContent:"center",marginTop:"10px", width:"100%"}}>
<div className="stat-card">
      <div className="stat-info">
        <div className="icon-wrapper">
          <PersonAddIcon className="user-icon" />
        </div>
        <h2 className="stat-number">32,441</h2>
        <p className="stat-label">New Clients</p>
      </div>
      <div className="stat-chart">
        <div className="progress-circle"></div>
        <span className="stat-percentage">+5%</span>
      </div>
    </div>
    <div className="stat-card">
      <div className="stat-info">
        <div className="icon-wrapper">
          <MarkunreadIcon className="user-icon" />
        </div>
        <h2 className="stat-number">12,441</h2>
        <p className="stat-label">email sent</p>
      </div>
      <div className="stat-chart">
        <div className="p3"></div>
        <span className="stat-percentage">+14%</span>
      </div>
    </div>
    <div className="stat-card">
      <div className="stat-info">
        <div className="icon-wrapper">
          <GpsNotFixedIcon className="user-icon" />
        </div>
        <h2 className="stat-number">2,41</h2>
        <p className="stat-label">New Clients</p>
      </div>
      <div className="stat-chart">
        <div className="p2"></div>
        <span className="stat-percentage">+17%</span>
      </div>
    </div>
    <div className="stat-card">
      <div className="stat-info">
        <div className="icon-wrapper">
          <TrafficIcon className="user-icon" />
        </div>
        <h2 className="stat-number">52,641</h2>
        <p className="stat-label">New Clients</p>
      </div>
      <div className="stat-chart">
        <div className="p1"></div>
        <span className="stat-percentage">+21%</span>
      </div>
    </div>
    </div>
    
  );
};