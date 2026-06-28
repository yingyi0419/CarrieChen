import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="site-name">Carrie Chen 個人網站</div>

        <nav className="site-nav">
          <a href="#home">首頁</a>
          <a href="#about">關於我</a>
          <a href="#results">實務成果</a>
          <a href="#method">工作方法</a>
          <a href="#contact">聯絡我</a>
        </nav>
      </header>

      <main>
      <section id="home" className="hero-section">
        <p className="eyebrow">營運幕僚型資料報表整理與流程改善實務者</p>

        <h1>
          讓營運資料更清楚，
          <br />
          讓報表成為決策依據
        </h1>

        <p className="hero-description">
          我專注於營運資料整理、報表設計與流程改善，
          協助團隊將分散資料轉換成可更新、可分析、可追蹤的管理成果。
        </p>

        <div className="hero-actions">
          <a href="#results">查看我的實務成果</a>
          <a href="#about">了解我的專業經驗</a>
        </div>

        <div className="hero-highlights">
          <div>
            <strong>資料整理</strong>
            <span>清楚化</span>
          </div>
          <div>
            <strong>報表流程</strong>
            <span>標準化</span>
          </div>
          <div>
            <strong>分析成果</strong>
            <span>可回報化</span>
          </div>
        </div>
      </section>

      <section className="content-section resources-section">
        <p className="section-label">Resources</p>
        <h2>工具與資源基礎</h2>
        <p>
          我使用實務工作中常見的資料工具，協助將分散資料整理成可更新、可分析、可回報的成果。
        </p>

        <div className="resource-grid">
          <div className="resource-card">
            <h3>Excel</h3>
            <p>資料整理、公式設計、報表架構、檢查邏輯與日常追蹤表。</p>
          </div>

          <div className="resource-card">
            <h3>Power Query</h3>
            <p>多來源資料清理、自動彙整、欄位標準化與減少重複作業。</p>
          </div>

          <div className="resource-card">
            <h3>Power BI</h3>
            <p>營運資料視覺化、KPI 追蹤、趨勢觀察與互動式報表規劃。</p>
          </div>

          <div className="resource-card">
            <h3>PowerPoint</h3>
            <p>主管簡報、活動戰報、會議資料與重點視覺化整理。</p>
          </div>

          <div className="resource-card">
            <h3>AI 工具</h3>
            <p>協助公式發想、分析架構、文案整理、流程改善與內容草稿。</p>
          </div>

          <div className="resource-card">
            <h3>工作方法</h3>
            <p>原始資料清理、彙總、比較、說明、輸出與追蹤的標準流程。</p>
          </div>
        </div>
      </section>

      <section className="content-section work-section">
        <p className="section-label">What I Can Support</p>
        <h2>可協助的工作類型</h2>
        <p>
          我協助將分散資料、重複報表與營運追蹤需求，整理成清楚、可更新、可回報的工作成果。
        </p>

        <div className="work-cards">
          <div className="work-card">
            <h3>營運資料整理</h3>
            <p>
              協助處理原始資料分散、欄位不一致、格式混亂等問題，建立可後續分析的資料基礎。
            </p>
          </div>

          <div className="work-card">
            <h3>報表流程設計</h3>
            <p>
              將每次都要手動重做的報表，整理成可更新、可檢查、可延用的報表流程。
            </p>
          </div>

          <div className="work-card">
            <h3>營運分析支援</h3>
            <p>
              將 KPI、區域、門市、通路與活動表現整理成主管看得懂的結論與追蹤重點。
            </p>
          </div>

          <div className="work-card">
            <h3>戰報與簡報輸出</h3>
            <p>
              協助將營運數據轉成週誌、戰報、Mail、簡報或資訊圖表，讓重點更容易被理解。
            </p>
          </div>

          <div className="work-card">
            <h3>跨部門資料彙整</h3>
            <p>
              協助彙整來自不同部門、區域或門市的回覆資料，整理成統一格式與可追蹤清單。
            </p>
          </div>

          <div className="work-card">
            <h3>流程改善案例</h3>
            <p>
              使用 Excel、Power Query 與 AI 工具輔助重複工作，降低人工整理時間與報表錯誤風險。
            </p>
          </div>
        </div>
      </section>

    <section id="results" className="content-section results-section">
      <p className="section-label">Results</p>
      <h2>實務成果</h2>
      <p>
        以下先以可公開說明的方式，整理 Carrie 在營運資料、報表流程與分析輸出上的代表成果。
      </p>

      <div className="result-cards">
        <div className="result-card">
          <span className="result-tag">Report</span>
          <h3>營運報表整理</h3>
          <p>
            將不同來源的營運資料整理成統一欄位與固定格式，協助主管快速查看區域、門市與通路表現。
          </p>
          <ul>
            <li>整理分散原始資料</li>
            <li>建立可更新報表架構</li>
            <li>降低人工整理錯誤風險</li>
          </ul>
        </div>

        <div className="result-card">
          <span className="result-tag">Analysis</span>
          <h3>活動戰報分析</h3>
          <p>
            將活動、新品或節慶檔期數據整理成重點摘要，協助團隊掌握表現差異、可能原因與後續行動。
          </p>
          <ul>
            <li>彙總活動表現</li>
            <li>比較區域與通路差異</li>
            <li>整理主管可讀結論</li>
          </ul>
        </div>

        <div className="result-card">
          <span className="result-tag">Process</span>
          <h3>Power Query 流程改善</h3>
          <p>
            透過 Power Query 整理重複性資料流程，減少複製貼上與格式調整時間，讓報表更新更穩定。
          </p>
          <ul>
            <li>標準化資料清理流程</li>
            <li>減少重複手動作業</li>
            <li>提升報表維護效率</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="content-section work-section">
    <p className="section-label">What I Can Support</p>
    <h2>可協助的工作類型</h2>
    <p>
      我協助將分散資料、重複報表與營運追蹤需求，整理成清楚、可更新、可回報的工作成果。
    </p>

    <div className="work-cards">
      <div className="work-card">
        <h3>營運資料整理</h3>
        <p>
          協助處理原始資料分散、欄位不一致、格式混亂等問題，建立可後續分析的資料基礎。
        </p>
      </div>

      <div className="work-card">
        <h3>報表流程設計</h3>
        <p>
          將每次都要手動重做的報表，整理成可更新、可檢查、可延用的報表流程。
        </p>
      </div>

      <div className="work-card">
        <h3>營運分析支援</h3>
        <p>
          將 KPI、區域、門市、通路與活動表現整理成主管看得懂的結論與追蹤重點。
        </p>
      </div>

      <div className="work-card">
        <h3>戰報與簡報輸出</h3>
        <p>
          協助將營運數據轉成週誌、戰報、Mail、簡報或資訊圖表，讓重點更容易被理解。
        </p>
      </div>

      <div className="work-card">
        <h3>跨部門資料彙整</h3>
        <p>
          協助彙整來自不同部門、區域或門市的回覆資料，整理成統一格式與可追蹤清單。
        </p>
      </div>

      <div className="work-card">
        <h3>流程改善案例</h3>
        <p>
          使用 Excel、Power Query 與 AI 工具輔助重複工作，降低人工整理時間與報表錯誤風險。
        </p>
      </div>
    </div>
  </section>

    <section id="method" className="content-section articles-section">
      <p className="section-label">Working Notes</p>
      <h2>工作方法筆記</h2>
      <p>
        我將日常營運幕僚工作整理成可理解、可複製、可檢查的方法，讓資料從混亂變成可回報的成果。
      </p>

      <div className="article-cards">
        <article className="article-card">
          <h3>資料整理方法</h3>
          <p>
            從欄位標準化、格式檢查、資料清理到異常值檢核，先建立乾淨可用的資料基礎。
          </p>
          <span>資料清理｜欄位統一｜異常檢核</span>
        </article>

        <article className="article-card">
          <h3>報表流程筆記</h3>
          <p>
            將原始資料、計算區、輸出區與檢查區分開，讓報表可以更新、可以檢查、可以延用。
          </p>
          <span>報表架構｜更新流程｜檢查邏輯</span>
        </article>

        <article className="article-card">
          <h3>營運分析輸出</h3>
          <p>
            將數據摘要、差異比較、可能原因、建議行動與追蹤指標整理成主管看得懂的結論。
          </p>
          <span>KPI 追蹤｜差異分析｜行動建議</span>
        </article>
      </div>
    </section>

      <section id="contact" className="content-section contact-section">
        <p className="section-label">Contact</p>
        <h2>聯絡我</h2>
        <p>
          如果你想了解我如何協助營運資料整理、報表流程設計、分析輸出或流程改善，
          歡迎透過以下方式聯絡我。
        </p>

        <div className="contact-links">
          <a href="mailto:your-email@example.com">Email</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <p className="contact-note">
          ※ 第一版先使用佔位連結，之後再替換成正式 Email 與社群網址。
        </p>
      </section>
      </main>

      <footer className="site-footer">
        <div>
          <h2>Carrie 個人品牌網站</h2>
          <p>把資料整理成報表，把報表轉化成行動依據。</p>
        </div>

        <p className="footer-copy">© 2026 Carrie. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App