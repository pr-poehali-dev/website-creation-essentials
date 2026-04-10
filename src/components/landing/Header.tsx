import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Услуги", id: "services" },
    { label: "Обо мне", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Контакты", id: "contacts" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "12px 32px" : "20px 32px",
          background: scrolled ? "rgba(255, 249, 240, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(230, 126, 34, 0.1)" : "1px solid transparent",
          transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Логотип */}
          <a
            href="#top"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #E67E22, #D35400)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 800,
                fontSize: 18,
                boxShadow: "0 6px 18px rgba(230, 126, 34, 0.3)",
              }}
            >
              Т
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#1E2A36",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                Татьяна
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#7F8C8D",
                  fontFamily: "'Roboto', sans-serif",
                  letterSpacing: "0.02em",
                  marginTop: 2,
                }}
              >
                финансовый наставник
              </div>
            </div>
          </a>

          {/* Меню */}
          <nav className="header-nav" style={{ display: "flex", gap: 36 }}>
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={e => {
                  e.preventDefault();
                  go(l.id);
                }}
                className="nav-link"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#1E2A36",
                  textDecoration: "none",
                  position: "relative",
                  padding: "6px 0",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s ease",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + гамбургер */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => go("diagnostics")}
              className="header-cta"
              style={{
                height: 44,
                padding: "0 22px",
                background: "#E67E22",
                color: "#ffffff",
                border: "none",
                borderRadius: 40,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "'Manrope', sans-serif",
                cursor: "pointer",
                letterSpacing: "0.01em",
                boxShadow: "0 6px 18px rgba(230, 126, 34, 0.3)",
                transition: "all 0.25s ease",
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
              Диагностика →
            </button>

            {/* Burger */}
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
              style={{
                display: "none",
                width: 44,
                height: 44,
                background: "transparent",
                border: "1.5px solid #E8DFCD",
                borderRadius: 12,
                cursor: "pointer",
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#1E2A36",
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                }}
              />
              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#1E2A36",
                  borderRadius: 2,
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#1E2A36",
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 72,
          left: 16,
          right: 16,
          zIndex: 99,
          background: "#ffffff",
          borderRadius: 20,
          boxShadow: "0 20px 60px rgba(30, 42, 54, 0.18)",
          border: "1px solid #F0EBE0",
          padding: menuOpen ? "20px" : "0 20px",
          maxHeight: menuOpen ? 400 : 0,
          opacity: menuOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="mobile-drawer"
      >
        {links.map(l => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={e => {
              e.preventDefault();
              go(l.id);
            }}
            style={{
              display: "block",
              padding: "14px 8px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#1E2A36",
              textDecoration: "none",
              borderBottom: "1px solid #F4EDE0",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #E67E22;
          transition: width 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .nav-link:hover {
          color: #E67E22 !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 860px) {
          .header-nav {
            display: none !important;
          }
          .burger {
            display: flex !important;
          }
        }
        @media (max-width: 560px) {
          .header-cta {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
