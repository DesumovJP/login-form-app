import React, { useState } from 'react';
import './App.css';
import HomeIcon from './icons/HomeIcon';
import DocumentIcon from './icons/DocumentIcon';
import ChartIcon from './icons/ChartIcon';
import PersonIcon from './icons/PersonIcon';
import PiggyIcon from './icons/PiggyIcon';
import HouseIcon from './icons/HouseIcon';
import PlusIcon from './icons/PlusIcon';
import SettingsIcon from './icons/SettingsIcon';
import NotificationsIcon from './icons/NotificationsIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';
import PlusOnlyIcon from './icons/PlusOnlyIcon';
import KeyIcon from './icons/KeyIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import DownloadIcon from './icons/DownloadIcon';
import FilterIcon from './icons/FilterIcon';
import CloseIcon from './icons/CloseIcon';
import MoreIcon from './icons/MoreIcon';
import Dropdown from './components/Dropdown';

// Іконки (використовуємо emoji для простоти)
const Icons = {
  logo: '⬜',
  settings: '⚙️',
  notifications: '🔔',
  box: '📦',
  document: '📄',
  chart: '📊',
  person: '👤',
  piggy: '🏦',
  house: '🏠',
  plus: '➕',
  download: '⬇️',
  filter: '🔍',
  close: '✖️',
  arrow: '➡️',
  arrowDown: '⬇️',
  thumbsUp: '👍',
  menu: '☰'
};

