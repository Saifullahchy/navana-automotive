// Products page — filters sidebar + sortable, switchable grid/list

const ProductsPage = ({ t, openCar }) => {
  const [filters, setFilters] = React.useState({
    categories: [],
    brands: [],
    locations: [],
    fuels: [],
    transmissions: [],
    minPrice: "",
    maxPrice: "",
    minYear: "",
    maxYear: "",
  });
  const [sort, setSort] = React.useState("featured");
  const [view, setView] = React.useState("grid");
  const [search, setSearch] = React.useState("");

  const toggle = (key, value) => {
    setFilters(f => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter(v => v !== value) : [...f[key], value],
    }));
  };
  const clearAll = () => setFilters({ categories: [], brands: [], locations: [], fuels: [], transmissions: [], minPrice: "", maxPrice: "", minYear: "", maxYear: "" });

  const filtered = React.useMemo(() => {
    let list = CARS.filter(c => {
      if (filters.categories.length && !filters.categories.includes(c.category)) return false;
      if (filters.brands.length && !filters.brands.includes(c.brand)) return false;
      if (filters.locations.length && !filters.locations.includes(c.location)) return false;
      if (filters.fuels.length && !filters.fuels.includes(c.fuel)) return false;
      if (filters.transmissions.length && !filters.transmissions.includes(c.trans)) return false;
      if (filters.minPrice && c.price < +filters.minPrice * 100000) return false;
      if (filters.maxPrice && c.price > +filters.maxPrice * 100000) return false;
      if (filters.minYear && c.year < +filters.minYear) return false;
      if (filters.maxYear && c.year > +filters.maxYear) return false;
      if (search && !`${c.name} ${c.brand}`.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "year-desc") list = [...list].sort((a, b) => b.year - a.year);
    if (sort === "km-asc") list = [...list].sort((a, b) => a.km - b.km);
    return list;
  }, [filters, sort, search]);

  const activeChips = [
    ...filters.categories.map(v => ({ key: "categories", v, label: v })),
    ...filters.brands.map(v => ({ key: "brands", v, label: v })),
    ...filters.locations.map(v => ({ key: "locations", v, label: `📍 ${v}` })),
    ...filters.fuels.map(v => ({ key: "fuels", v, label: v })),
    ...filters.transmissions.map(v => ({ key: "transmissions", v, label: v })),
  ];

  const countBy = (key, value, field) => CARS.filter(c => c[field] === value).length;

  return (
    <React.Fragment>
      {/* Page banner */}
      <div style={{
        background: "var(--navana-teal)", color: "var(--ivory)",
        padding: "40px 40px 32px",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div className="tagline-ribbon" style={{ color: "var(--navana-green)" }}>NAVANA CERTIFIED INVENTORY</div>
            <h1 style={{ fontSize: 44, margin: "10px 0 8px", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Browse our Japanese Domestic Models.
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: "rgba(247,245,240,.7)", maxWidth: 620 }}>
              All vehicles are inspected, certified and warranted by Navana. Filter by category, brand or showroom location.
            </p>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: 999, padding: "6px 6px 6px 16px", minWidth: 380,
          }}>
            <Icon name="search" size={16} stroke="rgba(247,245,240,.6)"/>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by model, e.g. Aqua, Vezel, Premio…"
              style={{
                flex: 1, background: "transparent", border: 0, outline: "none",
                color: "var(--ivory)", fontSize: 14, padding: "8px 0",
              }}
            />
            <button className="btn btn-primary" style={{ padding: "8px 16px" }}>Search</button>
          </div>
        </div>
      </div>

      <div className="products-layout">
        {/* Filter sidebar */}
        <aside className="filter-side">
          <div className="filter-head">
            <b>Filters</b>
            <button onClick={clearAll}>Clear all</button>
          </div>

          <div className="filter-group">
            <h6>Category</h6>
            {CATEGORIES.map(c => (
              <div key={c.id} className="filter-opt">
                <label>
                  <input type="checkbox" checked={filters.categories.includes(c.id)} onChange={() => toggle("categories", c.id)}/>
                  {c.id}
                </label>
                <span className="count">{countBy(null, c.id, "category")}</span>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h6>Brand / Company</h6>
            {BRANDS.map(b => (
              <div key={b} className="filter-opt">
                <label>
                  <input type="checkbox" checked={filters.brands.includes(b)} onChange={() => toggle("brands", b)}/>
                  {b}
                </label>
                <span className="count">{countBy(null, b, "brand")}</span>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h6>Showroom Location</h6>
            {LOCATIONS.map(l => (
              <div key={l} className="filter-opt">
                <label>
                  <input type="checkbox" checked={filters.locations.includes(l)} onChange={() => toggle("locations", l)}/>
                  {l}
                </label>
                <span className="count">{countBy(null, l, "location")}</span>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h6>Fuel</h6>
            {FUELS.map(f => (
              <div key={f} className="filter-opt">
                <label>
                  <input type="checkbox" checked={filters.fuels.includes(f)} onChange={() => toggle("fuels", f)}/>
                  {f}
                </label>
                <span className="count">{countBy(null, f, "fuel")}</span>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h6>Transmission</h6>
            {TRANSMISSIONS.map(tr => (
              <div key={tr} className="filter-opt">
                <label>
                  <input type="checkbox" checked={filters.transmissions.includes(tr)} onChange={() => toggle("transmissions", tr)}/>
                  {tr === "AT" ? "Automatic (AT)" : tr === "CVT" ? "CVT" : "Manual (MT)"}
                </label>
                <span className="count">{countBy(null, tr, "trans")}</span>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h6>Price (Lakh BDT)</h6>
            <div className="range-row">
              <input type="number" placeholder="Min" value={filters.minPrice} onChange={e => setFilters({ ...filters, minPrice: e.target.value })}/>
              <input type="number" placeholder="Max" value={filters.maxPrice} onChange={e => setFilters({ ...filters, maxPrice: e.target.value })}/>
            </div>
          </div>

          <div className="filter-group">
            <h6>Year</h6>
            <div className="range-row">
              <input type="number" placeholder="From" value={filters.minYear} onChange={e => setFilters({ ...filters, minYear: e.target.value })}/>
              <input type="number" placeholder="To" value={filters.maxYear} onChange={e => setFilters({ ...filters, maxYear: e.target.value })}/>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="products-head">
            <div>
              <h1>All Vehicles</h1>
              <div className="results">Showing <b>{filtered.length}</b> of {CARS.length} Navana-certified vehicles</div>
            </div>
            <div className="toolbar">
              <select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="year-desc">Newest First</option>
                <option value="km-asc">Lowest Mileage</option>
              </select>
              <div className="seg">
                <button className={view === "grid" ? "on" : ""} onClick={() => setView("grid")}><Icon name="grid" size={13}/></button>
                <button className={view === "list" ? "on" : ""} onClick={() => setView("list")}><Icon name="list" size={13}/></button>
              </div>
            </div>
          </div>

          {activeChips.length > 0 && (
            <div className="active-filters">
              {activeChips.map(ch => (
                <span key={ch.key + ch.v} className="chip">
                  {ch.label}
                  <button onClick={() => toggle(ch.key, ch.v)}><Icon name="x" size={11}/></button>
                </span>
              ))}
              <button className="chip" style={{ color: "var(--navana-green)", borderColor: "rgba(31,168,80,.3)", background: "var(--navana-green-soft)" }} onClick={clearAll}>
                Clear all filters
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="empty">
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>No vehicles match these filters.</div>
              <div style={{ marginTop: 8, fontSize: 13 }}>Try removing a filter or call our hotline 16720 — we may have something incoming.</div>
              <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={clearAll}>Clear filters</button>
            </div>
          ) : (
            <div className={`products-grid ${view === "list" ? "list-view" : ""}`}>
              {filtered.map(car => (
                <CarCard key={car.id} car={car} listView={view === "list"} onView={openCar} />
              ))}
            </div>
          )}

          {/* Pagination (visual only) */}
          {filtered.length > 0 && (
            <div className="pagination">
              <button>‹</button>
              <button className="on">1</button>
              <button>2</button>
              <button>3</button>
              <button>…</button>
              <button>12</button>
              <button>›</button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

Object.assign(window, { ProductsPage });
