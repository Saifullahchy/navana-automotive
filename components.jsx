// Shared components: Logo, CertifiedBadge, Header, Footer, CarCard, Icons

const NavanaMark = ({ size = 24, color = "currentColor" }) => (
  <svg viewBox="0 0 64 32" fill="none">
    {/* Stylized N — two angled bars echoing the Navana lightning N */}
    <path d="M4 26 L18 6 L26 22 L18 22 Z" fill={color} />
    <path d="M38 10 L46 26 L60 6 L46 10 Z" fill={color} opacity="0.92" />
  </svg>
);

const Logo = ({ dark = false, onClick }) => (
  <div className="logo" onClick={onClick}>
    <div className="logo-mark">
      <NavanaMark color="#1FA850" />
    </div>
    <div className="logo-text">
      <b>NAVANA</b>
      <span>AUTOMOTIVE SOLUTION</span>
    </div>
  </div>
);

// Circular certified badge (green seal with N mark inside)
const CertifiedBadge = ({ size = "md", style = {} }) => {
  const cls = `cert-badge ${size === "lg" ? "lg" : size === "sm" ? "sm" : ""}`;
  return (
    <div className={cls} style={style} aria-label="Navana Certified Vehicle">
      <span className="arc-top">★ NAVANA ★</span>
      <NavanaMark color="white" />
      <span className="arc-bot">CERTIFIED</span>
    </div>
  );
};

const Icon = ({ name, size = 18, stroke = "currentColor" }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "phone": return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "pin": return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "car": return <svg {...props}><path d="M5 17h14M5 13l2-6h10l2 6M5 13v4M19 13v4M7 17v2M17 17v2"/><circle cx="8" cy="14.5" r="1.2"/><circle cx="16" cy="14.5" r="1.2"/></svg>;
    case "suv": return <svg {...props}><path d="M3 17h18M4 13l3-7h11l2 7M4 13v4M20 13v4M6 17v2M18 17v2M9 8h7"/><circle cx="8" cy="14.5" r="1.2"/><circle cx="16" cy="14.5" r="1.2"/></svg>;
    case "van": return <svg {...props}><path d="M3 17h18M3 17V8h12l5 5v4M9 8v5M15 8v5"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/></svg>;
    case "hatch": return <svg {...props}><path d="M4 17h16M5 13l3-6h8l3 6M5 13v4M19 13v4"/><circle cx="8" cy="14.5" r="1.2"/><circle cx="16" cy="14.5" r="1.2"/></svg>;
    case "ev": return <svg {...props}><path d="M7 7h10v10H7zM10 11l-1 3h2l-1 3"/></svg>;
    case "shield": return <svg {...props}><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "battery": return <svg {...props}><rect x="3" y="8" width="16" height="10" rx="2"/><path d="M21 11v4"/><path d="m10 11-1 3h2l-1 3"/></svg>;
    case "tools": return <svg {...props}><path d="M14.7 6.3a4 4 0 0 0-5.7 5.7l-6 6 2 2 6-6a4 4 0 0 0 5.7-5.7l-2.3 2.3-1.4-1.4z"/></svg>;
    case "handshake": return <svg {...props}><path d="m11 17 2 2 8-8-4-4-2 2-2-2-4 4"/><path d="m3 12 4-4 2 2"/></svg>;
    case "award": return <svg {...props}><circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-2 7L12 17l5.5 3.5-2-7"/></svg>;
    case "menu": return <svg {...props}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "x": return <svg {...props}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case "arrow": return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "filter": return <svg {...props}><path d="M3 6h18M6 12h12M10 18h4"/></svg>;
    case "grid": return <svg {...props}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
    case "list": return <svg {...props}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>;
    case "fb": return <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    default: return null;
  }
};

