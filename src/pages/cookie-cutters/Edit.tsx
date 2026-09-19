import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Edit.css'

interface CookieCutterForm {
  name: string
  lengthInches: string
  widthInches: string
  type: string
  comments: string
  dateAcquired: string
  imageUrl: string
}

const API_BASE = import.meta.env.VITE_API_URL || ''

export default function CookieCutterEdit() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const isNew = id === 'new'

  const [form, setForm] = useState<CookieCutterForm>({
    name: '',
    lengthInches: '',
    widthInches: '',
    type: '',
    comments: '',
    dateAcquired: '',
    imageUrl: '',
  })
  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const token = sessionStorage.getItem('akk-token')

  useEffect(() => {
    if (isNew) return

    fetch(`${API_BASE}/api/cookiecutters/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Could not load cookie cutter')
        return res.json()
      })
      .then((data) => {
        setForm({
          name: data.name || '',
          lengthInches: data.lengthInches?.toString() || '',
          widthInches: data.widthInches?.toString() || '',
          type: data.type || '',
          comments: data.comments || '',
          dateAcquired: data.dateAcquired || '',
          imageUrl: data.imageUrl || '',
        })
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id, isNew])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.type.trim()) {
      setError('Name and Type are required.')
      return
    }

    setSaving(true)
    setError(null)

    const body = {
      name: form.name.trim(),
      lengthInches: form.lengthInches ? parseFloat(form.lengthInches) : null,
      widthInches: form.widthInches ? parseFloat(form.widthInches) : null,
      type: form.type.trim(),
      comments: form.comments.trim() || null,
      dateAcquired: form.dateAcquired || null,
      imageUrl: form.imageUrl.trim() || null,
    }

    const url = isNew
      ? `${API_BASE}/api/cookiecutters`
      : `${API_BASE}/api/cookiecutters/${id}`

    const method = isNew ? 'POST' : 'PUT'

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Save failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        navigate(`/cookie-cutters/${data.cookieCutterId}`)
      })
      .catch((err) => {
        setError(err.message)
        setSaving(false)
      })
  }

  if (!token) {
    return (
      <section className="page-card cc-edit">
        <p className="cc-error">You must be logged in to manage the collection.</p>
        <Link to="/cookie-cutters/login" className="cc-back-link">
          Go to login
        </Link>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="page-card cc-edit">
        <p className="cc-status">Loading...</p>
      </section>
    )
  }

  return (
    <section className="page-card cc-edit">
      <Link
        to={isNew ? '/cookie-cutters/browse' : `/cookie-cutters/${id}`}
        className="cc-back-link"
      >
        ← {isNew ? 'Back to browse' : 'Back to details'}
      </Link>

      <h2>{isNew ? 'Add Cookie Cutter' : `Edit: ${form.name}`}</h2>

      <form className="cc-edit-form" onSubmit={handleSubmit}>
        <label className="cc-edit-label">
          Name *
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="cc-edit-input"
            maxLength={100}
            required
          />
        </label>

        <label className="cc-edit-label">
          Type *
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="cc-edit-input"
            maxLength={30}
            placeholder="e.g. Metal, Plastic, 3D Printed"
            required
          />
        </label>

        <div className="cc-edit-row">
          <label className="cc-edit-label">
            Length (inches)
            <input
              type="number"
              name="lengthInches"
              value={form.lengthInches}
              onChange={handleChange}
              className="cc-edit-input"
              step="0.25"
              min="0"
            />
          </label>

          <label className="cc-edit-label">
            Width (inches)
            <input
              type="number"
              name="widthInches"
              value={form.widthInches}
              onChange={handleChange}
              className="cc-edit-input"
              step="0.25"
              min="0"
            />
          </label>
        </div>

        <label className="cc-edit-label">
          Date Acquired
          <input
            type="date"
            name="dateAcquired"
            value={form.dateAcquired}
            onChange={handleChange}
            className="cc-edit-input"
          />
        </label>

        <label className="cc-edit-label">
          Image Filename
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="cc-edit-input"
            placeholder="e.g. cat-sitting.jpg"
            maxLength={500}
          />
          <span className="cc-edit-hint">
            Filename from the akk-cookie-cutter-images repository
          </span>
        </label>

        <label className="cc-edit-label">
          Comments
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleChange}
            className="cc-edit-textarea"
            rows={4}
          />
        </label>

        {error && <p className="cc-edit-error">{error}</p>}

        <button type="submit" className="cc-btn cc-btn-save" disabled={saving}>
          {saving ? 'Saving...' : isNew ? 'Add to Collection' : 'Save Changes'}
        </button>
      </form>
    </section>
  )
}
