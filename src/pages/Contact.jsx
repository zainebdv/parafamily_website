import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const validate = () => {
    const e = {}
    if (!form.name) e.name = 'Requis'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email valide requis'
    if (!form.subject) e.subject = 'Requis'
    if (!form.message || form.message.length < 10) e.message = 'Message trop court'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSent(true)
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Une question ? Notre équipe est là pour vous aider.</p>
        </div>
      </div>

      <div className="container contact-layout">

        {/* Form */}
        <div className="contact-form-wrapper">
          <h2>Envoyez-nous un message</h2>
          <p className="contact-form-sub">Nous répondons généralement sous 24h les jours ouvrables.</p>

          {sent ? (
            <div className="contact-success card">
              <span>✅</span>
              <h3>Message envoyé !</h3>
              <p>Merci ! Nous vous répondrons à <strong>{form.email}</strong>.</p>
              <button className="btn btn-ghost btn-sm" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>Votre nom</label>
                  <input className={errors.name ? 'error' : ''} value={form.name} onChange={e => update('name', e.target.value)} placeholder="John Doe" />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className={errors.email ? 'error' : ''} value={form.email} onChange={e => update('email', e.target.value)} placeholder="vous@exemple.com" />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Sujet</label>
                <select className={errors.subject ? 'error' : ''} value={form.subject} onChange={e => update('subject', e.target.value)}>
                  <option value="">Choisir un sujet...</option>
                  <option value="order">Commande</option>
                  <option value="product">Question produit</option>
                  <option value="return">Retour / remboursement</option>
                  <option value="pharmacist">Parler à un pharmacien</option>
                  <option value="other">Autre</option>
                </select>
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea className={errors.message ? 'error' : ''} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Comment pouvons-nous vous aider ?" rows={5} />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg">Envoyer →</button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="contact-info">
          <h2>Nous trouver</h2>
          {[
            { icon: '📍', title: 'Adresse',   lines: ['Rue 14 Janvier, Rond point Zarrouk', 'Bizerte, Tunisie'] },
            { icon: '📞', title: 'Téléphone', lines: ['+216 29 438 826', 'Lun–Sam : 9h – 18h'] },
            { icon: '✉️', title: 'Email',     lines: ['para.pharmafamily@gmail.com'] },
          ].map(info => (
            <div key={info.title} className="info-card card">
              <span className="info-icon">{info.icon}</span>
              <div>
                <h4>{info.title}</h4>
                {info.lines.map(line => <p key={line}>{line}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}