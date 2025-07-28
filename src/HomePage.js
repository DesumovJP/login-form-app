import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onClick={() => navigate('/login')}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
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
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
              onClick={() => navigate('/login')}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
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
            <div className="sidebar-list">
              <div className="sidebar-item">
                <span className="sidebar-icon"><PiggyIcon /></span>
                <span className="sidebar-label">Married Savings</span>
              </div>
              <div className="sidebar-item">
                <span className="sidebar-icon"><HouseIcon /></span>
                <span className="sidebar-label">Emergency Funds</span>
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
                className="custom-dropdown default-view-dropdown"
              />
              <button className="overview-tab export-btn">
                <DownloadIcon /> Export
              </button>
              <button className="overview-tab filter-btn">
                <FilterIcon /> Filter
              </button>
            </div>
    </div>

          {/* Сітка карток */}
          <div className="cards-grid">
            
            {/* Expense Breakdown - ліва колонка на всю висоту */}
            <div className="card expense-breakdown-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Expense Breakdown
                </h3>
                <div className="weekly-group">
                  <Dropdown
                    options={["Weekly", "Monthly"]}
                    value={expensePeriod}
                    onChange={setExpensePeriod}
                    className="custom-dropdown weekly-dropdown"
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
              <div className="expense-breakdown-grid" style={{ marginTop: '16px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  {expenseCategories.map((cat, rowIdx) => (
                    <div className="expense-breakdown-row" key={cat}>
                      <div className="expense-breakdown-cat">{cat}</div>
                      {expenseData[rowIdx].map((type, colIdx) => (
                        <div key={colIdx} className={`expense-dot ${type}`}></div>
                      ))}
                    </div>
                  ))}
                </div>
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
                padding: '32px',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px'
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
                
                <h3 style={{ fontSize: '28px', fontWeight: 800, margin: '0 0 8px 0', lineHeight: '1.1', letterSpacing: '-0.5px' }}>
                  Join Our Financial<br />
                  <span style={{ fontWeight: 900 }}>Class Mastery</span>
                </h3>
                <div style={{
                  position: 'absolute',
                  left: 24,
                  bottom: 24,
                  fontSize: '15px',
                  opacity: 0.85,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span className="discount-badge">+15%</span> discount for member
                </div>
                <div style={{
                  position: 'absolute',
                  right: 24,
                  bottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <button className="join-class-btn">
                    Join Class
                  </button>
                  <button className="join-class-external-btn">
                    <ExternalLinkIcon />
                  </button>
                </div>
              </div>

              {/* Нижня сітка з двома картками */}
              <div className="bottom-cards-grid">
                {/* Today Received */}
                <div className="card today-received-card" style={{ position: 'relative', minHeight: '110px', padding: '32px' }}>
                  <button className="today-dropdown-btn">
                    <ArrowDownIcon />
                  </button>
                  <div style={{ 
                    position: 'absolute',
                    top: '16px',
                    left: '60px'
                  }}>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: '#64748b', marginBottom: '0' }}>Today</div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', marginTop: '2px' }}>Received</div>
                  </div>
                  <div style={{ 
                    position: 'absolute',
                    top: '60px',
                    left: '16px',
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b' }}>
                      $ 532,921
                    </div>
                  </div>
                  <div style={{ 
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    fontSize: '16px',
                    color: '#1e293b',
                    fontWeight: '600'
                  }}>
                    12%
                    <div className="small-arrow-circle">
                      <ArrowDownIcon />
                    </div>
                  </div>
                  <div className="bottom-right-arrow-circle">
                    <ArrowDownIcon />
                  </div>
                </div>

                {/* Financial Report */}
                <div className="card" style={{
                  background: '#000000',
                  color: '#fff',
                  padding: '18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '24px'
                  }}>
                    <div className="gray-circle-icon">
                      <CloseIcon />
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div className="white-circle-icon">
                        <DocumentIcon />
                      </div>
                      <div className="white-circle-icon">
                        <ExternalLinkIcon />
                      </div>
                    </div>
                  </div>
                  <div className="track-print-label">
                    Track and Print Report
                  </div>
                  <div className="financial-report-title">
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
                    className="custom-dropdown sort-dropdown"
                  />
                  <Dropdown
                    options={["All Sources", "Salary", "Freelance", "Bonus", "Another job"]}
                    value={allSourcesValue}
                    onChange={setAllSourcesValue}
                    className="custom-dropdown custom-dropdown--black-hover all-sources-dropdown"
                    activeClassName={allSourcesValue === 'All Sources' ? 'all-sources-active' : ''}
                  />
                  <button className="more-btn"><MoreIcon /></button>
                </div>
              </div>
              
              <div className="income-sources-content">
                <div className="income-sources-left" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div>
                    <button className="days-btn">30 Days</button>
                    <div className="income-amount" style={{ marginTop: '24px' }}>$ 7,72K</div>
                    <div className="legend-title" style={{ marginTop: '32px' }}>Income sources</div>
                    <div className="income-sources-subtitle">Statistic in a month</div>
                  </div>
                  <div className="legend" style={{ marginTop: 'auto', marginBottom: '40px' }}>
                    <div className="legend-item" style={{ fontSize: '14px' }}><span className="legend-dot salary"></span>Salary</div>
                    <div className="legend-item" style={{ fontSize: '14px' }}><span className="legend-dot freelance"></span>Freelance</div>
                    <div className="legend-item" style={{ fontSize: '14px' }}><span className="legend-dot bonus"></span>Bonus</div>
                    <div className="legend-item" style={{ fontSize: '14px' }}><span className="legend-dot another"></span>Another job</div>
                  </div>
                </div>
                <div className="income-sources-right">
                  <div className="income-bar-chart" style={{ position: 'relative' }}>
                    <div className="bar bar1" style={{
                      background: 'repeating-linear-gradient(45deg, #1e293b, #1e293b 4px, #334155 4px, #334155 8px)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      7.7K
                    </div>
                    <div className="bar bar2" style={{
                      background: 'repeating-linear-gradient(45deg, #1e40af, #1e40af 4px, #2563eb 4px, #2563eb 8px)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      5.6K
                    </div>
                    <div className="bar bar3" style={{
                      background: 'repeating-linear-gradient(45deg, #3b82f6, #3b82f6 4px, #60a5fa 4px, #60a5fa 8px)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      12K
                    </div>
                    <div className="bar bar4" style={{
                      background: 'repeating-linear-gradient(45deg, #93c5fd, #93c5fd 4px, #bfdbfe 4px, #bfdbfe 8px)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      8.1K
                    </div>
                    
                    {/* Growth indicator positioned above 12K bar */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '62%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <div style={{
                        background: '#3b82f6',
                        color: '#fff',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        +73,6%
                      </div>
                      <div style={{
                        fontSize: '10px',
                        color: '#64748b',
                        whiteSpace: 'nowrap'
                      }}>
                        better than last month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Financial Balance - 1/4 ширини */}
            <div className="card financial-balance-card">
              <div className="card-header">
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0' }}>
                  Financial Balance
                </h3>
                <div className="white-circle-icon" style={{ border: '1px solid #1e293b' }}>
                  <ExternalLinkIcon />
                </div>
              </div>

              {/* Легенда */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                {/* Ліва колонка */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                    Total
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></div>
                    Profit Today
                  </div>
                </div>
                {/* Права колонка */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64748b' }}></div>
                    For Week
                  </div>
                </div>
              </div>

              {/* Напівкругла діаграма */}
              <div className="half-circle-chart">
                <div className="half-circle-progress">
                  <div className="half-circle-filled"></div>
                </div>
                <div className="half-circle-text">
                  <div className="percentage">22%</div>
                  <div className="description">from yesterday</div>
                </div>
              </div>


              
              {/* Bottom profit section with rounded background */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                background: '#f1f5f9',
                borderRadius: '20px',
                padding: '12px 20px',
                marginTop: 'auto',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '14px',
                  color: '#1e293b',
                  fontWeight: '500',
                  flex: '1',
                  textAlign: 'left'
                }}>
                  Profit is <strong>22%</strong> More short last week
                </div>
                <div style={{
                  background: '#3b82f6',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  +15%
                </div>
              </div>
            </div>
          </div>
          
          {/* Невидимий елемент для створення відступу 24px від низу */}
          <div style={{ height: '24px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 