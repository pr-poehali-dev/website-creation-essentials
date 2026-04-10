import { useState } from "react";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const notify = (msg: string) => alert(msg);

export const Block6Reviews = () => (
  <section
    style={{
      background: "#FBFAF7",
      padding: "140px 32px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Фоновая цифра */}
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
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      06
    </div>

    <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
      {/* Заголовок */}
      <div style={{ textAlign: "center", marginBottom: 72 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 32, height: 2, background: "#E67E22" }} />
          <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#E67E22", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Отзывы
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
          Реальные результаты{" "}
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "#E67E22" }}>
            моих клиентов
          </span>
        </h2>
      </div>

      {/* Большая карточка отзыва */}
      <article
        style={{
          background: "#ffffff",
          borderRadius: 32,
          padding: "72px 64px",
          border: "1px solid #F0EBE0",
          boxShadow: "0 30px 80px rgba(30, 42, 54, 0.06)",
          position: "relative",
          overflow: "hidden",
        }}
        className="review-card"
      >
        {/* Огромная кавычка */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: -60,
            left: 40,
            fontFamily: "'Manrope', sans-serif",
            fontSize: 280,
            fontWeight: 800,
            color: "#FBE8D0",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          “
        </span>

        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 220px", gap: 48, alignItems: "center" }} className="review-grid">
          <div>
            <p
              style={{
                fontFamily: "'Cormorant', serif",
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.5vw, 30px)",
                lineHeight: 1.5,
                color: "#2C3E50",
                margin: "0 0 32px",
                fontWeight: 400,
              }}
            >
              До работы с Татьяной я не понимала, куда уходит зарплата. Через месяц после консультации у меня появилась финансовая подушка 50 000 ₽ и я закрыла микрозайм. Спасибо за бережный подход!
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #E67E22, #D35400)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                }}
              >
                А
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 17, color: "#1E2A36" }}>
                  Анна
                </p>
                <p style={{ margin: 0, color: "#7F8C8D", fontSize: 14 }}>
                  Дизайнер · Москва
                </p>
              </div>
            </div>
          </div>

          {/* Результат */}
          <div
            style={{
              background: "linear-gradient(160deg, #FFF3E8, #FFE4C4)",
              borderRadius: 20,
              padding: "24px 20px",
              textAlign: "center",
            }}
            className="review-stat"
          >
            <p style={{ margin: 0, fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#C06010", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              Результат
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 800,
                fontSize: 34,
                color: "#1E2A36",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              +50 000 ₽
            </p>
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "#5A6878" }}>
              подушка за 1 месяц
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export const Block7Diagnostics = () => {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="diagnostics"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FFF9F0 100%)",
        padding: "140px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 72,
          alignItems: "start",
        }}
        className="diag-grid"
      >
        {/* LEFT */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E67E22" }} />
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#E67E22", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Бесплатно
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.05,
              color: "#1E2A36",
              margin: "0 0 24px",
              letterSpacing: "-0.03em",
            }}
          >
            Не уверены,{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#E67E22" }}>
              с чего начать?
            </span>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "#5A6878",
              margin: "0 0 36px",
              maxWidth: 460,
            }}
          >
            Вы описываете свою ситуацию текстом — я даю честный взгляд со стороны,
            говорю, нужен ли вам платный формат или справитесь сами. Без спама и продаж.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Взгляд со стороны на вашу финансовую картину",
              "Понимание точек роста",
              "Ясность, какой шаг следующий",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 16, color: "#1E2A36" }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#E8F5E9",
                    color: "#2E7D32",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
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
        </div>

        {/* RIGHT — форма */}
        <form
          onSubmit={e => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3500);
          }}
          style={{
            background: "#ffffff",
            borderRadius: 32,
            padding: "44px 40px",
            border: "1px solid #F0EBE0",
            boxShadow: "0 30px 80px rgba(30, 42, 54, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <input
            type="text"
            placeholder="Ваше имя"
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Куда прислать ответ? (email или Telegram)"
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Опишите вашу финансовую ситуацию и запрос"
            rows={4}
            required
            style={{ ...inputStyle, resize: "vertical", minHeight: 110, fontFamily: "'Roboto', sans-serif" }}
          />
          <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12, color: "#7F8C8D", lineHeight: 1.5 }}>
            <input type="checkbox" required style={{ marginTop: 3, accentColor: "#E67E22" }} />
            Я согласен на обработку персональных данных
          </label>
          <button
            type="submit"
            style={{
              height: 56,
              background: sent ? "#2E7D32" : "#E67E22",
              color: "#ffffff",
              border: "none",
              borderRadius: 40,
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
              cursor: "pointer",
              transition: "all 0.25s ease",
              boxShadow: "0 8px 28px rgba(230, 126, 34, 0.35)",
              marginTop: 4,
            }}
            onMouseEnter={e => !sent && ((e.target as HTMLButtonElement).style.background = "#D35400")}
            onMouseLeave={e => !sent && ((e.target as HTMLButtonElement).style.background = "#E67E22")}
          >
            {sent ? "✓ Отправлено" : "Отправить на диагностику"}
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  height: 52,
  padding: "0 20px",
  background: "#FBFAF7",
  border: "1.5px solid #F0EBE0",
  borderRadius: 16,
  fontSize: 15,
  fontFamily: "'Roboto', sans-serif",
  color: "#1E2A36",
  outline: "none",
  transition: "border-color 0.2s ease",
};

