import {
  Block6Reviews,
  Block7Diagnostics,
  Block8Guides,
  Block9Faq,
  Block10Cta,
  Block11Footer,
} from "@/components/landing/FinalBlocks";

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

      {/* БЛОК 3 — БЕЗ СИСТЕМЫ ДЕНЬГИ УПРАВЛЯЮТ ВАМИ */}
      <section
        style={{
          position: "relative",
          background: "#141B24",
          padding: "140px 32px",
          overflow: "hidden",
          color: "#ffffff",
        }}
      >
        {/* Запутанные линии-фон */}
        <svg
          aria-hidden
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            opacity: 0.35,
          }}
        >
          <defs>
            <linearGradient id="tangleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#E67E22" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E67E22" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="fogGrad" cx="70%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#E67E22" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#141B24" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Туманное пятно */}
          <rect width="1440" height="800" fill="url(#fogGrad)" />

          {/* Запутанные кривые */}
          <path
            d="M 950 120 C 1200 200, 800 300, 1100 380 S 900 540, 1250 620 S 850 740, 1150 800"
            stroke="url(#tangleGrad)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 1000 80 C 750 250, 1300 320, 950 460 S 1250 580, 900 700"
            stroke="url(#tangleGrad)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 1100 200 C 900 300, 1300 400, 1050 500 S 1200 650, 950 780"
            stroke="url(#tangleGrad)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 870 60 C 1350 180, 780 420, 1280 560 S 830 700, 1200 820"
            stroke="url(#tangleGrad)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M 1150 40 C 850 160, 1380 260, 1020 380 S 1320 520, 880 660"
            stroke="url(#tangleGrad)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M 920 260 C 1180 360, 820 460, 1100 580 S 900 720, 1250 820"
            stroke="url(#tangleGrad)"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>

        {/* Зернистый оверлей */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 20% 100%, rgba(230,126,34,0.12), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="block3-grid"
        >
          {/* LEFT — текст и список */}
          <div>
            {/* Маркер */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
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
                Цена бездействия
              </span>
            </div>

            {/* H2 */}
            <h2
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                color: "#ffffff",
                margin: "0 0 16px",
                letterSpacing: "-0.03em",
              }}
            >
              Без системы{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#E67E22",
                }}
              >
                деньги
              </span>
              <br />
              управляют вами
            </h2>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "#8A96A6",
                margin: "0 0 48px",
                maxWidth: 480,
              }}
            >
              Если ничего не менять, эти ощущения становятся фоном вашей жизни —
              и забирают энергию с каждым днём.
            </p>

            {/* Список болей */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[
                "Тревога",
                "Чувство, что опять не хватило",
                "Откладывание жизни на потом",
                "Зависимость от зарплаты или заказов",
                "Ссоры из-за денег в семье",
              ].map((item, i) => (
                <li
                  key={i}
                  className="pain-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "22px 0",
                    borderBottom:
                      i === 4 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(20px, 2.4vw, 28px)",
                    color: "#E8EBEF",
                    letterSpacing: "-0.01em",
                    animationDelay: `${i * 90}ms`,
                  }}
                >
                  {/* Крестик в круге */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(230, 126, 34, 0.12)",
                      border: "1px solid rgba(230, 126, 34, 0.35)",
                      color: "#E67E22",
                      fontSize: 16,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    ✕
                  </span>
                  <span className="pain-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — визуал «человек в тумане» */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 520,
            }}
            className="fog-visual"
          >
            {/* Круги-ореолы */}
            <div
              style={{
                position: "absolute",
                width: 480,
                height: 480,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(230,126,34,0.22), rgba(230,126,34,0) 65%)",
                filter: "blur(20px)",
                animation: "pulseFog 6s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 340,
                height: 340,
                borderRadius: "50%",
                border: "1px dashed rgba(230, 126, 34, 0.25)",
                animation: "spinSlow 40s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 440,
                height: 440,
                borderRadius: "50%",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            />

            {/* Фигура человека (минималистичная SVG) */}
            <svg
              viewBox="0 0 200 280"
              style={{
                position: "relative",
                width: 200,
                zIndex: 2,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
              }}
            >
              {/* Голова */}
              <circle
                cx="100"
                cy="50"
                r="28"
                fill="none"
                stroke="#E67E22"
                strokeWidth="1.5"
                opacity="0.85"
              />
              {/* Шея и плечи */}
              <path
                d="M 100 78 L 100 100 M 50 130 C 60 110, 80 100, 100 100 C 120 100, 140 110, 150 130"
                fill="none"
                stroke="#E67E22"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* Туловище */}
              <path
                d="M 65 130 L 58 240 M 135 130 L 142 240 M 65 130 L 135 130"
                fill="none"
                stroke="#E67E22"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              {/* Руки */}
              <path
                d="M 58 135 L 40 200 M 142 135 L 160 200"
                fill="none"
                stroke="#E67E22"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              {/* Вопросительные знаки вокруг */}
              <text
                x="30"
                y="40"
                fontFamily="Manrope"
                fontSize="28"
                fontWeight="700"
                fill="#E67E22"
                opacity="0.5"
              >
                ?
              </text>
              <text
                x="160"
                y="70"
                fontFamily="Manrope"
                fontSize="36"
                fontWeight="700"
                fill="#E67E22"
                opacity="0.35"
              >
                ?
              </text>
              <text
                x="20"
                y="150"
                fontFamily="Manrope"
                fontSize="22"
                fontWeight="700"
                fill="#E67E22"
                opacity="0.3"
              >
                ?
              </text>
              <text
                x="170"
                y="180"
                fontFamily="Manrope"
                fontSize="26"
                fontWeight="700"
                fill="#E67E22"
                opacity="0.4"
              >
                ?
              </text>
            </svg>

            {/* Туман снизу */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 160,
                background:
                  "linear-gradient(to top, #141B24 10%, rgba(20,27,36,0.4) 60%, transparent)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* БЛОК 4 — ЭКСПЕРТ ТАТЬЯНА */}
      <section
        style={{
          position: "relative",
          background: "#ffffff",
          padding: "140px 32px",
          overflow: "hidden",
        }}
      >
        {/* Декор — фоновая цифра */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 60,
            left: -40,
            fontFamily: "'Manrope', sans-serif",
            fontSize: 420,
            fontWeight: 800,
            color: "#FBF6EE",
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          04
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "440px 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="expert-grid"
        >
          {/* LEFT — фото */}
          <div style={{ position: "sticky", top: 40 }}>
            <div
              style={{
                position: "relative",
                borderRadius: 30,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(30, 42, 54, 0.15)",
              }}
            >
              <img
                src={TATYANA_PHOTO}
                alt="Татьяна — финансовый наставник"
                style={{
                  width: "100%",
                  height: 540,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Подпись на фото */}
              <div
                style={{
                  position: "absolute",
                  left: 24,
                  bottom: 24,
                  right: 24,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#E67E22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: 18,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Т
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#1E2A36",
                    }}
                  >
                    Татьяна
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12,
                      color: "#7F8C8D",
                    }}
                  >
                    Финансовый наставник · 8 лет
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — текст */}
          <div>
            {/* Маркер */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 32, height: 2, background: "#E67E22" }} />
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
                Знакомьтесь
              </span>
            </div>

            {/* H2 */}
            <h2
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                color: "#1E2A36",
                margin: "0 0 40px",
                letterSpacing: "-0.03em",
              }}
            >
              Я{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#E67E22",
                }}
              >
                Татьяна,
              </span>
              <br />
              финансовый наставник
            </h2>

            {/* Цитата */}
            <figure
              style={{
                position: "relative",
                margin: "0 0 48px",
                padding: "28px 0 28px 36px",
                borderLeft: "3px solid #E67E22",
              }}
            >
              {/* Открывающая кавычка */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 30,
                  top: -20,
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 120,
                  color: "#FBE8D0",
                  lineHeight: 1,
                  fontWeight: 800,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              >
                «
              </span>
              <blockquote
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: 0,
                  fontFamily: "'Cormorant', 'Manrope', serif",
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.5,
                  color: "#7F8C8D",
                  fontWeight: 400,
                }}
              >
                «Я не учу сидеть на гречке. Я помогаю выстроить отношения с
                деньгами, при которых появляется спокойствие, свобода выбора и
                возможность исполнять мечты».
              </blockquote>
            </figure>

            {/* Чек-пункты */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 40px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {[
                "Бережный подход",
                "Опыт работы с нестабильным доходом",
                "Без жёсткой экономии",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#1E2A36",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#E8F5E9",
                      color: "#2E7D32",
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Допоплнительный текст */}
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 16,
                lineHeight: 1.65,
                color: "#5A6878",
                margin: 0,
                maxWidth: 560,
              }}
            >
              Ко мне приходят, когда хочется порядка, уверенности и опоры в
              деньгах. Я верю: финансы — это не про ограничения, а про комфорт
              и свободу.
            </p>
          </div>
        </div>
      </section>

      {/* БЛОК 5 — УСЛУГИ */}
      <section
        id="services"
        style={{
          position: "relative",
          background: "linear-gradient(180deg, #FBFAF7 0%, #FFF4E6 100%)",
          padding: "140px 32px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Заголовок секции */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div style={{ width: 32, height: 2, background: "#E67E22" }} />
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
                Услуги
              </span>
              <div style={{ width: 32, height: 2, background: "#E67E22" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 1.05,
                color: "#1E2A36",
                margin: 0,
                letterSpacing: "-0.03em",
              }}
            >
              Как я могу{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#E67E22",
                }}
              >
                вам помочь
              </span>
            </h2>
          </div>

          {/* Карточки услуг */}
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              marginBottom: 48,
            }}
          >
            {/* КАРТОЧКА 1 — Консультация */}
            <article
              className="service-card service-light"
              style={{
                position: "relative",
                background: "#ffffff",
                borderRadius: 32,
                padding: "48px 44px",
                border: "1px solid #F0EBE0",
                boxShadow: "0 4px 30px rgba(30, 42, 54, 0.05)",
                transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Тип */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#FFF3E8",
                  color: "#C06010",
                  borderRadius: 100,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  width: "fit-content",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 8, color: "#E67E22" }}>●</span>
                Разовая встреча
              </span>

              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#1E2A36",
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Индивидуальная
                <br />
                консультация
              </h3>

              {/* Цена */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  paddingBottom: 28,
                  marginBottom: 28,
                  borderBottom: "1px dashed #E8DFCD",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: 52,
                    color: "#1E2A36",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  5 000 ₽
                </span>
                <span style={{ color: "#7F8C8D", fontSize: 15 }}>
                  за 1,5 часа
                </span>
              </div>

              {/* Выгоды */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flex: 1,
                }}
              >
                {[
                  "Разбор вашей текущей финансовой картины",
                  "Фокус на одном ключевом запросе",
                  "Чёткий план действий, с которого можно начать сразу",
                ].map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "#2C3E50",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#E8F5E9",
                        color: "#2E7D32",
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Кнопка */}
              <button
                onClick={() => alert("Настройте ссылку на Telegram/WhatsApp")}
                style={{
                  width: "100%",
                  height: 56,
                  background: "transparent",
                  color: "#E67E22",
                  border: "2px solid #E67E22",
                  borderRadius: 40,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
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
                Записаться на консультацию →
              </button>
            </article>

            {/* КАРТОЧКА 2 — Сопровождение (тёмная, премиум) */}
            <article
              className="service-card service-dark"
              style={{
                position: "relative",
                background:
                  "linear-gradient(165deg, #1E2A36 0%, #141B24 100%)",
                borderRadius: 32,
                padding: "48px 44px",
                border: "1px solid rgba(230, 126, 34, 0.2)",
                boxShadow: "0 30px 80px rgba(30, 42, 54, 0.25)",
                transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease",
                color: "#ffffff",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Рекомендовано */}
              <div
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "#E67E22",
                  color: "#ffffff",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "8px 14px",
                  borderRadius: 100,
                }}
              >
                ★ Рекомендую
              </div>

              {/* Декор свет */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -100,
                  right: -100,
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(230,126,34,0.18), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Тип */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(230, 126, 34, 0.12)",
                  color: "#F5B072",
                  borderRadius: 100,
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  width: "fit-content",
                  marginBottom: 24,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: 8, color: "#E67E22" }}>●</span>
                30 дней вместе
              </span>

              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                  color: "#ffffff",
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Месячное финансовое
                <br />
                сопровождение
              </h3>

              {/* Цена */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  paddingBottom: 28,
                  marginBottom: 20,
                  borderBottom: "1px dashed rgba(255,255,255,0.12)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: 52,
                    color: "#ffffff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  30 000 ₽
                </span>
                <span style={{ color: "#8A96A6", fontSize: 15 }}>
                  за 30 дней
                </span>
              </div>

              {/* Формат */}
              <p
                style={{
                  margin: "0 0 24px",
                  fontSize: 14,
                  color: "#8A96A6",
                  fontFamily: "'Roboto', sans-serif",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <strong style={{ color: "#E8EBEF" }}>Формат: </strong>
                переписка, голосовые, онлайн-встречи
              </p>

              {/* Выгоды */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  position: "relative",
                  zIndex: 1,
                  flex: 1,
                }}
              >
                {[
                  "Выстроенная базовая система денег",
                  "Понятные финансовые цели и план движения",
                  "Начатые или стабилизированные накопления",
                  "Меньше тревоги и больше контроля",
                ].map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "#E8EBEF",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(46, 125, 50, 0.25)",
                        color: "#81C784",
                        fontSize: 11,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Кнопка */}
              <button
                onClick={() => alert("Настройте ссылку на Telegram/WhatsApp")}
                style={{
                  width: "100%",
                  height: 56,
                  background: "#E67E22",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 40,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "'Manrope', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.01em",
                  boxShadow: "0 8px 28px rgba(230, 126, 34, 0.35)",
                  position: "relative",
                  zIndex: 1,
                }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.background = "#D35400";
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.background = "#E67E22";
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                Хочу на сопровождение →
              </button>
            </article>
          </div>

          {/* Ссылка-триггер */}
          <div
            style={{
              textAlign: "center",
              fontFamily: "'Roboto', sans-serif",
              fontSize: 16,
              color: "#5A6878",
            }}
          >
            Не знаете, что выбрать?{" "}
            <a
              href="#diagnostics"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById("diagnostics");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                color: "#E67E22",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1px solid #E67E22",
                paddingBottom: 2,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.target as HTMLAnchorElement).style.opacity = "0.7";
              }}
              onMouseLeave={e => {
                (e.target as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              Пройдите бесплатную диагностику →
            </a>
          </div>
        </div>
      </section>

      <Block6Reviews />
      <Block7Diagnostics />
      <Block8Guides />
      <Block9Faq />
      <Block10Cta />
      <Block11Footer />

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

        /* Блок 3 — адаптив */
        @media (max-width: 900px) {
          .block3-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .fog-visual {
            min-height: 360px !important;
          }
        }

        /* Блок 3 — анимации */
        .pain-row {
          opacity: 0;
          transform: translateX(-20px);
          animation: painSlideIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          transition: padding-left 0.3s ease, color 0.3s ease;
        }
        .pain-row:hover {
          padding-left: 12px !important;
          color: #ffffff !important;
        }
        .pain-row:hover .pain-text {
          text-decoration: line-through;
          text-decoration-color: rgba(230, 126, 34, 0.7);
          text-decoration-thickness: 2px;
        }
        @keyframes painSlideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulseFog {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }

        /* Блок 4 — адаптив */
        @media (max-width: 900px) {
          .expert-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .expert-grid > div:first-child {
            position: static !important;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        /* Блок 5 — услуги */
        .service-card:hover {
          transform: translateY(-8px);
        }
        .service-light:hover {
          box-shadow: 0 30px 60px rgba(230, 126, 34, 0.15) !important;
          border-color: #F0D0B0 !important;
        }
        .service-dark:hover {
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.35) !important;
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .service-card {
            padding: 36px 28px !important;
          }
        }

        /* Блок 6 — отзыв */
        @media (max-width: 800px) {
          .review-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .review-card {
            padding: 48px 32px !important;
          }
        }

        /* Блок 7 — диагностика */
        @media (max-width: 900px) {
          .diag-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }

        /* Блок 8 — гайды */
        .guide-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(230, 126, 34, 0.12);
          border-color: #F0D0B0 !important;
        }
        @media (max-width: 900px) {
          .guides-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Блок 9 — FAQ */
        @media (max-width: 800px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }

        /* Инпуты формы */
        input:focus, textarea:focus {
          border-color: #E67E22 !important;
        }
      `}</style>
    </div>
  );
};

export default Index;