import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './App.css';

const incomeData = [
  { source: 'Salary', amount: 3200 },
  { source: 'Freelance', amount: 1200 },
  { source: 'Investments', amount: 600 },
  { source: 'Other', amount: 200 },
];

const expensesData = [
  { category: 'Rent', value: 1200 },
  { category: 'Food', value: 400 },
  { category: 'Transport', value: 150 },
  { category: 'Entertainment', value: 100 },
  { category: 'Other', value: 80 },
];

const COLORS = ['#2563eb', '#60a5fa', '#1e40af', '#38bdf8', '#6366f1'];

function BalanceCard() {
  const totalIncome = incomeData.reduce((sum, i) => sum + i.amount, 0);
  const totalExpenses = expensesData.reduce((sum, e) => sum + e.value, 0);
  const balance = totalIncome - totalExpenses;
  // Generate random balances for USDT and BTC wallets
  const usdtBalance = (Math.random() * 1000).toFixed(2);
  const btcBalance = (Math.random() * 0.5).toFixed(4);
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', padding: 24, minWidth: 220, flex: 1 }}>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 8 }}>Баланс <span style={{ fontWeight: 400, color: '#64748b' }}>(після податку)</span></div>
      <div style={{ fontSize: 32, fontWeight: 700, color: balance >= 0 ? '#16a34a' : '#ef4444' }}>{balance >= 0 ? '+' : ''}${balance.toLocaleString()}</div>
      <div style={{ color: '#64748b', fontSize: 15, marginTop: 8 }}>Загальний дохід: <b>${totalIncome.toLocaleString()}</b></div>
      <div style={{ color: '#64748b', fontSize: 15 }}>Загальні витрати: <b>${totalExpenses.toLocaleString()}</b></div>
      <div style={{ color: '#2563eb', fontWeight: 500, marginTop: 18, marginBottom: 4 }}>Гаманці</div>
      <div style={{ color: '#64748b', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="usdt">💵</span> USDT: <b>{usdtBalance}</b>
      </div>
      <div style={{ color: '#64748b', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="btc">₿</span> BTC: <b>{btcBalance}</b>
      </div>
    </div>
  );
}

function IncomeSourcesCard() {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', padding: 24, minWidth: 320, flex: 2, display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 8 }}>Джерела доходу</div>
      <div style={{ width: '100%', height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={incomeData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <XAxis dataKey="source" tick={{ fontSize: 13 }} />
            <YAxis tick={{ fontSize: 13 }} />
            <Tooltip />
            <Bar dataKey="amount" fill="#2563eb">
              {incomeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ color: '#64748b', fontSize: 15, marginTop: 8 }}>
        Загальна кількість джерел: <b>{incomeData.length}</b>
      </div>
    </div>
  );
}

function ExpensesCard() {
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', padding: 24, minWidth: 320, flex: 2, display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 8 }}>Витрати за категоріями</div>
      <div style={{ width: '100%', height: 180 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={expensesData} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={60} label>
              {expensesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ color: '#64748b', fontSize: 15, marginTop: 8 }}>
        Загальна кількість категорій: <b>{expensesData.length}</b>
      </div>
    </div>
  );
}

function AnalyticsCard() {
  const totalIncome = incomeData.reduce((sum, i) => sum + i.amount, 0);
  const totalExpenses = expensesData.reduce((sum, e) => sum + e.value, 0);
  const percentSaved = totalIncome ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100) : 0;
  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', padding: 24, minWidth: 220, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 8 }}>Аналітика</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#1e40af', marginBottom: 8 }}>{percentSaved}%</div>
      <div style={{ color: '#64748b', fontSize: 15, textAlign: 'center' }}>з вашого доходу збережено за місяць</div>
      <div style={{ color: '#64748b', fontSize: 15, textAlign: 'center', marginTop: 8 }}>Витрати / Дохід: <b>{Math.round((totalExpenses / totalIncome) * 100)}%</b></div>
    </div>
  );
}