export const Block8Guides = () => {
  const guides = [
    {
      title: "Финансовая подушка безопасности",
      desc: "Как собрать подушку, если доход нестабильный.",
      price: "99 ₽",
      old: "390 ₽",
      btn: "Купить",
      icon: "🛟",
      accent: true,
    },
    {
      title: "Практичный гид по кэшбэку",
      desc: "Возвращайте до 10 000 ₽ в месяц без усилий.",
      price: "390 ₽",
      old: null,
      btn: "Купить",
      icon: "💳",
      accent: false,
    },
    {
      title: "Как жить комфортнее, а тратить меньше",
      desc: "Бережные приёмы оптимизации расходов.",
      price: "Бесплатно",
      old: null,
      btn: "Скачать",
      icon: "🌿",
      accent: false,
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "140px 32px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E67E22" }} />
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#E67E22", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Гайды
            </span>
            <div style={{ width: 32, height: 2, background: "#E67E22" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.05,
              color: "#1E2A36",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Полезные материалы{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#E67E22" }}>
              для старта
            </span>
          </h2>
        </div>

        <div
          className="guides-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {guides.map((g, i) => (
            <article
              key={i}
              className="guide-card"
              style={{
                background: "#FBFAF7",
                borderRadius: 28,
                padding: "36px 32px",
                border: "1px solid #F0EBE0",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.3s ease",
                overflow: "hidden",
              }}
            >
              {g.accent && (
                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "#E67E22",
                    color: "#ffffff",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "6px 12px",
                    borderRadius: 100,
                  }}
                >
                  −75%
                </div>
              )}

              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #FFF3E0, #FFE4C4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  marginBottom: 24,
                }}
              >
                {g.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#1E2A36",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {g.title}
              </h3>
              <p style={{ margin: "0 0 24px", fontSize: 14, color: "#6B7A8A", lineHeight: 1.55, flex: 1 }}>
                {g.desc}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: "#1E2A36",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {g.price}
                </span>
                {g.old && (
                  <span style={{ color: "#B0B8C0", fontSize: 16, textDecoration: "line-through" }}>
                    {g.old}
                  </span>
                )}
              </div>

              <button
                onClick={() => notify("Подключите оплату/скачивание для этого гайда")}
                style={{
                  height: 48,
                  background: g.accent ? "#E67E22" : "transparent",
                  color: g.accent ? "#ffffff" : "#E67E22",
                  border: g.accent ? "none" : "2px solid #E67E22",
                  borderRadius: 40,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "'Manrope', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={e => {
                  (e.target as HTMLButtonElement).style.background = "#E67E22";
                  (e.target as HTMLButtonElement).style.color = "#ffffff";
                }}
                onMouseLeave={e => {
                  (e.target as HTMLButtonElement).style.background = g.accent ? "#E67E22" : "transparent";
                  (e.target as HTMLButtonElement).style.color = g.accent ? "#ffffff" : "#E67E22";
                }}
              >
                {g.btn} →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Block9Faq = () => {
  const faqs = [
    {
      q: "У меня нерегулярный доход, подойдёт ли сопровождение?",
      a: "Да, система строится под вашу реальность с учётом сезонности и нестабильных поступлений. Мы не будем заставлять вас откладывать фиксированную сумму, если её нет.",
    },
    {
      q: "А если я не смогу соблюдать план?",
      a: "Я сопровождаю вас, корректирую курс и помогаю выработать привычки без насилия над собой. Вы не остаётесь один с табличкой.",
    },
    {
      q: "Чем вы отличаетесь от других финансовых консультантов?",
      a: "Я работаю с фрилансерами и людьми с нестабильным доходом. Никакой жёсткой экономии, только бережный подход. И бесплатная диагностика без звонка — текстом.",
    },
    {
      q: "Сколько длится консультация?",
      a: "Индивидуальная консультация — 1,5 часа в Zoom или очно (по договорённости).",
    },
    {
      q: "Есть ли гарантия возврата денег?",
      a: "Если после первой встречи в рамках сопровождения вы поймёте, что формат вам не подходит, я верну деньги за неиспользованные дни. Честно и без вопросов.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: "#FBFAF7",
        padding: "140px 32px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: 72,
          alignItems: "start",
        }}
        className="faq-grid"
      >
        <div style={{ position: "sticky", top: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E67E22" }} />
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#E67E22", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05,
              color: "#1E2A36",
              margin: "0 0 20px",
              letterSpacing: "-0.03em",
            }}
          >
            Отвечаю на{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#E67E22" }}>
              частые вопросы
            </span>
          </h2>
          <p style={{ margin: 0, color: "#7F8C8D", fontSize: 15, lineHeight: 1.6 }}>
            Не нашли свой вопрос? Напишите в Telegram — отвечаю лично.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? "1px solid #E8DFCD" : "none",
                  borderBottom: "1px solid #E8DFCD",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "28px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: "#1E2A36",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span>{item.q}</span>
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: isOpen ? "#E67E22" : "#FFF3E8",
                      color: isOpen ? "#ffffff" : "#E67E22",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      fontWeight: 700,
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), padding 0.3s ease",
                    paddingBottom: isOpen ? 28 : 0,
                  }}
                >
                  <p style={{ margin: 0, color: "#5A6878", fontSize: 15, lineHeight: 1.65, maxWidth: 560 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Block10Cta = () => (
  <section
    id="contacts"
    style={{
      background: "linear-gradient(165deg, #1E2A36 0%, #141B24 100%)",
      padding: "140px 32px",
      position: "relative",
      overflow: "hidden",
      color: "#ffffff",
    }}
  >
    {/* Декор свет */}
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(230,126,34,0.18), transparent 60%)",
        pointerEvents: "none",
      }}
    />

    <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <div style={{ width: 32, height: 2, background: "#E67E22" }} />
        <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, fontWeight: 600, color: "#E67E22", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Пора начинать
        </span>
        <div style={{ width: 32, height: 2, background: "#E67E22" }} />
      </div>
      <h2
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(40px, 6vw, 72px)",
          lineHeight: 1.05,
          color: "#ffffff",
          margin: "0 0 24px",
          letterSpacing: "-0.03em",
        }}
      >
        Хватит гадать,
        <br />
        <span style={{ fontStyle: "italic", fontWeight: 400, color: "#E67E22" }}>
          пора действовать
        </span>
      </h2>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.65,
          color: "#A8B4C0",
          margin: "0 auto 48px",
          maxWidth: 560,
        }}
      >
        Начните с бесплатной диагностики — это ни к чему не обязывает,
        но даёт ясность.
      </p>

      <button
        onClick={() => scrollToId("diagnostics")}
        style={{
          height: 68,
          padding: "0 48px",
          background: "#E67E22",
          color: "#ffffff",
          border: "none",
          borderRadius: 50,
          fontSize: 17,
          fontWeight: 700,
          fontFamily: "'Manrope', sans-serif",
          cursor: "pointer",
          letterSpacing: "0.01em",
          boxShadow: "0 20px 50px rgba(230, 126, 34, 0.4)",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={e => {
          (e.target as HTMLButtonElement).style.background = "#D35400";
          (e.target as HTMLButtonElement).style.transform = "translateY(-3px)";
          (e.target as HTMLButtonElement).style.boxShadow = "0 28px 60px rgba(230, 126, 34, 0.5)";
        }}
        onMouseLeave={e => {
          (e.target as HTMLButtonElement).style.background = "#E67E22";
          (e.target as HTMLButtonElement).style.transform = "translateY(0)";
          (e.target as HTMLButtonElement).style.boxShadow = "0 20px 50px rgba(230, 126, 34, 0.4)";
        }}
      >
        Пройти диагностику →
      </button>

      {/* Контакты */}
      <div
        style={{
          marginTop: 56,
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Telegram", icon: "✈", sub: "@finansy_frilansera" },
          { label: "WhatsApp", icon: "◎", sub: "+7 (XXX) XXX-XX-XX" },
          { label: "Email", icon: "✉", sub: "tanya@example.com" },
        ].map((c, i) => (
          <a
            key={i}
            href="#"
            onClick={e => {
              e.preventDefault();
              notify("Настройте ссылку контакта");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 20px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: 16,
              textDecoration: "none",
              transition: "all 0.25s ease",
              minWidth: 220,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(230, 126, 34, 0.1)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(230, 126, 34, 0.3)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255, 255, 255, 0.04)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <span style={{ fontSize: 18, color: "#E67E22" }}>{c.icon}</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, color: "#ffffff" }}>
                {c.label}
              </div>
              <div style={{ fontSize: 12, color: "#7F8C8D" }}>{c.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export const Block11Footer = () => (
  <footer
    style={{
      background: "#0E141B",
      padding: "56px 32px 40px",
      color: "#7F8C8D",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 32,
        flexWrap: "wrap",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            color: "#ffffff",
          }}
        >
          Татьяна
        </p>
        <p style={{ margin: "4px 0 0", fontSize: 13 }}>
          Финансовый наставник · © 2026
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            notify("Настройте ссылку на Telegram-канал");
          }}
          style={{ color: "#A8B4C0", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = "#E67E22")}
          onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = "#A8B4C0")}
        >
          Telegram-канал @finansy_frilansera
        </a>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            notify("Настройте ссылку на политику конфиденциальности");
          }}
          style={{ color: "#A8B4C0", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = "#E67E22")}
          onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = "#A8B4C0")}
        >
          Политика конфиденциальности
        </a>
      </div>

      <div style={{ fontSize: 13, textAlign: "right" }}>
        <p style={{ margin: 0 }}>Самозанятость / ИП</p>
        <p style={{ margin: "4px 0 0", color: "#5A6878" }}>
          по факту деятельности
        </p>
      </div>
    </div>
  </footer>
);

export default {
  Block6Reviews,
  Block7Diagnostics,
  Block8Guides,
  Block9Faq,
  Block10Cta,
  Block11Footer,
};