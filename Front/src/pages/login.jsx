import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authcontext'
import '../styles/login.css'

export default function Login() {
  const { login, loading } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState(null)

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const validate = () => {
    const e = {}
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setApiError(null)
    if (!validate()) return
    try {
      await login(form.email, form.password)
      navigate('/')
    } catch (err) {
      setApiError(err.message)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <div className="auth-header">
          <span className="auth-logo">💊</span>
          <h1>Welcome back</h1>
          <p>Sign in to your ParaPharma account</p>
        </div>

        {apiError && (
          <div className="api-error">{apiError}</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className={errors.email ? 'error' : ''}
              value={form.email}
              onChange={e => update('email', e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Password</label>
              <Link to="#" className="forgot-link">Forgot password?</Link>
            </div>
            <input
              type="password"
              className={errors.password ? 'error' : ''}
              value={form.password}
              onChange={e => update('password', e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
            {errors.password && <span className="error-msg">{errors.password}</span>}
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              id="remember"
              checked={form.remember}
              onChange={e => update('remember', e.target.checked)}
            />
            <label htmlFor="remember">Remember me for 30 days</label>
          </div>

          <button type="submit" className="btn btn-primary btn-lg auth-submit" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <div className="auth-divider"><span>or</span></div>

        <button className="btn btn-ghost social-btn">
          <span>🔵</span> Continue with Google
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Create one →</Link>
        </p>
      </div>
    </div>
  )
}