function CalendarIncomeCard() {
  // Generate fake income data for each day of the current month
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // For demo: random income between 0 and 200 for each day
  const dailyIncome = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    income: Math.round(Math.random() * 200),
    expenses: [
      { category: 'Rent', value: Math.round(Math.random() * 50) },
      { category: 'Food', value: Math.round(Math.random() * 30) },
      { category: 'Transport', value: Math.round(Math.random() * 20) },
      { category: 'Entertainment', value: Math.round(Math.random() * 15) },
      { category: 'Other', value: Math.round(Math.random() * 10) },
    ],
  }));
  // Get the weekday of the 1st day (0=Sun, 1=Mon...)
  const firstDayWeekday = new Date(year, month, 1).getDay();
  const weekDays = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  // Build calendar grid: array of weeks, each week is array of days (or null)
  const weeks: (typeof dailyIncome[number] | null)[][] = [];
  let week: (typeof dailyIncome[number] | null)[] = Array(firstDayWeekday).fill(null);
  dailyIncome.forEach((d) => {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', padding: '2rem', maxWidth: 1200, margin: '32px auto 0 auto', width: '100%' }}>
      <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 16, fontSize: 18 }}>Календар доходу (липень {year})</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, marginBottom: 8 }}>
        {weekDays.map((wd) => (
          <div key={wd} style={{ color: '#64748b', fontWeight: 600, textAlign: 'center', fontSize: 15 }}>{wd}</div>
        ))}
      </div>
      {weeks.map((week, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, marginBottom: 4 }}>
          {week.map((d, j) =>
            d ? (
              <div key={j} className="calendar-day" style={{ background: '#2563eb', color: '#fff', borderRadius: 8, minHeight: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 15, position: 'relative' }}>
                <div style={{ fontSize: 17, fontWeight: 700, textAlign: 'center', width: '100%' }}>{d.day}</div>
                <div style={{ fontSize: 15 }}>{d.income > 0 ? `+$${d.income}` : '-'}</div>
                <div className="calendar-tooltip">
                  <div style={{ fontWeight: 600, color: '#2563eb', marginBottom: 4 }}>Витрати</div>
                  {d.expenses.map((e) => (
                    <div key={e.category} style={{ color: '#64748b', fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{e.category}</span>
                      <span>${e.value}</span>
                    </div>
                  ))}
                  <div style={{ color: '#1e40af', fontWeight: 500, marginTop: 6, fontSize: 15 }}>
                    Загальна сума: ${d.expenses.reduce((sum, e) => sum + e.value, 0)}
                  </div>
                </div>
              </div>
            ) : (
              <div key={j} />
            )
          )}
        </div>
      ))}
    </div>
  );
}

