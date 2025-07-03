const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/proxy", async (req, res) => {
  try {
    const url = `https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json?ts=${Date.now()}`;
    const response = await axios.get(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (Linux; Android 12; V2111 Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.39 Mobile Safari/537.36",
        "accept": "application/json, text/plain, */*",
        "origin": "https://91appe.com",
        "referer": "https://91appe.com/",
        "x-requested-with": "com.darknethaxor.hackbar"
      }
    });

    res.set("Access-Control-Allow-Origin", "*");
    res.json(response.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).send({ error: err.toString() });
  }
});

app.listen(PORT, () => console.log(`✅ Proxy running on port ${PORT}`));
