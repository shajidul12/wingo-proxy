const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/proxy", async (req, res) => {
  try {
    const url = `https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json?ts=${Date.now()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "user-agent": "Mozilla/5.0 (Linux; Android 12; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.39 Mobile Safari/537.36",
        "accept": "application/json, text/plain, */*",
        "origin": "https://91appe.com",
        "referer": "https://91appe.com/",
        "x-requested-with": "com.darknethaxor.hackbar"
      }
    });
    const data = await response.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: err.toString() });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
