import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const saved = localStorage.getItem('alex-theme')
    if (saved === 'light') root.classList.add('light')
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const isLight = root.classList.contains('light')
    const next = isLight ? 'dark' : 'light'
    if (next === 'light') root.classList.add('light')
    else root.classList.remove('light')
    localStorage.setItem('alex-theme', next)
  }

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <div className="top-bar">
            <span className="logo">
              Alex<span className="accent">.</span>
            </span>
            <button
              id="theme-toggle"
              className="theme-toggle"
              aria-label="Đổi giao diện"
              onClick={toggleTheme}
            >
              <span className="icon">☾</span>
              <span className="label">Theme</span>
            </button>
          </div>

          <h1>
            Xin chào, mình là <span className="accent">Alex</span>
          </h1>
          <p className="subtitle">
            Senior Software Engineer – xây dựng hệ thống ổn định, dễ mở rộng và có tác động
            thực tế.
          </p>
          <div className="hero-actions">
            <a href="#about" className="btn primary">
              Giới thiệu
            </a>
            <a href="#experience" className="btn ghost">
              Kinh nghiệm
            </a>
            <a href="#contact" className="btn ghost">
              Liên hệ
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>Về mình</h2>
          <p>
            Mình là Alex, một Senior Software Engineer tập trung vào việc thiết kế và phát triển các hệ
            thống web có khả năng mở rộng, dễ bảo trì và bền vững trong môi trường production. Mình ưu
            tiên code rõ ràng, kiến trúc đơn giản nhưng có chủ đích, và quy trình triển khai đáng tin cậy.
          </p>
          <p>
            Mình quen làm việc với team đa chức năng (product, design, infra), thích chia sẻ kiến thức,
            review code và hỗ trợ các bạn developer junior/mid phát triển sự nghiệp một cách bài bản.
          </p>

          <div className="stack">
            <h3>Tech stack gần đây</h3>
            <div className="stack-badges">
              <span className="badge">TypeScript</span>
              <span className="badge">Node.js</span>
              <span className="badge">React / Next.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Docker</span>
              <span className="badge">AWS</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Kinh nghiệm làm việc</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Senior Software Engineer</h3>
                  <span className="timeline-meta">2022 – hiện tại · Sản phẩm SaaS</span>
                </div>
                <p>
                  Thiết kế và triển khai backend service, tối ưu database, xây dựng pipeline CI/CD và làm
                  việc trực tiếp với team sản phẩm để ship tính năng cho hàng nghìn người dùng.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Engineer</h3>
                  <span className="timeline-meta">2019 – 2022 · Công ty công nghệ</span>
                </div>
                <p>
                  Phát triển các ứng dụng web full-stack, tham gia refactor hệ thống cũ, chuẩn hoá coding
                  style, bổ sung test và tài liệu kỹ thuật cho team.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Intern / Junior Developer</h3>
                  <span className="timeline-meta">Trước 2019</span>
                </div>
                <p>
                  Bắt đầu với các dự án nhỏ, tự học thêm về kiến trúc hệ thống, clean code và những thói
                  quen tốt khi làm việc với codebase dài hạn.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Giá trị mình mang lại</h2>
          <div className="grid">
            <div className="card">
              <h3>System &amp; Backend Design</h3>
              <p>
                Thiết kế API, luồng dữ liệu và kiến trúc backend rõ ràng, ưu tiên tính đơn giản, dễ mở rộng
                và khả năng quan sát (logging, metrics, alerting).
              </p>
            </div>
            <div className="card">
              <h3>Delivery ổn định</h3>
              <p>
                Thiết lập pipeline CI/CD, review code kỹ, tự động hoá kiểm tra cơ bản để giảm rủi ro khi
                release tính năng mới.
              </p>
            </div>
            <div className="card">
              <h3>Mentoring &amp; Teamwork</h3>
              <p>
                Hỗ trợ định hướng kỹ thuật, review code và chia sẻ kinh nghiệm cho các bạn dev junior/mid,
                giúp team đi cùng một hướng và tránh lặp lại lỗi cũ.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Một vài thứ mình từng làm</h2>
          <div className="grid">
            <article className="card">
              <h3>Nền tảng web cho sản phẩm SaaS</h3>
              <p>
                Tham gia thiết kế kiến trúc, xây dựng backend API và tích hợp với frontend. Tối ưu hiệu năng,
                phân tách service và thiết lập CI/CD để release nhanh nhưng vẫn an toàn.
              </p>
            </article>
            <article className="card">
              <h3>Hệ thống xử lý dữ liệu &amp; báo cáo</h3>
              <p>
                Xây dựng pipeline xử lý dữ liệu, lưu trữ và tạo các báo cáo phục vụ team business. Tập trung
                vào tính ổn định, khả năng mở rộng và dễ theo dõi khi có sự cố.
              </p>
            </article>
            <article className="card">
              <h3>Mentoring &amp; kỹ thuật nội bộ</h3>
              <p>
                Tham gia review code, định hướng kỹ thuật cho một số bạn developer trong team. Chuẩn hoá một
                số guideline về coding style, testing và tài liệu kỹ thuật.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Liên hệ</h2>
          <p>Nếu muốn kết nối hoặc trao đổi thêm, bạn có thể tìm mình qua:</p>
          <ul className="contact-list">
            <li>
              Email: <a href="mailto:alex@example.com">alex@example.com</a>
            </li>
            <li>
              Telegram:{' '}
              <a href="https://t.me/tistst" target="_blank" rel="noreferrer">
                @tistst
              </a>
            </li>
            <li>
              GitHub:{' '}
              <a href="https://github.com/den3110" target="_blank" rel="noreferrer">
                https://github.com/den3110
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Alex.</p>
      </footer>
    </>
  )
}

export default App
