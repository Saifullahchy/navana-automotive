// Home page — hero, search, categories, featured cars, why, showrooms, CTA (standalone version)

const HERO_IMAGES = {
  city:   window.__resources?.heroCity || "",
  studio: window.__resources?.heroStudio || "",
  road:   window.__resources?.heroRoad || ""
};

const HomePage = ({ setPage, t, setTweak, openCar }) => {
  const heroImg = HERO_IMAGES[t.heroImage] || HERO_IMAGES.city;

  return (
    <React.Fragment>
      {/* ─── Cinematic Hero ─── */}
      <section className="hero-cine">
        <div className="bg" style={{ backgroundImage: `url('${heroImg}')` }} />
        <div className="scrim" />

        <div className="inner">
          <div className="top-row">
            <div className="years-badge" style={{ textAlign: "center", padding: "0px 18px", borderWidth: "0px 1px 1px", gap: "5px", justifyContent: "flex-start", width: "250px", height: "2px", flexDirection: "row", alignItems: "center" }}>
              <b style={{ textAlign: "center", fontWeight: "500", fontFamily: "Times" }}></b>
              <span><br /></span>
            </div>
            <button className="watch-pill">
              <span>Watch the Showcase</span>
              <span className="play">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="white"><path d="M2 1l7 4-7 4z" /></svg>
              </span>
            </button>
          </div>

          <div className="center">
            <div className="eye-ribbon">IGNITE&nbsp;LEGACY · NAVANA CERTIFIED</div>
            <h1 className="serif">
              The Premiere of <em>Japanese Domestic</em> Models, certified by Navana.
            </h1>
            <p className="lede2">
              Carefully chosen. Professionally inspected. Warranted by Navana.
              Discover 240+ certified JDM vehicles at our Dhaka and Chittagong showrooms.
            </p>
            <div className="cta-row">
              <button className="btn-pill" onClick={() => setPage("products")}>
                Browse Inventory
                <span className="arrow-c"><Icon name="arrow" size={14} stroke="white" /></span>
              </button>
              <button className="btn-ghost-pill">
                <Icon name="phone" size={14} /> Book a Test Drive
              </button>
            </div>
          </div>

          <div className="ticker">
            <div className="ti"><b>240<span className="accent">+</span></b><span>Certified Vehicles</span></div>
            <div className="ti"><b>3<span style={{ fontSize: 16, marginLeft: 4 }}>YRS</span></b><span>HV Battery Warranty</span></div>
            <div className="ti"><b>15,000<span style={{ fontSize: 16, marginLeft: 4 }}>KM</span></b><span>Component Warranty</span></div>
            <div className="ti"><b>02</b><span>Showrooms Nationwide</span></div>
            <div className="scroll-hint">
              <span>Scroll</span>
              <span className="scroll-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating search card */}
      <div className="hero-search-wrap">
        <div className="hero-search-card">
          <div className="sc-eye">
            <span className="lbl">Find your</span>
            <span className="val">Certified JDM</span>
          </div>
          <div className="sc-field">
            <label>Category</label>
            <select defaultValue="">
              <option value="">All categories</option>
              {CATEGORIES.map((c) => <option key={c.id}>{c.id}</option>)}
            </select>
          </div>
          <div className="sc-field">
            <label>Brand</label>
            <select defaultValue="">
              <option value="">All brands</option>
              {BRANDS.map((b) => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="sc-field">
            <label>Showroom</label>
            <select defaultValue="">
              <option value="">All locations</option>
              {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div className="sc-field">
            <label>Budget (Lakh BDT)</label>
            <input type="text" placeholder="e.g. 20 — 50" />
          </div>
          <button className="sc-go" onClick={() => setPage("products")}>
            Search
            <span className="arrow-c"><Icon name="arrow" size={14} stroke="white" /></span>
          </button>
        </div>
      </div>

      {/* Brand strip */}
      <div className="brand-strip">
        <div className="brand-row">
          {["TOYOTA", "HONDA", "NISSAN", "MAZDA", "SUZUKI", "LEXUS", "MITSUBISHI"].map((b) =>
          <span key={b}>{b}</span>
          )}
        </div>
      </div>

      {/* Categories */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Browse by Category</div>
            <h2>Find the right body style.</h2>
          </div>
          <p>From efficient hatchbacks to executive vans — every category carries the Navana certification seal.</p>
        </div>
        <div className="category-grid">
          {CATEGORIES.map((c) =>
          <div key={c.id} className="cat-card" onClick={() => setPage("products")}>
              <div className="cat-icon"><Icon name={c.icon} size={20} /></div>
              <b>{c.id}</b>
              <span>{c.count} vehicles available</span>
            </div>
          )}
        </div>
      </section>

      {/* Featured cars */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Latest Arrivals</div>
            <h2>Hand-picked JDM vehicles.</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => setPage("products")}>
            View all 240+ vehicles <Icon name="arrow" size={14} />
          </button>
        </div>
        <div className="featured-grid">
          {CARS.slice(0, 6).map((car) =>
          <CarCard key={car.id} car={car} dark={false} onView={openCar} />
          )}
        </div>
      </section>

      {/* Why Navana — value props */}
      <section className="section" style={{ background: "var(--white)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Why Navana Certified</div>
            <h2>Buy with confidence.</h2>
          </div>
          <p>Every Navana certified vehicle goes through a multi-point inspection and comes with manufacturer-grade warranty.</p>
        </div>
        <div className="value-grid">
          {[
          { icon: "battery", title: "Up to 3 Yrs HV Warranty", body: "Hybrid battery coverage on every certified hybrid in our inventory." },
          { icon: "shield", title: "15,000 km Component Warranty", body: "Genuine parts and 15K km coverage from the day of delivery." },
          { icon: "tools", title: "3 Complimentary Services", body: "Free scheduled servicing at any Navana service center." },
          { icon: "handshake", title: "Reliable After-Sales", body: "Hotline 16720 — talk to a real Navana adviser, not a script." }].
          map((v) =>
          <div key={v.title} className="value-card">
              <div className="v-icon"><Icon name={v.icon} size={20} /></div>
              <b>{v.title}</b>
              <p>{v.body}</p>
            </div>
          )}
        </div>
      </section>

      {/* Showrooms */}
      <section className="section showroom-section">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--navana-green)" }}>Visit Us</div>
            <h2 style={{ color: "var(--ivory)" }}>Two showrooms, one standard.</h2>
          </div>
          <p style={{ color: "rgba(247,245,240,.65)" }}>Schedule a test drive or walk in — our advisers are ready to help you ignite your legacy.</p>
        </div>
        <div className="showroom-grid">
          {[
          { city: "DHK · 01", name: "Dhaka Showroom", addr: "205–207, Tejgaon Industrial Area, Dhaka 1208", hrs: "Sat–Thu · 9:00–8:00", phone: "+880 16720" },
          { city: "CTG · 02", name: "Chittagong Showroom", addr: "A H Paragon, 282, CDA Avenue, Muradpur, Chittagong", hrs: "Sat–Thu · 9:00–7:30", phone: "+880 16720" },
          { city: "SYL · 03", name: "Sylhet (Opening Soon)", addr: "Zindabazar, Sylhet · expected Q4 2026", hrs: "Coming soon", phone: "+880 16720" }].
          map((s) =>
          <div key={s.name} className="showroom-card">
              <div className="city">{s.city}</div>
              <h4>{s.name}</h4>
              <div className="addr">{s.addr}</div>
              <div className="meta">
                <span><Icon name="phone" size={12} /> {s.phone}</span>
                <span>{s.hrs}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="section" style={{ paddingTop: 56, paddingBottom: 80 }}>
        <div className="cta-strip">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.8)" }}>Ready to drive a certified JDM?</div>
            <h3>Browse 240+ certified vehicles today.</h3>
            <p>Every car carries the green Navana seal — your guarantee of inspection, warranty and service.</p>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 12 }}>
            <button className="btn btn-primary" onClick={() => setPage("products")}>Browse Vehicles <Icon name="arrow" size={14} /></button>
            <button className="btn btn-ghost" style={{ borderColor: "rgba(255,255,255,.35)", color: "white" }}>Call 16720</button>
          </div>
        </div>
      </section>
    </React.Fragment>);

};

Object.assign(window, { HomePage });
