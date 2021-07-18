import rssFilePath from "../rss.xml";

export function Footer() {
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <a
        href="/archive"
        style={{
          marginRight: "10px",
        }}
      >
        Archive
      </a>
      <a
        href="https://github.com/harrisonmalone"
        style={{
          marginRight: "10px",
        }}
      >
        GitHub
      </a>
      <a href={rssFilePath}>RSS</a>
    </div>
  );
}
