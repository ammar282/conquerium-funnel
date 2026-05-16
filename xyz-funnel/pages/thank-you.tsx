import Head from 'next/head'
import { useState } from 'react'

export default function ThankYou(){
  const [form, setForm] = useState({ fullName:'', email:'', whatsapp:'', when:'Now', investment:'Yes', sawElyscents:'No', categories: {perfume:false, beard:false, pain:false} })
  const [errors, setErrors] = useState<{[k:string]:string}>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(){
    const e:any = {}
    if(!form.fullName) e.fullName = 'Required'
    if(!form.email) e.email = 'Required'
    if(!form.whatsapp) e.whatsapp = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev:any){
    ev.preventDefault()
    if(!validate()) return
    const payload = {
      full_name: form.fullName,
      email: form.email,
      whatsapp: form.whatsapp,
      readiness: form.when,
      investment_ready: form.investment,
      saw_elyscents: form.sawElyscents,
      categories: Object.keys(form.categories).filter(k=> (form as any).categories[k])
    }
    // Prepare payload for Supabase insertion (example)
    console.log('Supabase payload:', payload)
    setSubmitted(true)
    setTimeout(()=> setSubmitted(false), 4000)
  }

  return (
    <>
      <Head>
        <title>Book Your 1-on-1 Brand Strategy Call — XYZ</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center py-12">
        <div className="w-full max-w-xl rounded-2xl bg-white/6 p-8">
          <h1 className="text-2xl font-bold">Book Your 1-on-1 Brand Strategy Call</h1>
          <p className="text-purple-200 mt-2">Get personalized guidance and discover how to launch your ecommerce brand in 30–60 days.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm">Full Name</label>
              <input value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} className="w-full mt-1 p-3 rounded-lg bg-black/30" />
              {errors.fullName && <div className="text-rose-400 text-sm">{errors.fullName}</div>}
            </div>
            <div>
              <label className="block text-sm">Email Address</label>
              <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="w-full mt-1 p-3 rounded-lg bg-black/30" />
              {errors.email && <div className="text-rose-400 text-sm">{errors.email}</div>}
            </div>
            <div>
              <label className="block text-sm">WhatsApp Number</label>
              <input value={form.whatsapp} onChange={e=>setForm({...form, whatsapp:e.target.value})} className="w-full mt-1 p-3 rounded-lg bg-black/30" />
              {errors.whatsapp && <div className="text-rose-400 text-sm">{errors.whatsapp}</div>}
            </div>

            <div>
              <p className="text-sm">How soon are you willing to open your ecommerce business?</p>
              <div className="flex gap-3 mt-2">
                {['Now','Later','Never'].map(opt=> (
                  <label key={opt} className={`px-3 py-2 rounded-lg ${form.when===opt? 'bg-gold text-black font-semibold':'bg-black/20'}`}>
                    <input type="radio" name="when" checked={form.when===opt} onChange={()=>setForm({...form, when:opt})} className="hidden" />{opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm">Do you have investment ready?</p>
              <div className="flex gap-3 mt-2">
                {['Yes','No'].map(opt=> (
                  <label key={opt} className={`px-3 py-2 rounded-lg ${form.investment===opt? 'bg-gold text-black font-semibold':'bg-black/20'}`}>
                    <input type="radio" name="invest" checked={form.investment===opt} onChange={()=>setForm({...form, investment:opt})} className="hidden" />{opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm">Have you seen Elyscents perfume brand?</p>
              <div className="flex gap-3 mt-2">
                {['Yes','No'].map(opt=> (
                  <label key={opt} className={`px-3 py-2 rounded-lg ${form.sawElyscents===opt? 'bg-gold text-black font-semibold':'bg-black/20'}`}>
                    <input type="radio" name="ely" checked={form.sawElyscents===opt} onChange={()=>setForm({...form, sawElyscents:opt})} className="hidden" />{opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm">Interested category:</p>
              <div className="flex gap-3 mt-2">
                <label className={`px-3 py-2 rounded-lg ${form.categories.perfume? 'bg-gold text-black':'bg-black/20'}`}>
                  <input type="checkbox" checked={form.categories.perfume} onChange={e=>setForm({...form, categories:{...form.categories, perfume:e.target.checked}})} className="hidden" /> Perfume
                </label>
                <label className={`px-3 py-2 rounded-lg ${form.categories.beard? 'bg-gold text-black':'bg-black/20'}`}>
                  <input type="checkbox" checked={form.categories.beard} onChange={e=>setForm({...form, categories:{...form.categories, beard:e.target.checked}})} className="hidden" /> Beard Oil
                </label>
                <label className={`px-3 py-2 rounded-lg ${form.categories.pain? 'bg-gold text-black':'bg-black/20'}`}>
                  <input type="checkbox" checked={form.categories.pain} onChange={e=>setForm({...form, categories:{...form.categories, pain:e.target.checked}})} className="hidden" /> Pain Relief Oils
                </label>
              </div>
            </div>

            <button type="submit" className="w-full mt-2 py-3 rounded-lg btn-purple font-semibold">Confirm Booking & Lock My Slot</button>
          </form>

          {submitted && <div className="toast">✅ Booking confirmed. We'll be in touch shortly.</div>}
        </div>
      </main>
    </>
  )
}
