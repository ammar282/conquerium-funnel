import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Step1(){
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Become a Brand Owner in 40 Days — XYZ</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-start py-16">
        <div className="container-max">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Become a Brand Owner in 40 Days
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{color:'var(--gold)'}}>
              Even Without a Product
            </h2>
            <p className="mt-4 text-lg text-purple-100 max-w-3xl mx-auto">
              We help beginners launch their own perfume, beard oil, skincare, or health brands — with packaging, store, design, and ads — all done-for-you.
            </p>

            <div className="mt-8 mx-auto max-w-3xl relative">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-black/30">
                <div className="relative pb-[56.25%]">
                  <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/nTqJnVJilK4?rel=0`} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                </div>
              </div>
            </div>
          </section>

          <section className="card mb-10">
            <h3 className="text-2xl font-semibold mb-2">🟣 What We’ll Do For You — In Just 40 Days</h3>
            <p className="text-purple-200 mb-4">We don’t just design logos or sell courses. We build your entire brand from scratch, ready to sell.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Custom Brand Name & Logo</li>
                <li>• Premium Packaging & Label Design</li>
                <li>• Product Bottles with Printing</li>
                <li>• Shopify Store (Fully Built)</li>
              </ul>
              <ul className="space-y-2">
                <li>• Product Photography + 1 Launch Ad Video</li>
                <li>• Social Media Account Setup</li>
                <li>• Facebook Ad Manager + Pixel Integration</li>
                <li>• COD Courier + Payment Setup</li>
                <li>• 1-on-1 Guidance Till Launch</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold">Our Success Story: Elyscents</h3>
            <p className="text-purple-200">Using the same system, Elyscents grew into one of Pakistan’s leading online perfume brands.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 text-center">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-purple-200">Daily Orders</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold">5 Crore+</div>
                <div className="text-sm text-purple-200">Monthly Revenue</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold">150k+</div>
                <div className="text-sm text-purple-200">Happy Customers</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold">2 Years</div>
                <div className="text-sm text-purple-200">to Scale</div>
              </div>
            </div>
            <p className="italic mt-4">"(Testimonial placeholder) — Founder, Elyscents"</p>
          </section>

          <section className="mb-10">
            <h3 className="text-2xl font-semibold">💼 Choose Your Brand Launch Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold">Starter Package</h4>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>Service Charges: Rs. 250,000</li>
                  <li>Product Cost: Rs. 100,000</li>
                  <li>100 perfumes @ Rs. 1,000</li>
                </ul>
                <p className="mt-3 text-sm text-purple-200">Perfect for testing the market with lower investment</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-bold">Growth Package</h4>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>Service Charges: Rs. 0</li>
                  <li>MOQ: 1,000 units</li>
                </ul>
                <p className="mt-3 text-sm text-purple-200">Best value for serious entrepreneurs</p>
              </div>
            </div>
          </section>

          <section className="text-center mb-10">
            <h3 className="text-2xl font-semibold">🚀 Get Started — Book Your Free Strategy Call</h3>
            <p className="text-purple-200 mt-2">Launching 20–30 brands every month</p>
            <div className="mt-4">
              <button onClick={()=>router.push('/thank-you')} className="btn-gold px-6 py-3 rounded-full font-semibold">
                🎯 Get My Free Strategy Call
              </button>
              <p className="mt-2 text-sm text-purple-200">✅ No spam. Your data is 100% secure.</p>
            </div>
          </section>

          <section className="card mb-10">
            <h4 className="text-lg font-semibold">Transparent Pricing — No Hidden Charges</h4>
            <div className="overflow-auto mt-4">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-purple-200">
                    <th>Feature</th>
                    <th>Starter</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody className="text-sm mt-2">
                  <tr>
                    <td>Brand Name & Logo</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Packaging & Label</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>MOQ</td>
                    <td>100</td>
                    <td>1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <footer className="text-center text-sm text-purple-200 mt-8">
            <p>You're not just launching a product — you're stepping into a new identity: Brand Owner.</p>
            <p className="mt-1">Your vision + our team = fully launched business in 40–60 days. Limited to 20 clients per month.</p>
          </footer>
        </div>
      </main>
    </>
  )
}
