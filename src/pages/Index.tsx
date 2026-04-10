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

      {/* БЛОК 2 — УЗНАЁТЕ СЕБЯ? */}
      <section
        style={{
          position: "relative",
          background: "#FBFAF7",
          padding: "120px 32px",
          overflow: "hidden",
        }}
      >
        {/* Фоновая буква-цифра */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 40,
            right: -40,
            fontFamily: "'Manrope', sans-serif",
            fontSize: 420,
            fontWeight: 800,
            color: "#F4EDE0",
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          02
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Хедер секции */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 64,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: "#E67E22",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#E67E22",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Знакомые ситуации
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 64px)",
                  lineHeight: 1.05,
                  color: "#1E2A36",
                  margin: 0,
                  letterSpacing: "-0.03em",
                }}
              >
                Узнаёте{" "}
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#E67E22",
                  }}
                >
                  себя?
                </span>
              </h2>
            </div>
            <p
              style={{
                maxWidth: 340,
                margin: 0,
                fontSize: 16,
                lineHeight: 1.6,
                color: "#5A6878",
              }}
            >
              Если хотя бы один пункт — ваш, значит пора выстроить систему.
              Хорошая новость: это решается за 2–3 встречи.
            </p>
          </div>

          {/* Карточки */}
          <div className="cards-grid-5">
            {[
              {
                icon: "💸",
                title: "Деньги «утекают»",
                text: "Доход хороший, а в конце месяца непонятно, куда всё ушло.",
                num: "01",
              },
              {
                icon: "📉",
                title: "Нет подушки",
                text: "Финансовая подушка отсутствует или слишком маленькая для спокойствия.",
                num: "02",
              },
              {
                icon: "🎯",
                title: "Нет целей",
                text: "Не знаете, как правильно ставить и достигать финансовые цели.",
                num: "03",
              },
              {
                icon: "🔄",
                title: "Долги давят",
                text: "Кредиты и обязательства вызывают постоянное напряжение.",
                num: "04",
              },
              {
                icon: "📈",
                title: "Страшно инвестировать",
                text: "Хочется начать, но непонятно с чего и много тревоги.",
                num: "05",
              },
            ].map((c, i) => (
              <article
                key={i}
                className="pain-card"
                style={{
                  position: "relative",
                  background: "#ffffff",
                  borderRadius: 24,
                  padding: "36px 32px 32px",
                  border: "1px solid #F0EBE0",
                  boxShadow: "0 1px 2px rgba(30, 42, 54, 0.04)",
                  transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.3s ease",
                  cursor: "default",
                  overflow: "hidden",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* Номер */}
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 24,
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#C8BEAB",
                    letterSpacing: "0.1em",
                  }}
                >
                  {c.num}
                </span>

                {/* Иконка */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #FFF3E0, #FFE4C4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 24,
                  }}
                >
                  {c.icon}
                </div>

                {/* Заголовок */}
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    lineHeight: 1.25,
                    color: "#1E2A36",
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.title}
                </h3>

                {/* Текст */}
                <p
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "#6B7A8A",
                    margin: 0,
                  }}
                >
                  {c.text}
                </p>

                {/* Нижняя акцентная полоска */}
                <div
                  className="card-bar"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 3,
                    background: "#E67E22",
                    transition: "width 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                />
              </article>
            ))}
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

        /* Сетка карточек: 3 сверху, 2 снизу по центру */
        .cards-grid-5 {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }
        .cards-grid-5 > article:nth-child(1) { grid-column: span 2; }
        .cards-grid-5 > article:nth-child(2) { grid-column: span 2; }
        .cards-grid-5 > article:nth-child(3) { grid-column: span 2; }
        .cards-grid-5 > article:nth-child(4) { grid-column: 2 / span 2; }
        .cards-grid-5 > article:nth-child(5) { grid-column: 4 / span 2; }

        @media (max-width: 960px) {
          .cards-grid-5 {
            grid-template-columns: repeat(2, 1fr);
          }
          .cards-grid-5 > article:nth-child(n) {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 560px) {
          .cards-grid-5 {
            grid-template-columns: 1fr;
          }
        }

        .pain-card {
          opacity: 0;
          transform: translateY(24px);
          animation: painFadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .pain-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 24px 60px rgba(230, 126, 34, 0.12) !important;
          border-color: #F0D0B0 !important;
        }
        .pain-card:hover .card-bar {
          width: 100% !important;
        }
        @keyframes painFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;