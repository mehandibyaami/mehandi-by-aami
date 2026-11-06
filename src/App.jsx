import { useState } from 'react'
import './App.css'
import aamiLogo from './assets/aami-logo.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
 const [booking, setBooking] = useState({

  name: '',
  phone: '',
  service: 'Bridal Mehndi',
  bookingType: 'Home Service',
  eventType: 'Wedding',
  people: 1,
  address: '',
  mapLink: '',
  selectedDesigns: [],
  notes: '',
  date: '',
  time: ''
})
  const services = [
    { name: 'Bridal Mehndi', icon: '👰', price: 'From AED 250' },
    { name: 'Party Mehndi', icon: '🌸', price: 'From AED 50' },
    { name: 'Arabic Mehndi', icon: '🌿', price: 'From AED 40' },
    { name: 'Custom Designs', icon: '✨', price: 'Custom Price' }
  ]

  const designs = [
    { name: 'Bridal Design', style: 'design-one' },
    { name: 'Arabic Design', style: 'design-two' },
    { name: 'Traditional Design', style: 'design-three' }
  ]

  const handleBooking = (e) => {
    e.preventDefault()
    alert('Thank you! Your booking request has been received.')
    setBooking({
      name: '',
      phone: '',
      service: 'Bridal Mehndi',
      place: 'Home Service',
      date: '',
      time: ''
    })
  }

  return (
    <div className="website">
   <header className="navbar">
  <a className="brand" href="#home">
    <img
      src={aamiLogo}
      alt="Mehandi by Aami"
      className="brand-logo"
    />
  </a>

  <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
    <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </nav>

  <a className="nav-book" href="#booking">Book Now</a>
</header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="eyebrow">BEAUTY IN EVERY DETAIL</span>
            <h1>Simple & Elegant<br /><span>Mehndi Designs</span></h1>
            <p>
              Beautiful henna art for your special moments.
              Discover your favourite design and book your appointment.
            </p>
            <a className="primary-btn" href="#booking">Book Your Appointment →</a>
            <div className="hero-note">✿ Bridal · Party · Traditional · Arabic</div>
          </div>

          <div className="hero-art">
            <div className="art-circle">
              <span>🌺</span>
              <div className="art-text">MEHNDI<br />ARTISTRY</div>
              <span>✿ ❀ ✿</span>
            </div>
            <div className="floating-tag">Made with love ♡</div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Our Services</h2>
            <p>Choose the perfect mehndi style for your occasion.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.price}</p>
                <a href="#booking">Book Service →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-heading">
            <span>OUR COLLECTION</span>
            <h2>Mehndi Gallery</h2>
            <p>Explore beautiful designs for every occasion.</p>
          </div>

          <div className="gallery-grid">
            {designs.map((design) => (
              <article className={`gallery-card ${design.style}`} key={design.name}>
                <div className="gallery-art">❀</div>
                <h3>{design.name}</h3>
                <span>Beautiful Henna Art</span>
              </article>
            ))}
          </div>
          <p className="gallery-note">
            More designs will be added to our gallery soon.
          </p>
        </section>

<section className="booking-section" id="booking">      
      <div className="booking-intro">
            <span>LET'S MAKE IT SPECIAL</span>
            <h2>Book Your<br />Mehndi Appointment</h2>
            <p>
              Select your service, choose your preferred date and send
              your booking request.
               </p>
               </div>
          
          <form className="booking-form" onSubmit={handleBooking}>
            <h3>Booking Details</h3>

            <label>Your Name</label>
            <input
              required
              placeholder="Enter your name"
              value={booking.name}
              onChange={e => setBooking({...booking, name: e.target.value})}
            />

            <label>Phone Number</label>
            <input
              required
              type="tel"
              placeholder="Enter phone number"
              value={booking.phone}
              onChange={e => setBooking({...booking, phone: e.target.value})}
            />

           <label>Select Service</label>
<select
  value={booking.service}
  onChange={e => setBooking({...booking, service: e.target.value})}
>
  {services.map(s => (
    <option key={s.name}>{s.name}</option>
  ))}
</select>

<label>Event Type</label>
<select
  value={booking.eventType}
  onChange={e => setBooking({...booking, eventType: e.target.value})}
