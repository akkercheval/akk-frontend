import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const API_BASE = import.meta.env.VITE_API_URL || ''

export default function CookieCutterLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !password) return

    setLoading(true)
    setError(null)

    fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.trim(), password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid username or password.')
        return res.json()
      })
      .then((data) => {
        sessionStorage.setItem('akk-token', data.token)
        setLoggedIn(true)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  if (loggedIn) {
    return (
      <section className="page-card cc-login">
        <h2>Welcome back! 🌰</h2>
        <p>You're logged in. The management tools will be available soon.</p>
        <Link to="/cookie-cutters" className="cc-back-link">
          ← Back to collection
        </Link>
      </section>
    )
  }

  return (
    <section className="page-card cc-login">
      <Link to="/cookie-cutters" className="cc-back-link">
        ← Back to collection
      </Link>
      <h2>Collection Manager</h2>

      <form className="cc-login-form" onSubmit={handleLogin}>
        <label className="cc-login-label">
          Username
          <input
            type="text"
            className="cc-login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </label>
        <label className="cc-login-label">
          Password
          <input
            type="password"
            className="cc-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </label>
        {error && <p className="cc-login-error">{error}</p>}
        <button type="submit" className="cc-login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </section>
  )
}
