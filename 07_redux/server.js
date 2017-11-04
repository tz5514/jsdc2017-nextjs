// server.js
const next = require('next')
const routes = require('./config/routes')
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = routes.getRequestHandler(nextApp);

// With express
const express = require('express');

const newsList = [
  "中大「哲學沙龍」開幕　邀您來清談與激辯",
  "有愛無礙　中大壢中創校77週年校慶運動會",
  "第39屆四中五校聯誼賽在中大　周景揚校長：先贏得友誼，最後才是勝利",
  "怎麼看出「人」的特別處——特寫與訪問",
  "中大書香學堂　邀復興區學童共賞閱讀芬芳",
  "客家終身貢獻獎　羅肇錦奉獻客家三十餘載",
  "「朱順一合勤獎學金」頒發　鼓勵學生突破限制",
  "2017年秋季「年輕天文學者獎」　日本田中雅臣博士榮獲",
  "首次目睹產生重力波的中子星相撞　天文所參與全球聯測成果登上《Science》",
  "大一親師座談會　親師同心為教育",
  "前進偏鄉　 「2017偏鄉教育巡迴論壇」在中大",
  "太陽磁場新發現　太空所師生團隊改寫教科書",
  "社團長「五力全開」 培育學生團隊領導能力",
  "自己的桌遊自己設計　培養帶得走的關鍵能力",
  "太空天氣報你知　雙「中央」合作全球領先預報模式",
  "鏡頭下的澳洲－藝文中心攝影展　細說澳洲打工度假",
  "台經中心發布　九月份消費者信心指數上升",
  "慶祝教師節　《我就是這樣教學的》新書出版",
  "世界新盼望　神學大師莫特曼中大開講",
  "國際生團隊Taiwan Halal　勇奪第二屆尤努斯獎首獎"
]

nextApp.prepare().then(() => {
  const app = express();
  
  app.get('/api/news/list/:page', async(req, res) => {
    const page = req.params.page;
    setTimeout(() => {
      res.json(newsList);
    }, 1000);
  });

  app.use(handler);
  app.listen(3000);
});