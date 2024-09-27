import CardArticle from "./CardArticle";

export default function NewsArticle() {
  return (
    <section className="min-h-screen h-full pb-28">
      <div className="flex flex-col justify-center items-center gap-6 mb-16">
        <p className="text-[#B9FD50] text-center">BLOGS</p>
        <p className="font-bold text-5xl text-center">News & Articles</p>
        <p className="text-lg text-center opacity-80 w-1/3">
          Best Articles to get started
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-10/12 mx-auto">
        <CardArticle
          imageSrc="/images/1_article.svg"
          category="BRANDING"
          title="What is branding, and why do we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <CardArticle
          imageSrc="/images/2_article.svg"
          category="TIKTOK"
          title="What is the branding, and what we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <CardArticle
          imageSrc="/images/3_article.svg"
          category="LOGO DESIGN"
          title="What is branding, and why do we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <CardArticle
          imageSrc="/images/4_article.svg"
          category="FB"
          title="What is branding, and why do we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <CardArticle
          imageSrc="/images/5_article.svg"
          category="AI"
          title="What is branding, and why do we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
        <CardArticle
          imageSrc="/images/6_article.svg"
          category="NFT"
          title="What is branding, and why do we need it?"
          description="On the other hand, we denounce with righteous indignation and…"
        />
      </div>
    </section>
  );
}