function CreateGoalCard() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [goals, setGoals] = useState<{ name: string; desc: string; amount: number }[]>([]);
  const [error, setError] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !amount.trim() || isNaN(Number(amount))) {
      setError('Будь ласка, введіть назву та валідну суму.');
      return;
    }
    setGoals([
      ...goals,
      { name: name.trim(), desc: desc.trim(), amount: Number(amount) },
    ]);
    setName('');
    setDesc('');
    setAmount('');
    setError('');
  };

  return (
    <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', margin: '32px 0 0 0', width: '100%', padding: '2rem' }}>
      <div style={{ color: '#2563eb', fontWeight: 500, fontSize: 18, marginBottom: 16 }}>Створити ціль</div>
      <form onSubmit={handleCreate} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end', marginBottom: 16 }}>
        <div style={{ flex: 1, minWidth: 180, maxWidth: 300, marginBottom: 12 }}>
          <label style={{ color: '#64748b', fontSize: 15, fontWeight: 500 }}>Назва</label>
          <input value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #dbeafe', fontSize: 15, marginTop: 4 }} placeholder="Моя ціль" />
        </div>
        <div style={{ flex: 2, minWidth: 220, maxWidth: 400, marginBottom: 12 }}>
          <label style={{ color: '#64748b', fontSize: 15, fontWeight: 500 }}>Опис</label>
          <input value={desc} onChange={e => setDesc(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #dbeafe', fontSize: 15, marginTop: 4 }} placeholder="Короткий опис" />
        </div>
        <div style={{ width: 120, minWidth: 100, maxWidth: 160, marginBottom: 12 }}>
          <label style={{ color: '#64748b', fontSize: 15, fontWeight: 500 }}>Сума</label>
          <input value={amount} onChange={e => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} style={{ width: '100%', padding: '10px', borderRadius: 6, border: '1px solid #dbeafe', fontSize: 15, marginTop: 4 }} placeholder="0" />
        </div>
        <div style={{ flexBasis: '100%', maxWidth: '100%' }} />
        <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 24px', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginTop: 22, height: 44, minWidth: 120 }}>Створити</button>
      </form>
      {error && <div style={{ color: '#ef4444', marginBottom: 12 }}>{error}</div>}
      {goals.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ color: '#2563eb', fontWeight: 500, fontSize: 16, marginBottom: 8 }}>Мої цілі</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {goals.map((g, i) => (
              <li key={i} style={{ background: '#e0e7ef', borderRadius: 8, padding: '12px 16px', marginBottom: 8, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ fontWeight: 600, color: '#1e40af', fontSize: 16 }}>{i + 1}. {g.name}</div>
                {g.desc && <div style={{ color: '#64748b', fontSize: 14 }}>{g.desc}</div>}
                <div style={{ color: '#2563eb', fontWeight: 700, fontSize: 15 }}>Сума: ${g.amount}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Dashboard({ username, onLogout }: { username: string; onLogout: () => void }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f1f5fb' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '2rem 2rem 1.5rem 2rem', borderBottom: '1px solid #e0e0e0', background: '#fff' }}>
        {/* Removed YoWallet title from topbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontWeight: 500, color: '#2563eb' }}>{username}</div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>
            {username.charAt(0).toUpperCase()}
          </div>
          <button onClick={onLogout} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 16px', fontWeight: 700, cursor: 'pointer', marginLeft: 16 }}>
            Вийти
          </button>
        </div>
      </div>
      {/* Greeting */}
      <div style={{ maxWidth: 1200, margin: '0 auto', marginTop: 32, marginBottom: 8, paddingLeft: 8, paddingRight: 8 }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#2563eb', letterSpacing: 0.5, marginBottom: 8 }}>Ласкаво просимо, Діма!</div>
      </div>
      {/* Main content: grid of cards in a wrapper */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr 1fr', gap: 24, marginTop: 32, alignItems: 'stretch' }}>
          <BalanceCard />
          <IncomeSourcesCard />
          <ExpensesCard />
          <AnalyticsCard />
        </div>
        <CalendarIncomeCard />
        <CreateGoalCard />
      </div>
    </div>
  );
}

function Login({ onLogin }: { onLogin: (username: string, rememberMe: boolean) => void }) {
  // Hardcoded credentials for demonstration
  const validUsername = 'user@gmail.com';
  const validPassword = 'password123';

  const [username, setUsername] = useState(validUsername);
  const [password, setPassword] = useState(validPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const validateGmail = (email: string) => {
    return /^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(email);
  };

  const validatePassword = (pwd: string) => {
    return pwd.length >= 6 && /[a-zA-Z]/.test(pwd);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateGmail(username)) {
      setError('Логін повинен бути валідним адресою Gmail.');
      setShake(true);
      return;
    }
    if (!validatePassword(password)) {
      setError('Пароль повинен містити щонайменше 6 символів та містити хоча б одну літеру.');
      setShake(true);
      return;
    }
    if (username === validUsername && password === validPassword) {
      setError('');
      setSuccess(true);
      setTimeout(() => {
        onLogin(username, rememberMe);
        setSuccess(false);
        navigate('/home');
      }, 1200);
    } else {
      setError('Неправильний логін або пароль');
      setShake(true);
    }
  };

  // Remove shake after animation
  React.useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shake]);

  React.useEffect(() => {
    // Auto-fill if remembered
    const remembered = localStorage.getItem('rememberedUser');
    if (remembered) {
      setUsername(remembered);
      setRememberMe(true);
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5fb' }}>
      <div>
        <span style={{ fontSize: 32, fontWeight: 700, color: '#2563eb', letterSpacing: 1, marginBottom: 18, textAlign: 'center', width: '100%', display: 'block' }}>YoWallet</span>
        <div className="google-login-form" style={{ maxWidth: 420, width: '100%', padding: '2.5rem 2.5rem 2rem 2.5rem', borderRadius: 12, boxShadow: '0 2px 8px #dbeafe', border: '1px solid #dbeafe', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form style={{ width: '100%' }} className={shake ? 'google-login-form shake' : 'google-login-form'} onSubmit={handleSubmit} autoComplete="on">
            <div className="google-subtitle" style={{ textAlign: 'center' }}>Введіть ваші дані</div>
            <input
              type="text"
              placeholder="Електронна пошта"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? 'Сховати пароль' : 'Показати пароль'}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            <div className="form-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe((v) => !v)}
                />
                Запам'ятати мене
              </label>
              {/* Removed invalid anchor for accessibility */}
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit" className={success ? 'success' : ''} disabled={success} style={{ width: '100%' }}>
              {success ? 'Успішно!' : 'Далі'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    // Check if remembered user exists
    return Boolean(localStorage.getItem('rememberedUser'));
  });
  const [username, setUsername] = useState(() => localStorage.getItem('rememberedUser') || '');

  const handleLogin = (user: string, remember: boolean) => {
    setLoggedIn(true);
    setUsername(user);
    if (remember) {
      localStorage.setItem('rememberedUser', user);
    } else {
      localStorage.removeItem('rememberedUser');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    localStorage.removeItem('rememberedUser');
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={loggedIn ? <Dashboard username={username} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
