// Tells Bing and other IndexNow search engines about every page in the sitemap. Run after a deploy:
//   npm run seo:indexnow
const HOST = "siliguripataka.shop";
const KEY = "c69675de04328e91c6482a1452d98512"; // public by design: the same value is served at /c69675de04328e91c6482a1452d98512.txt

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: sent ${urlList.length} addresses, response ${response.status}`);