>
  <option>Wedding</option>
  <option>Engagement</option>
  <option>Party</option>
  <option>Birthday</option>
  <option>Other</option>
</select>

<label>Number of People</label>
<input
  type="number"
  min="1"
  required
  value={booking.people}
  onChange={e => setBooking({...booking, people: e.target.value})}
/>
<label>Booking Type</label>
<select
  value={booking.bookingType}
  onChange={e =>
    setBooking({...booking, bookingType: e.target.value})
  }
>
  <option value="Home Service">Home Service</option>
  <option value="Studio Appointment">Studio Appointment</option>
</select>
{booking.bookingType === 'Home Service' && (
  <>
    <label>Customer Address</label>
    <textarea
      required
      placeholder="Enter your full address"
      value={booking.address}
      onChange={e =>
        setBooking({...booking, address: e.target.value})
      }
    />

    <label>Google Maps Location Link</label>
    <input
      type="url"
      required
      placeholder="Paste Google Maps link"
      value={booking.mapLink}
      onChange={e =>
        setBooking({...booking, mapLink: e.target.value})
      }
    />
  </>
)}

<label>Select Mehndi Photos</label>

<button
  type="button"
  className="open-gallery-btn"
  onClick={() => setShowGallery(true)}
>
  <span>🖼️</span>
  Select Photos from Gallery
</button>

<div className="selected-photos">
  {booking.selectedDesigns.map(name => (
    <span key={name}>✓ {name}</span>
  ))}
</div>

{showGallery && (
  <div className="gallery-popup">
    <div className="gallery-popup-content">
      <div className="gallery-popup-header">
        <h3>Choose Mehndi Designs</h3>
        <button
          type="button"
          onClick={() => setShowGallery(false)}
        >
          ✕
        </button>
      </div>

      <div className="popup-designs">
        {designs.map(design => (
          <button
            type="button"
            key={design.name}
            className={
              booking.selectedDesigns.includes(design.name)
                ? 'popup-design active'
                : 'popup-design'
            }
            onClick={() => {
              const selected = booking.selectedDesigns.includes(design.name)
                ? booking.selectedDesigns.filter(x => x !== design.name)
                : [...booking.selectedDesigns, design.name]

              setBooking({...booking, selectedDesigns: selected})
            }}
          >
            <span>🌸</span>
            <strong>{design.name}</strong>
            {booking.selectedDesigns.includes(design.name) && (
              <small>✓ Selected</small>
            )}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="submit-btn"
        onClick={() => setShowGallery(false)}
      >
        Confirm Selection
      </button>
    </div>
  </div>
)}

<label>Additional Notes</label>
<textarea
  placeholder="Any special instructions..."
  value={booking.notes}
  onChange={e => setBooking({...booking, notes: e.target.value})}
/>
            <div className="form-row">
              <div>
                <label>Preferred Date</label>
                <input
                  required
                  type="date"
                  value={booking.date}
                  onChange={e => setBooking({...booking, date: e.target.value})}
                />
              </div>
              <div>
                <label>Preferred Time</label>
                <input
                  required
                  type="time"
                  value={booking.time}
                  onChange={e => setBooking({...booking, time: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Send Booking Request →
            </button>
            <small>Booking will be confirmed after approval.</small>
          </form>
        </section>
      </main>

       <footer className="footer" id="contact">

  <div className="footer-content">

    <div className="footer-about">
      <h2>✿ Mehandi_by_Aami</h2>
      <p>Beautiful Mehndi Art for Your Special Moments.</p>
      <p>Contact us for appointments and enquiries.</p>
    </div>

    <div className="footer-contact">
      <h2>☎ Contact Us</h2>
      <p>
        ☎ <a href="tel:+918129539128">+91 8129539128</a>
      </p>
    </div>

    <div className="footer-social">
      <h2>◎ Follow Us</h2>
      <a
        href="https://www.instagram.com/mehandi_by_aami/"
        target="_blank"
        rel="noreferrer"
      >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
</svg>
{" "}
@mehandi_by_aami ↗
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Mehandi_by_Aami. All rights reserved.
  </div>

</footer>
    </div>
  )
}

export default App