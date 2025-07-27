import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 6;
    const hasLetter = /[a-zA-Z]/.test(password);
    return hasMinLength && hasLetter;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    // Проверка email
    if (!email) {
      newErrors.email = 'Email обов\'язковий';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Введіть коректний email';
    }
    
    // Проверка пароля
    if (!password) {
      newErrors.password = 'Пароль обов\'язковий';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Пароль має бути мінімум 6 символів і містити хоча б одну літеру';
    }
    
    if (Object.keys(newErrors).length === 0) {
      // Все валидно - перенаправляем на /home
      navigate('/home');
    } else {
      setErrors(newErrors);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <div style={{
            background: '#2563eb',
            color: '#fff',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            F
          </div>
          <span style={{ 
            fontSize: '30px', 
            fontWeight: '600', 
            color: '#1e293b'
          }}>
            Fingoals
          </span>
        </div>
        <p className="login-subtitle">Введіть ваші дані</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors({...errors, email: ''});
                }
              }}
              className={`login-input ${errors.email ? 'error' : ''}`}
              placeholder="Введіть ваш email"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors({...errors, password: ''});
                }
              }}
              className={`login-input ${errors.password ? 'error' : ''}`}
              placeholder="Введіть ваш пароль"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle"
            >
              👁️
            </button>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Запам'ятати мене</span>
            </label>
            <a href="#" className="forgot-password">Забули пароль?</a>
          </div>
          
          <button type="submit" className="login-button">
            Далі
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage; 