function HomePage() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expensePeriod, setExpensePeriod] = useState('Weekly');
  const [incomePeriod, setIncomePeriod] = useState('30 Days');
  const [balancePeriod, setBalancePeriod] = useState('For Week');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [defaultViewValue, setDefaultViewValue] = useState('Default View');
  const [sortByValue, setSortByValue] = useState('Sort by Month');
  const [allSourcesValue, setAllSourcesValue] = useState('All Sources');
  const [weeklyValue, setWeeklyValue] = useState('Weekly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Додаємо типи кружечків для кожної категорії та дня
  const expenseData = [
    // S, M, T, W, T, F, S
    // Groceries
    [
      'empty', 'gray', 'blue', 'pattern', 'black', 'blue', 'gray'
    ],
    // Fashion
    [
      'black', 'blue', 'pattern', 'gray', 'gray', 'pattern', 'empty'
    ],
    // Electronics
    [
      'gray', 'black', 'blue', 'pattern', 'empty', 'gray', 'pattern'
    ]
  ];
  const expenseCategories = ['Groceries', 'Fashion', 'Electronics'];
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const navTabs = ['Dashboard', 'Analytics', 'Invoice', 'Joint Savings', 'Calendar'];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f8fafc',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      position: 'relative'
    }}>
      
      {/* Хедер на всю ширину */}
      <div className="full-width-header">
        <div className="header-content">
          {/* MOBILE: бургер, логотип, меню */}
          <div className="header-mobile">
            <div className="mobile-menu-btn" aria-label="Open sidebar menu">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                  background: '#2563eb',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  zIndex: 1001
                }}
              >
                {Icons.menu}
              </button>
            </div>
            <div className="mobile-logo-center">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  background: '#2563eb',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}>
                  F
                </div>
                <span style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#1e293b'
                }}>
                  Fingoals
                </span>
              </div>
            </div>
            <div className="mobile-nav-dropdown">
              <button className="mobile-nav-btn" aria-label="Open navigation menu" onClick={() => setMobileMenuOpen((o) => !o)}>
                Menu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              {mobileMenuOpen && (
                <div className="mobile-nav-list">
                  {navTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                      className={`nav-tab${activeTab === tab ? ' active' : ''}`}
                    >
                      <span className="tab-label">{tab}</span>
                    </button>
                  ))}
                  <div className="mobile-profile">
                    <div className="avatar">MD</div>
                    <div className="profile-details">
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>
                        Maretta Daniel
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        danielmaretta@mail.com
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* DESKTOP: як було */}
          <div className="header-desktop">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                background: '#2563eb',
                color: '#fff',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 'bold'
              }}>
                F
              </div>
              <span style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: '#1e293b'
              }}>
                Fingoals
              </span>
            </div>
            <div className="header-nav-profile">
              <div className="desktop-nav-tabs">
                <div className="nav-tabs">
                  {navTabs.map((tab, idx) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`nav-tab${activeTab === tab ? ' active' : ''}`}
                    >
                      <span className="tab-label">{tab}</span>
                    </button>
                  ))}
                </div>
                <div className="profile-info">
                  <span className="header-icon"><SettingsIcon /></span>
                  <span className="header-icon notification-icon"><NotificationsIcon /></span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="avatar">MD</div>
                    <div className="profile-details">
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#1e293b' }}>
                        Maretta Daniel
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>
                        danielmaretta@mail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Основний контент з бічною панеллю */}
      <div style={{ display: 'flex' }}>
        {/* Ліва бічна панель */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          
          {/* Привітання */}
          <div>
            <h2 style={{ 
              fontSize: '20px', 
              fontWeight: '600', 
              color: '#1e293b',
              margin: '0 0 4px 0'
            }}>
              Welcome Back, Daniel!
            </h2>
            <p style={{ 
              fontSize: '14px', 
              color: '#64748b',
              margin: '0'
            }}>
              Current summary financial report
            </p>
          </div>

          {/* HOME секція */}
          <div>
            <h3 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#64748b',
              textTransform: 'uppercase',
              margin: '0 0 16px 0',
              letterSpacing: '0.5px'
            }}>
              HOME
            </h3>
            <div className="sidebar-list">
              <div className="sidebar-item active">
                <span className="sidebar-icon"><HomeIcon /></span>
                <span className="sidebar-label">Overview</span>
                <span className="sidebar-arrow"><ArrowDownIcon /></span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon"><DocumentIcon /></span>
                <span className="sidebar-label">Legacy Statement</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon"><ChartIcon /></span>
                <span className="sidebar-label">Financial Projection</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon"><PersonIcon /></span>
                <span className="sidebar-label">Account</span>
              </div>
            </div>
          </div>

          {/* POCKET секція */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <h3 style={{ 
                fontSize: '12px', 
                fontWeight: '600', 
                color: '#64748b',
                textTransform: 'uppercase',
                margin: '0',
                letterSpacing: '0.5px'
              }}>
                POCKET
              </h3>
              <span className="sidebar-plus"><PlusOnlyIcon /></span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span className="sidebar-icon"><PiggyIcon /></span>
                <span style={{ fontSize: '14px' }}>Married Savings</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span className="sidebar-icon"><HouseIcon /></span>
                <span style={{ fontSize: '14px' }}>Emergency Funds</span>
              </div>
      </div>
    </div>

          {/* Нижня картка */}
          <div style={{
            background: '#2563eb',
            borderRadius: '12px',
            padding: '20px',
            color: '#fff',
            marginTop: 'auto'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              marginBottom: '12px'
            }}>
              <span className="sidebar-key"><KeyIcon /></span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Unlock full version</div>
                <div style={{ fontSize: '12px', opacity: '0.8' }}>20+ matrixs</div>
              </div>
            </div>
            <div className="trial-btn-group">
              <button className="trial-btn">14 day free-trial</button>
              <button className="trial-external-btn"><ExternalLinkIcon /></button>
            </div>
          </div>
      </div>

        {/* Оверлей для мобільного меню */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="sidebar-overlay"
          />
        )}

        {/* Основна область контенту */}
        <div className="main-content">

          {/* Заголовок та кнопки дій */}
          <div className="card-header">
            <div>
              <h1 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#1e293b',
                margin: '0 0 4px 0'
              }}>
                Financial Overview
              </h1>
              <div style={{ fontSize: '14px', color: '#64748b' }}>
                Overview &gt; All Reports
      </div>
    </div>
            
            <div className="action-buttons">
              <Dropdown
                options={["Default View", "Monthly", "Weekly"]}
                value={defaultViewValue}
                onChange={setDefaultViewValue}
                className="custom-dropdown"
              />
              <button className="overview-tab">
                <DownloadIcon /> Export
              </button>
              <button className="overview-tab">
                <FilterIcon /> Filter
              </button>
            </div>
    </div>

          {/* Сітка карток */}
          <div className="cards-grid">
            
            {/* Expense Breakdown - ліва колонка на всю висоту */}
            <div className="card expense-breakdown-card">
              <div className="card-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Expense Breakdown
                </h3>
                <div className="weekly-group">
                  <Dropdown
                    options={["Weekly", "Monthly"]}
                    value={expensePeriod}
                    onChange={setExpensePeriod}
                    className="custom-dropdown"
                  />
                  <button className="weekly-external-btn">
                    <ExternalLinkIcon />
                  </button>
                </div>
              </div>
              
              <div className="expense-breakdown-top">
                <div className="expense-breakdown-top-left">
                  <div className="expense-amount">$ 17,3K</div>
                </div>
                <div className="legend">
                  <div className="legend-item"><span className="legend-dot legend-dot-blue"></span>$1-$100</div>
                  <div className="legend-item"><span className="legend-dot legend-dot-black"></span>$100-$300</div>
                  <div className="legend-item"><span className="legend-dot legend-dot-gray"></span>&gt;$300</div>
                  <div className="legend-item"><span className="legend-dot legend-dot-empty"></span>No Expense</div>
                </div>
              </div>

              {/* Сітка днів */}
              <div className="expense-breakdown-grid">
                {expenseCategories.map((cat, rowIdx) => (
                  <div className="expense-breakdown-row" key={cat}>
                    <div className="expense-breakdown-cat">{cat}</div>
                    {expenseData[rowIdx].map((type, colIdx) => (
                      <div key={colIdx} className={`expense-dot ${type}`}></div>
                    ))}
                  </div>
                ))}
                <div className="expense-breakdown-days">
                  <div></div>
                  {weekDays.map((day) => (
                    <div key={day} className="expense-breakdown-day">{day}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Права колонка з трьома картками */}
            <div className="right-column-cards">
              {/* Financial Class Mastery */}
              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                borderRadius: '12px',
                padding: '24px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden'
              }} className="card">
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '50%'
                }}></div>
                
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>
                  Join Our Financial Class Mastery
                </h3>
                <div style={{ fontSize: '14px', opacity: '0.8', marginBottom: '16px' }}>
                  +15% discount for member
                </div>
                <button style={{
                  background: '#2563eb',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Join Class {Icons.arrow}
                </button>
              </div>

              {/* Нижня сітка з двома картками */}
              <div className="bottom-cards-grid">
                {/* Today Received */}
                <div className="card" style={{ position: 'relative' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>
                    Today Received
                  </h3>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                    $ 532,921
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    fontSize: '14px',
                    color: '#ef4444'
                  }}>
                    {Icons.arrowDown} 12%
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }}>
                    {Icons.arrowDown}
                  </div>
                </div>

                {/* Financial Report */}
                <div className="card" style={{
                  background: '#1e293b',
                  color: '#fff'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}>
                    <span style={{ fontSize: '16px', cursor: 'pointer' }}><CloseIcon /></span>
                    <span style={{ fontSize: '16px' }}>{Icons.document}</span>
                    <span style={{ fontSize: '16px' }}>{Icons.arrow}</span>
                  </div>
                  <div style={{ fontSize: '14px', marginBottom: '8px', opacity: '0.8' }}>
                    Track and Print Report
                    </div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>
                    Financial Report
                  </div>
                </div>
              </div>
        </div>
    </div>

          {/* Друга сітка карток */}
          <div className="income-balance-grid">
            
            {/* Income Sources - 3/4 ширини */}
            <div className="card income-sources-card">
              <div className="income-sources-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Income Sources
                </h3>
                <div className="select-group">
                  <Dropdown
                    options={["Sort by Month", "Sort by Week"]}
                    value={sortByValue}
                    onChange={setSortByValue}
                    className="custom-dropdown"
                  />
                  <Dropdown
                    options={["All Sources", "Salary", "Freelance", "Bonus", "Another job"]}
                    value={allSourcesValue}
                    onChange={setAllSourcesValue}
                    className="custom-dropdown custom-dropdown--black-hover"
                    activeClassName={allSourcesValue === 'All Sources' ? 'all-sources-active' : ''}
                  />
                  <button className="more-btn"><MoreIcon /></button>
                </div>
              </div>
              
              <div className="income-sources-content">
                <div className="income-sources-left">
                  <button className="days-btn">30 Days</button>
                  <div className="income-amount">$ 7,72K</div>
                  <div className="legend-title">Income sources</div>
                  <div className="income-sources-subtitle">Statistic in a month</div>
                  <div className="legend">
                    <div className="legend-item"><span className="legend-dot salary"></span>Salary</div>
                    <div className="legend-item"><span className="legend-dot freelance"></span>Freelance</div>
                    <div className="legend-item"><span className="legend-dot bonus"></span>Bonus</div>
                    <div className="legend-item"><span className="legend-dot another"></span>Another job</div>
                  </div>
                </div>
                <div className="income-sources-right">
                  <div className="income-growth-label growth-label-vertical">
                    <span className="growth-badge">
                      <span className="growth-badge-icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 11V3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 3L3.5 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M7 3L10.5 6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      +73,6%
                    </span>
                    <span className="growth-label-text">better than last month</span>
                    <span className="income-growth-arrow">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28V10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 10L12 14" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16 10L20 14" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                  <div className="income-bar-chart">
                    <div className="bar bar1">
                      <div className="bar-label"><span className="bar-label-icon"><ExternalLinkIcon /></span>12K</div>
                    </div>
                    <div className="bar bar2">
                      <div className="bar-label"><span className="bar-label-icon"><ExternalLinkIcon /></span>8.1K</div>
                    </div>
                    <div className="bar bar3">
                      <div className="bar-label"><span className="bar-label-icon"><ExternalLinkIcon /></span>7.1K</div>
                    </div>
                    <div className="bar bar4">
                      <div className="bar-label"><span className="bar-label-icon"><ExternalLinkIcon /></span>5.6K</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Financial Balance - 1/4 ширини */}
            <div className="card financial-balance-card">
              <div className="card-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Financial Balance
                </h3>
                <Dropdown
                  options={["For Week", "For Month"]}
                  value={balancePeriod}
                  onChange={setBalancePeriod}
                  className="custom-dropdown"
                />
      </div>

              {/* Легенда */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                  Total
        </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></div>
                  Profit Today
      </div>
    </div>

              {/* Напівкругла діаграма */}
              <div className="half-circle-chart">
                <svg width="120" height="60" viewBox="0 0 120 60">
                  {/* Фоновий напівкруг */}
                  <path
                    d="M 10 50 A 50 50 0 0 1 110 50"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Прогрес напівкруг */}
                  <path
                    className="half-circle-progress"
                    d="M 10 50 A 50 50 0 0 1 110 50"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="34.54 157"
                    strokeDashoffset="0"
                    style={{
                      transform: 'rotate(-90deg)',
                      transformOrigin: '60px 30px'
                    }}
                  />
                  {/* Центральний текст */}
                  <text
                    x="60"
                    y="35"
                    textAnchor="middle"
                    fontSize="16"
                    fontWeight="600"
                    fill="#1e293b"
                  >
                    22%
                  </text>
                  <text
                    x="60"
                    y="50"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#64748b"
                  >
                    from yesterday
                  </text>
                </svg>
              </div>

              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                22% from yesterday
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                fontSize: '14px',
                color: '#16a34a'
              }}>
                {Icons.arrow} Profit is 22% More short last week
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 