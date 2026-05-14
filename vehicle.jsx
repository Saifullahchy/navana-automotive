// Vehicle Detail page

const VehicleDetailPage = ({ car, setPage, setCarId }) => {
  const [tab, setTab] = React.useState("overview");
  const [imgIdx, setImgIdx] = React.useState(0);

  if (!car) return null;

  // Build a faux gallery from the car image + a few siblings
  const gallery = [car.image, ...CARS.filter(c => c.id !== car.id).slice(0, 4).map(c => c.image)];

  const showroom = {
    Dhaka: { name: "Dhaka Showroom", addr: "205–207, Tejgaon Industrial Area, Dhaka 1208", hrs: "Sat–Thu · 9:00–8:00" },
    Chittagong: { name: "Chittagong Showroom", addr: "A H Paragon, 282, CDA Avenue, Muradpur", hrs: "Sat–Thu · 9:00–7:30" },
    Sylhet: { name: "Sylhet (Opening Soon)", addr: "Zindabazar, Sylhet", hrs: "Coming soon" },
  }[car.location];

  const similar = CARS
    .filter(c => c.id !== car.id && (c.category === car.category || c.brand === car.brand))
    .slice(0, 3);

  return (
    <div className="detail-wrap" data-screen-label="03 Vehicle Detail">
      <div className="breadcrumb">
        <a onClick={() => setPage("home")}>Home</a>
        <span className="sep">/</span>
        <a onClick={() => setPage("products")}>Vehicles</a>
        <span className="sep">/</span>
        <a onClick={() => setPage("products")}>{car.category}</a>
        <span className="sep">/</span>
        <span style={{ color: "var(--ink)" }}>{car.brand} {car.name}</span>
      </div>

      <div className="detail-grid">
        {/* Gallery */}
        <div className="gallery">
          <div className="gallery-main">
            <img src={gallery[imgIdx]} alt={car.name} />
            <div className="scrim"/>
            <button className="img-nav prev" onClick={() => setImgIdx((imgIdx - 1 + gallery.length) % gallery.length)}>
              <span style={{ display: "inline-block", transform: "rotate(180deg)", lineHeight: 0 }}>
                <Icon name="arrow" size={16} stroke="#111"/>
              </span>
            </button>
            <button className="img-nav next" onClick={() => setImgIdx((imgIdx + 1) % gallery.length)}>
              <Icon name="arrow" size={16} stroke="#111"/>
            </button>
            <CertifiedBadge size="lg" style={{ top: 20, right: 20 }}/>
            <div className="car-mini-logo" style={{ left: 20, bottom: 20, width: 36, height: 20 }}>
              <NavanaMark color="white" />
            </div>
          </div>
          <div className="gallery-thumbs">
            {gallery.map((src, i) => (
              <button key={i} className={i === imgIdx ? "on" : ""} onClick={() => setImgIdx(i)}>
                <img src={src} alt=""/>
              </button>
            ))}
          </div>
          <div className="gallery-meta">
            <span className="mono">PHOTO {imgIdx + 1} / {gallery.length}</span>
            <span>All images verified by Navana inspection team</span>
          </div>
        </div>

        {/* Right column */}
        <div className="detail-aside">
          <div className="dt-head">
            <div className="tags">
              <span className="pill">Navana Certified</span>
              <span className="pill" style={{ background: "rgba(14,59,61,.06)", color: "var(--navana-teal)", borderColor: "rgba(14,59,61,.15)" }}>{car.tag}</span>
              <span className="pill" style={{ background: "rgba(0,0,0,.04)", color: "var(--ink-2)", borderColor: "rgba(0,0,0,.08)" }}>{car.fuel}</span>
            </div>
            <h1>{car.brand} {car.name}</h1>
            <div className="sub">
              <span>{car.year} model</span>
              <span className="dot"/>
              <span>{car.km.toLocaleString()} km</span>
              <span className="dot"/>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                <Icon name="pin" size={12}/> {car.location} showroom
              </span>
            </div>
          </div>

          <div className="price-card">
            <div className="price-row">
              <div>
                <div className="big-price">৳ {car.price.toLocaleString()}<small>BDT</small></div>
                <div className="emi">EMI from ৳ {Math.round(car.price / 60).toLocaleString()}/mo · 60 months · 9.5% APR</div>
              </div>
              <span className="pill" style={{ alignSelf: "flex-end" }}>Negotiable</span>
            </div>

            <div className="actions">
              <button className="btn btn-primary">
                Book Test Drive <Icon name="arrow" size={13}/>
              </button>
              <button className="btn btn-dark">
                <Icon name="phone" size={13}/> Call 16720
              </button>
            </div>

            <div className="spec-grid">
              <div className="spec-cell"><span className="lbl">Year</span><span className="val">{car.year}</span></div>
              <div className="spec-cell"><span className="lbl">Mileage</span><span className="val">{car.km.toLocaleString()} km</span></div>
              <div className="spec-cell"><span className="lbl">Engine</span><span className="val">{car.engine}</span></div>
              <div className="spec-cell"><span className="lbl">Transmission</span><span className="val">{car.trans}</span></div>
              <div className="spec-cell"><span className="lbl">Fuel</span><span className="val">{car.fuel}</span></div>
              <div className="spec-cell"><span className="lbl">Category</span><span className="val">{car.category}</span></div>
            </div>
          </div>

          {/* Warranty strip */}
          <div className="warranty-strip">
            <div className="w-item">
              <Icon name="battery" size={22}/>
              <div><b>3 Yrs</b><span>HV BATTERY</span></div>
            </div>
            <div className="w-item">
              <Icon name="shield" size={22}/>
              <div><b>15,000 km</b><span>COMPONENT</span></div>
            </div>
            <div className="w-item">
              <Icon name="tools" size={22}/>
              <div><b>3 Free</b><span>SERVICES</span></div>
            </div>
          </div>

          {/* Dealer card */}
          <div className="dealer-card">
            <div className="eye">Available at</div>
            <h4>{showroom.name}</h4>
            <div className="addr">{showroom.addr}</div>
            <div className="row">
              <div><Icon name="phone" size={12}/> +880 16720</div>
              <div><Icon name="pin" size={12}/> {showroom.hrs}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="detail-tabs">
        {[
          { id: "overview", label: "Overview" },
          { id: "specs",    label: "Full Specifications" },
          { id: "inspect",  label: "Inspection Report" },
          { id: "warranty", label: "Warranty & Service" },
        ].map(x => (
          <button key={x.id} className={tab === x.id ? "on" : ""} onClick={() => setTab(x.id)}>{x.label}</button>
        ))}
      </div>

      <div className="tab-body">
        {tab === "overview" && (
          <div>
            <h3>About this {car.brand} {car.name}</h3>
            <p>
              This {car.year} {car.brand} {car.name} has been imported from Japan and certified by Navana
              after a 180-point inspection. The {car.fuel.toLowerCase()} drivetrain with {car.engine} and
              {" "}{car.trans} transmission delivers refined performance with the reliability you expect from a
              Japanese Domestic Model. Originally a single-owner vehicle, it arrives with original Japanese auction
              sheet, full service history and Navana's certification seal — backed by our warranty programme.
            </p>
            <p style={{ marginTop: 14 }}>
              Currently available at our {car.location} showroom. Book a test drive online or walk in any day
              from Saturday to Thursday.
            </p>
          </div>
        )}

        {tab === "specs" && (
          <div className="full-spec-grid">
            {[
              ["Make", car.brand], ["Model", car.name], ["Year", car.year],
              ["Body Type", car.category], ["Mileage", `${car.km.toLocaleString()} km`], ["Fuel", car.fuel],
              ["Engine", car.engine], ["Transmission", car.trans], ["Drive", car.category === "SUV" ? "AWD" : "FWD"],
              ["Steering", "Right-hand"], ["Color", "Pearl White"], ["Seating", car.category === "Van" ? "7 + 1" : "5"],
              ["Air Conditioning", "Dual zone climate"], ["Audio", "Touchscreen + Navi"], ["Safety", "ABS · SRS · ESP"],
            ].map(([l, v]) => (
              <div key={l} className="row">
                <span className="lbl">{l}</span>
                <span className="val">{v}</span>
              </div>
            ))}
          </div>
        )}

        {tab === "inspect" && (
          <div>
            <h3>180-point Navana certification checklist</h3>
            <p style={{ marginBottom: 18 }}>Every Navana certified vehicle passes a comprehensive inspection across mechanical, electrical, body and interior systems before listing.</p>
            <div className="inspect-list">
              {[
                "Engine compression test passed",
                "Transmission shift quality verified",
                "Brake pads &gt; 70% remaining",
                "All tyres &gt; 6mm tread depth",
                "Hybrid battery state-of-health 92%",
                "OBD scan — no fault codes",
                "Body panels alignment verified",
                "Paint thickness within OEM spec",
                "Interior trim — no aftermarket damage",
                "AC cooling output ≤ 4°C tested",
                "Electrical: lights, wipers, windows OK",
                "Underbody — no rust or accident repair",
              ].map(item => (
                <div key={item} className="inspect-item">
                  <span className="tick"><Icon name="shield" size={12}/></span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "warranty" && (
          <div>
            <h3>What Navana certification covers</h3>
            <p>
              Every certified JDM vehicle from Navana includes warranty coverage and complimentary services to give you peace of mind from day one.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 20 }}>
              {[
                { t: "Up to 3 Years HV Battery Warranty", d: "Comprehensive coverage for hybrid battery health on all certified hybrid vehicles." },
                { t: "15,000 km Component Warranty",     d: "Engine, transmission and drivetrain components covered for 15,000 km from delivery." },
                { t: "3 Complimentary Free Services",    d: "Three scheduled servicing appointments at any Navana service center, on us." },
              ].map(x => (
                <div key={x.t} className="value-card">
                  <div className="v-icon"><Icon name="shield" size={20}/></div>
                  <b>{x.t}</b>
                  <p>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="similar-section">
          <h3>Similar vehicles you may like</h3>
          <div className="featured-grid">
            {similar.map(c => (
              <div key={c.id} onClick={() => { setCarId(c.id); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ cursor: "pointer" }}>
                <CarCard car={c} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

Object.assign(window, { VehicleDetailPage });
