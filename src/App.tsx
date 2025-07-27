import React, { useState } from 'react';
import './App.css';

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

function FingoalsDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expensePeriod, setExpensePeriod] = useState('Weekly');
  const [incomePeriod, setIncomePeriod] = useState('30 Days');
  const [balancePeriod, setBalancePeriod] = useState('For Week');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          {/* Мобільне меню кнопка */}
          <div className="mobile-menu-btn">
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

          {/* Логотип */}
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

          {/* Навігаційні вкладки */}
          <div className="nav-tabs">
            {['Dashboard', 'Analytics', 'Invoice', 'Joint Savings', 'Calendar'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                style={{
                  color: activeTab === tab ? '#2563eb' : '#64748b'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Права частина */}
          <div className="profile-info">
            <span style={{ fontSize: '18px', cursor: 'pointer' }}>{Icons.settings}</span>
            <span style={{ fontSize: '18px', cursor: 'pointer' }}>{Icons.notifications}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="avatar">
                MD
              </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                background: '#1e293b',
                borderRadius: '8px',
                color: '#fff'
              }}>
                <span>{Icons.box}</span>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>Overview</span>
                <span style={{ marginLeft: 'auto' }}>{Icons.arrowDown}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span>{Icons.document}</span>
                <span style={{ fontSize: '14px' }}>Legacy Statement</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span>{Icons.chart}</span>
                <span style={{ fontSize: '14px' }}>Financial Projection</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span>{Icons.person}</span>
                <span style={{ fontSize: '14px' }}>Account</span>
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
              <span style={{ 
                background: '#2563eb', 
                color: '#fff',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
                {Icons.plus}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span>{Icons.piggy}</span>
                <span style={{ fontSize: '14px' }}>Married Savings</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                color: '#64748b'
              }}>
                <span>{Icons.house}</span>
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
              <span style={{ fontSize: '24px' }}>{Icons.thumbsUp}</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Unlock full version</div>
                <div style={{ fontSize: '12px', opacity: '0.8' }}>20+ matrixs</div>
              </div>
            </div>
            <button style={{
              background: '#fff',
              color: '#2563eb',
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
              14 day free-trial {Icons.arrow}
            </button>
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
              <select style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                background: '#fff',
                fontSize: '14px'
              }}>
                <option>Default View</option>
              </select>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                background: '#fff',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                {Icons.download} Export
              </button>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #d1d5db',
                background: '#fff',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                {Icons.filter} Filter
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
                <select 
                  value={expensePeriod}
                  onChange={(e) => setExpensePeriod(e.target.value)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '12px'
                  }}
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
                $ 17,3K
              </div>

              {/* Легенда */}
              <div className="legend">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></div>
                  $1-$100
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1e293b' }}></div>
                  $100-$300
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64748b' }}></div>
                  &gt;$300
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f1f5f9' }}></div>
                  No Expenses
                </div>
              </div>

              {/* Категорії */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                <div style={{ fontSize: '14px', color: '#64748b' }}>Groceries</div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>Fashion</div>
                <div style={{ fontSize: '14px', color: '#64748b' }}>Electronics</div>
              </div>

              {/* Сітка днів */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: '4px'
              }}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                  <div key={day} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>{day}</div>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: index % 3 === 0 ? '#2563eb' : index % 3 === 1 ? '#1e293b' : '#64748b'
                    }}></div>
                  </div>
                ))}
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
                    <span style={{ fontSize: '16px', cursor: 'pointer' }}>{Icons.close}</span>
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
              <div className="card-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Income Sources
                </h3>
                <select 
                  value={incomePeriod}
                  onChange={(e) => setIncomePeriod(e.target.value)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '12px'
                  }}
                >
                  <option>30 Days</option>
                  <option>60 Days</option>
                </select>
              </div>
              
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                $ 7,72K
              </div>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                Income Sources Statistic in a month
              </div>

              {/* Легенда */}
              <div className="legend">
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }}></div>
                  Salary
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1e293b' }}></div>
                  Freelance
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#64748b' }}></div>
                  Bonus
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f1f5f9' }}></div>
                  Another job
                </div>
              </div>

              {/* Стовпчаста діаграма */}
              <div style={{
                display: 'flex',
                alignItems: 'end',
                gap: '8px',
                height: '80px',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '20px',
                  height: '60px',
                  background: '#64748b',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '20px',
                  height: '40px',
                  background: '#2563eb',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '20px',
                  height: '80px',
                  background: '#1e40af',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '20px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '4px 4px 0 0'
                }}></div>
              </div>

              <div style={{ fontSize: '14px', color: '#16a34a', fontWeight: '600', marginBottom: '12px' }}>
                +73,6% better than last month
              </div>

              <div className="select-group">
                <select style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                  fontSize: '12px'
                }}>
                  <option>Sort by Month</option>
                </select>
                <select style={{
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid #d1d5db',
                  fontSize: '12px'
                }}>
                  <option>All Sources</option>
                </select>
              </div>
            </div>

            {/* Financial Balance - 1/4 ширини */}
            <div className="card financial-balance-card">
              <div className="card-header">
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0' }}>
                  Financial Balance
                </h3>
                <select 
                  value={balancePeriod}
                  onChange={(e) => setBalancePeriod(e.target.value)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    fontSize: '12px'
                  }}
                >
                  <option>For Week</option>
                  <option>For Month</option>
                </select>
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

function App() {
  return <FingoalsDashboard />;
}

export default App;
