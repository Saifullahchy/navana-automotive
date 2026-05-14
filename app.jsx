// Top-level App + Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroImage": "city",
  "accent": "#1FA850",
  "showCertBadge": true,
  "fontPair": "jakarta"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = React.useState("home");
  const [carId, setCarId] = React.useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const openCar = (id) => {
    setCarId(id);
    setPage("detail");
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const goPage = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "instant" }); };

  const currentCar = CARS.find(c => c.id === carId);

  // Apply accent to CSS variable
  React.useEffect(() => {
    document.documentElement.style.setProperty("--navana-green", t.accent || "#1FA850");
  }, [t.accent]);

  React.useEffect(() => {
    document.body.style.fontFamily =
      t.fontPair === "manrope" ? "'Manrope', sans-serif" :
      t.fontPair === "geist"   ? "'Geist', sans-serif" :
      "'Plus Jakarta Sans', sans-serif";
  }, [t.fontPair]);

  const label = page === "home" ? "01 Home" : page === "products" ? "02 Products" : "03 Vehicle Detail";

  return (
    <div className="app" data-screen-label={label}>
      <Header page={page} setPage={goPage} dark={false}/>
      {page === "home"     && <HomePage setPage={goPage} t={t} setTweak={setTweak} openCar={openCar}/>}
      {page === "products" && <ProductsPage t={t} openCar={openCar}/>}
      {page === "detail"   && <VehicleDetailPage car={currentCar} setPage={goPage} setCarId={(id) => openCar(id)}/>}
      <Footer/>

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Hero image" value={t.heroImage}
          options={["city", "studio", "road"]}
          onChange={(v) => setTweak("heroImage", v)} />
        <TweakRadio label="Page" value={page}
          options={["home", "products", "detail"]}
          onChange={(v) => {
            if (v === "detail" && !carId) openCar(1);
            else goPage(v);
          }} />

        <TweakSection label="Branding" />
        <TweakColor label="Brand green" value={t.accent}
          options={["#1FA850", "#13884D", "#28C76F", "#0E7C3A"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakToggle label="Show certified seal" value={t.showCertBadge}
          onChange={(v) => setTweak("showCertBadge", v)} />

        <TweakSection label="Typography" />
        <TweakRadio label="Font" value={t.fontPair}
          options={["jakarta", "manrope", "geist"]}
          onChange={(v) => setTweak("fontPair", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
