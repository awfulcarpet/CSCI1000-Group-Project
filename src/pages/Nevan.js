export default function NevanPage() {
  const interests = [
    "Machine Learning",
    "Quant Finance",
    "Software Engineering",
    "Embedded Systems",
  ];

  const projects = [
    {
      name: "Chess Opening Explorer",
      blurb: "Browse and study chess openings move by move.",
    },
    {
      name: "JamBuster",
      blurb: "ML model that predicts traffic congestion.",
    },
    {
      name: "MetronomeV2",
      blurb: "Drumming coach that uses webcam pose tracking to check rhythm.",
    },
    {
      name: "Monte Carlo Option Pricing",
      blurb: "Pricing options by simulating thousands of price paths.",
    },
    {
      name: "ML Experiments",
      blurb: "Small projects for trying out new models and ideas.",
    },
  ];

  const learning = [
    "C++ data structures",
    "TypeScript",
    "AI agents",
    "Startup ideas",
  ];

  return (
    <div className="page">
      <title>About Nevan</title>
      <link rel="icon" href="/favicon.ico" />

      <main className="card">
        <div className="bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="bar-title">nevan@cu-boulder: ~</span>
        </div>

        <div className="content">
          <p className="prompt">
            <span className="sign">$</span> whoami
          </p>
          <h1 className="title">
            Hello, I am <span className="accent">Nevan</span>
            <span className="cursor">_</span>
          </h1>

          <p className="description">
            I'm a Computer Science student at CU Boulder interested in machine
            learning, quantitative finance, and software engineering.
          </p>

          <div className="tags">
            {interests.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>

          <p className="prompt">
            <span className="sign">$</span> cat recently.txt
          </p>
          <p className="recent">
            Recently, I've been exploring quantitative finance through CU
            Quants, learning more C++ and TypeScript, and working on UI/UX and
            testing at Mulongo Inc. I've also been getting back into machine
            learning and experimenting with AI project ideas.
          </p>

          <p className="prompt">
            <span className="sign">$</span> ls projects/
          </p>
          <div className="grid">
            {projects.map((p, i) => (
              <div className="project" key={p.name}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
              </div>
            ))}
          </div>

          <p className="prompt">
            <span className="sign">$</span> echo $CURRENTLY_LEARNING
          </p>
          <p className="learning">{learning.join("  ·  ")}</p>

          <a className="button" href="/">
            &larr; Back to Home Page
          </a>
        </div>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 3rem 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #0b0f14;
          background-image:
            radial-gradient(
              circle at 20% 10%,
              rgba(255, 176, 0, 0.08),
              transparent 40%
            ),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size:
            auto,
            32px 32px,
            32px 32px;
          color: #d7dde5;
        }

        .card {
          width: 100%;
          max-width: 56rem;
          background: #121821;
          border: 1px solid #243041;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
        }

        .bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1rem;
          background: #0f141b;
          border-bottom: 1px solid #243041;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
        }
        .red {
          background: #ff5f57;
        }
        .yellow {
          background: #febc2e;
        }
        .green {
          background: #28c840;
        }

        .bar-title {
          margin-left: 0.75rem;
          font-size: 0.85rem;
          color: #7d8a9c;
        }

        .content {
          padding: 2.5rem 3rem 3rem;
        }

        .prompt {
          margin: 2.25rem 0 0.75rem;
          font-size: 0.95rem;
          color: #7d8a9c;
        }
        .prompt:first-child {
          margin-top: 0;
        }

        .sign {
          color: #ffb000;
          margin-right: 0.4rem;
        }

        .title {
          margin: 0;
          font-size: 3.5rem;
          line-height: 1.1;
          color: #f2f5f8;
          letter-spacing: -0.02em;
        }

        .accent {
          color: #ffb000;
        }

        .cursor {
          color: #ffb000;
          margin-left: 0.15rem;
          animation: blink 1s steps(1) infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .description {
          margin: 1.25rem 0 0;
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 42rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.25rem;
        }

        .tag {
          font-size: 0.8rem;
          padding: 0.3rem 0.7rem;
          border: 1px solid rgba(255, 176, 0, 0.4);
          color: #ffcb57;
          border-radius: 999px;
          background: rgba(255, 176, 0, 0.06);
        }

        .recent {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
          padding-left: 1rem;
          border-left: 2px solid #ffb000;
          color: #c3cbd6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
          gap: 0.9rem;
        }

        .project {
          padding: 1.1rem 1.2rem;
          background: #0f141b;
          border: 1px solid #243041;
          border-radius: 10px;
          transition:
            border-color 0.15s ease,
            transform 0.15s ease;
        }

        .project:hover {
          border-color: #ffb000;
          transform: translateY(-2px);
        }

        .num {
          font-size: 0.75rem;
          color: #ffb000;
        }

        .project h3 {
          margin: 0.35rem 0 0.4rem;
          font-size: 1.05rem;
          color: #f2f5f8;
        }

        .project p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #9aa6b6;
        }

        .learning {
          margin: 0;
          color: #c3cbd6;
        }

        .button {
          display: inline-block;
          margin-top: 2.75rem;
          padding: 0.7rem 1.2rem;
          font-weight: 600;
          color: #0b0f14;
          background: #ffb000;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s ease;
        }

        .button:hover,
        .button:focus {
          background: #ffcb57;
        }

        @media (max-width: 600px) {
          .content {
            padding: 2rem 1.5rem;
          }
          .title {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #0b0f14;
          font-family:
            "JetBrains Mono", "Fira Code", Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
