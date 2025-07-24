import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);

  // Hardcoded credentials for demonstration
  const validUsername = 'user@gmail.com';
  const validPassword = 'password123';

  const validateGmail = (email: string) => {
    return /^([a-zA-Z0-9_.+-]+)@gmail\.com$/.test(email);
  };

  const validatePassword = (pwd: string) => {
    return pwd.length >= 6 && /[a-zA-Z]/.test(pwd);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateGmail(username)) {
      setError('Login must be a valid Gmail address.');
      setShake(true);
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters and contain at least one letter.');
      setShake(true);
      return;
    }
    if (username === validUsername && password === validPassword) {
      setError('');
      setSuccess(true);
      setTimeout(() => {
        setLoggedIn(true);
        setSuccess(false);
      }, 1200);
      if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
      } else {
        localStorage.removeItem('rememberedUser');
      }
    } else {
      setError('Invalid username or password');
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

  if (loggedIn) {
    return (
      <div className="google-login-container">
        <div className="success-animation">🎉</div>
        <h2>Welcome, {username}!</h2>
        <button className="logout-btn" onClick={() => setLoggedIn(false)}>Log out</button>
      </div>
    );
  }

  return (
    <div className="google-login-container">
      <form className={`google-login-form${shake ? ' shake' : ''}`} onSubmit={handleSubmit} autoComplete="on">
        <h2 className="google-title">Логін</h2>
        <div className="google-subtitle">Введіть ваші дані</div>
        <input
          type="text"
          placeholder="Email"
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
            aria-label={showPassword ? 'Hide password' : 'Show password'}
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
          <a href="#" className="forgot-password" tabIndex={0}>Забули пароль?</a>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className={success ? 'success' : ''} disabled={success}>
          {success ? 'Успішно!' : 'Далі'}
        </button>
      </form>
    </div>
  );
}

export default App;
