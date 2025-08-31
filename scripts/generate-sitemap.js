import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({
  hostname: "https://dimmer-maui.vercel.app",
});

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "#about", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "#features", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "#gallery", changefreq: "monthly", priority: 0.7 });
sitemap.write({ url: "#contact", changefreq: "monthly", priority: 0.7 });
sitemap.write({ url: "#faq", changefreq: "monthly", priority: 0.6 });
sitemap.end();

streamToPromise(sitemap).then((data) => {
  const stream = createWriteStream("./public/sitemap.xml");
  stream.write(data);
  stream.end();
});
