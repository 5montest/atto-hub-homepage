import BrandMark from "@/components/BrandMark";
import ProductScreens from "@/components/ProductScreens";

const description =
  "ATENELA（アテネラ）は個人でアプリを開発しています。順番待ちツール Ato と、イベントでの運用実績を紹介します。";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ATENELA",
            alternateName: "アテネラ",
            url: "https://atto-hub.com",
            inLanguage: "ja-JP",
            description,
          }),
        }}
      />
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="ATENELA トップ"><BrandMark />ATENELA</a>
        <nav aria-label="メインナビゲーション">
          <a href="#ato">Ato</a>
          <a href="#about">アテネラについて</a>
        </nav>
      </header>
      <main id="main">
        <div className="intro wrap">
          <h1>個人でアプリを作っています。</h1>

        </div>

        <section id="ato" className="product wrap" aria-labelledby="ato-heading">
          <div className="product-heading">
            <h2 id="ato-heading" className="product-name">Ato<span>アト</span></h2>
            <p className="product-title">QRコードで受付する<br />順番待ちツール。</p>
          </div>
          <ProductScreens />
          <div className="product-details">
            <p className="product-description">
              イベントやお店の順番待ちを、スマホのブラウザーで受け付けます。

              アプリのインストール・ログインは不要です。
            </p>
            <a className="button" href="https://ato.atto-hub.com" target="_blank" rel="noopener noreferrer">
              Atoを開く
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 4h6v6M20 4l-9 9M10 4H4v16h16v-6" /></svg>
              <span className="sr-only">（新しいタブで開きます）</span>
            </a>
            <a className="record-link" href="#record">イベントでの運用実績を見る</a>
          </div>
        </section>

        <section id="record" className="field-note wrap" aria-labelledby="record-heading">
          <h2 id="record-heading">イベントでの運用実績</h2>
          <div className="record-body">

            <p>2026年、国内の大型ものづくりイベントにて、試食ブースの順番待ち管理にAtoを導入いただきました。<br />最大約10組の待ちが発生する中、イベント終了まで安定して運用されました。</p>
          </div>
        </section>

        <section id="about" className="about wrap" aria-labelledby="about-heading">
          <h2 id="about-heading">アテネラについて</h2>
          <div className="about-copy">
            <p>ATENELAは、身の回りで気になった不便をきっかけに、アプリを作っている個人開発の活動名です。</p>
            <p>名前のきっかけは、attention / attendの響き。技術を使う人に目を向けたい、という思いを込めた造語です。厳密な語源や、決まった意味はありません。</p>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="wordmark" href="#"><BrandMark />ATENELA</a>
        <div className="footer-links">
          <a href="https://ato.atto-hub.com/terms">Atoの利用規約</a>
          <a href="https://ato.atto-hub.com/privacy">プライバシー</a>
        </div>
        <small>© {new Date().getFullYear()} ATENELA</small>
      </footer>
    </>
  );
}