const CarPhoto = ({ model, src, dark = false, badgeSize = "md", showBadge = true, badgePos = { top: 12, right: 12 } }) => (
  <div className={`car-photo${dark ? " dark" : ""}`}>
    {src ? (
      <img
        src={src}
        alt={model}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
    ) : (
      <div className="ph-label">
        <div style={{ opacity: 0.55, fontWeight: 700 }}>VEHICLE PHOTO</div>
        <div style={{ marginTop: 4, fontSize: 9, opacity: 0.4 }}>{model}</div>
      </div>
    )}
    {/* gradient scrim so overlays remain legible */}
    {src && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.35) 100%)" }}/>}
    {/* The little N-badge on the grille (echoes the poster) */}
    <div className="car-mini-logo">
      <NavanaMark color="white" />
    </div>
    {showBadge && <CertifiedBadge size={badgeSize} style={badgePos} />}
  </div>
);

const Header = ({ page, setPage, dark }) => (
  <div className="header">
    <Logo dark={dark} onClick={() => setPage("home")} />
    <nav className="nav">
      <a className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</a>
      <a className={page === "products" ? "active" : ""} onClick={() => setPage("products")}>Vehicles</a>
      <a onClick={() => setPage("products")}>Certified</a>
      <a onClick={() => setPage("home")}>Showrooms</a>
      <a onClick={() => setPage("home")}>About</a>
    </nav>
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <button className="btn btn-ghost">
        <Icon name="phone" size={14}/> 16720
      </button>
      <button className="btn btn-primary" onClick={() => setPage("products")}>
        Browse Vehicles <Icon name="arrow" size={14}/>
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <Logo dark />
        <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(247,245,240,.6)", margin: "16px 0 18px", maxWidth: 320 }}>
          Navana Automotive Solution delivers Navana-certified Japanese Domestic Model vehicles with warranty and lifetime support.
        </p>
        <div className="tagline-ribbon">IGNITE&nbsp;LEGACY</div>
      </div>
      <div>
        <h5>Vehicles</h5>
        <ul>
          <li><a>Certified JDM</a></li>
          <li><a>Sedans</a></li>
          <li><a>SUVs &amp; 4×4</a></li>
          <li><a>Hybrid &amp; EV</a></li>
          <li><a>Commercial</a></li>
        </ul>
      </div>
      <div>
        <h5>Showrooms</h5>
        <ul>
          <li><a>Dhaka — Tejgaon</a></li>
          <li><a>Chittagong — Muradpur</a></li>
          <li><a>Sylhet (opening soon)</a></li>
        </ul>
      </div>
      <div>
        <h5>Support</h5>
        <ul>
          <li><a>Hotline 16720</a></li>
          <li><a>Book a service</a></li>
          <li><a>Battery warranty</a></li>
          <li><a>www.facebook.com/Navana.Automotive</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Navana Automotive Solution</span>
      <span className="mono">DHAKA · CHITTAGONG · SYLHET</span>
    </div>
  </footer>
);

const CarCard = ({ car, dark, listView, onView }) => (
  <div className="car-card card" onClick={() => onView && onView(car.id)} style={{ cursor: onView ? "pointer" : "default" }}>
    <div className="photo-wrap">
      <CarPhoto model={car.name} src={car.image} dark={dark} />
    </div>
    <div className="car-body" style={{ flex: 1 }}>
      <div className="car-meta">
        <span className="pill">{car.tag}</span>
        <span className="pill" style={{ background: "rgba(14,59,61,.06)", color: "var(--navana-teal)", borderColor: "rgba(14,59,61,.15)" }}>
          {car.fuel}
        </span>
      </div>
      <h3>{car.name}</h3>
      <p className="car-sub">{car.brand} · {car.year} · {car.location}</p>
      <div className="car-specs">
        <div><span>Mileage</span>{car.km.toLocaleString()} km</div>
        <div><span>Engine</span>{car.engine}</div>
        <div><span>Trans.</span>{car.trans}</div>
      </div>
      <div className="car-foot">
        <div className="price">৳ {car.price.toLocaleString()}<small>BDT</small></div>
        <button className="btn btn-dark" onClick={(e) => { e.stopPropagation(); onView && onView(car.id); }}>
          View <Icon name="arrow" size={13}/>
        </button>
      </div>
    </div>
  </div>
);

Object.assign(window, { NavanaMark, Logo, CertifiedBadge, Icon, CarPhoto, Header, Footer, CarCard });
