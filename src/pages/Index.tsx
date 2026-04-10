const TATYANA_PHOTO = "https://cdn.poehali.dev/projects/4fe2226f-b854-4e43-9235-040cb0215efa/files/1630e832-628a-4a1a-b321-ec25b73fc3aa.jpg";

const Index = () => {
  const handleDiagnostics = () => {
    alert("Форма диагностики — настройте действие кнопки");
  };

  const handlePrices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #FFF9F0 0%, #ffffff 70%)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 32px 80px",
          display: "grid",
          gridTemplateColumns: "60% 40%",
          gap: 48,
          alignItems: "center",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
        className="hero-grid"
      >
        {/* LEFT — текст */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Бейдж */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FFF3E8",
              border: "1px solid #F0D0B0",
              borderRadius: 100,
              padding: "6px 16px",
              width: "fit-content",
              color: "#C06010",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ fontSize: 10, color: "#E67E22" }}>●</span>
            Финансовый консультант · Личные финансы
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              color: "#1E2A36",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Наведи порядок в финансах{" "}
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              без жёсткой
              <span
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: "100%",
                  height: 3,
                  background: "#E67E22",
                  borderRadius: 2,
                }}
              />
            </span>{" "}
            экономии
          </h1>

          {/* Подзаголовок */}
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#2C3E50",
              margin: 0,
              maxWidth: 560,
            }}
          >
            Доход есть, а накопления не формируются? Разберём твою ситуацию,
            уберём финансовую тревогу и выстроим систему, которая работает.
          </p>

          {/* Разделитель */}
          <div
            style={{
              width: 48,
              height: 2,
              background: "#E67E22",
              borderRadius: 2,
            }}
          />

          {/* Кнопки */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Главная CTA */}
            <button
              onClick={handleDiagnostics}
              style={{
                width: 280,
                height: 56,
                background: "#E67E22",
                color: "#ffffff",
                border: "none",
                borderRadius: 40,
                fontSize: 16,
                fontWeight: 600,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                transition: "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                letterSpacing: "0.01em",
                boxShadow: "0 4px 20px rgba(230, 126, 34, 0.35)",
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.background = "#D35400";
                (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(230, 126, 34, 0.45)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.background = "#E67E22";
                (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(230, 126, 34, 0.35)";
              }}
            >
              Пройти бесплатную диагностику
            </button>

            {/* Пометка под кнопкой */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#7F8C8D",
                fontSize: 14,
                paddingLeft: 4,
              }}
            >
              <span>✅</span>
              <span>Без спама и обязательств. Текстовый формат</span>
            </div>

            {/* Вторая кнопка */}
            <button
              onClick={handlePrices}
              style={{
                width: 280,
                height: 48,
                background: "transparent",
                color: "#E67E22",
                border: "2px solid #E67E22",
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                transition: "background 0.2s ease, color 0.2s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={e => {
                (e.target as HTMLButtonElement).style.background = "#E67E22";
                (e.target as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                (e.target as HTMLButtonElement).style.background = "transparent";
                (e.target as HTMLButtonElement).style.color = "#E67E22";
              }}
            >
              Узнать цены
            </button>
          </div>

          {/* Социальное доказательство */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingTop: 8,
            }}
          >
            <div style={{ display: "flex" }}>
              {["#E8C07A", "#D4A853", "#F0D080"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid white",
                    marginLeft: i === 0 ? 0 : -8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#7A5010",
                    fontWeight: 700,
                  }}
                >
                  {["А", "М", "О"][i]}
                </div>
              ))}
            </div>
            <p style={{ margin: 0, color: "#2C3E50", fontSize: 14, lineHeight: 1.4 }}>
              <strong style={{ color: "#1E2A36" }}>127 клиентов</strong> уже выстроили
              <br />свою финансовую систему
            </p>
          </div>
        </div>

        {/* RIGHT — фото */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Декоративный фон */}
          <div
            style={{
              position: "absolute",
              top: -24,
              right: -16,
              width: "85%",
              height: "85%",
              background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
              borderRadius: 30,
              zIndex: 0,
            }}
          />
          {/* Декоративный акцент */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: -16,
              width: 80,
              height: 80,
              border: "3px solid #E67E22",
              borderRadius: 20,
              zIndex: 0,
              opacity: 0.4,
            }}
          />

          {/* Фото */}
          <img
            src={TATYANA_PHOTO}
            alt="Татьяна — финансовый консультант"
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: 420,
              height: 520,
              objectFit: "cover",
              borderRadius: 30,
              boxShadow: "0 24px 60px rgba(30, 42, 54, 0.18)",
            }}
          />

          {/* Флотирующая карточка */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: -24,
              zIndex: 2,
              background: "#ffffff",
              borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "0 8px 32px rgba(30, 42, 54, 0.14)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              minWidth: 200,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#FFF3E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              📊
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#1E2A36",
                }}
              >
                8+ лет опыта
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "#7F8C8D",
                }}
              >
                в личных финансах
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Адаптивный CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 20px 60px !important;
            min-height: auto !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:last-child img {
            height: 340px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
