# 下肢動作控制訓練課程

純 HTML / CSS / JavaScript 打造的靜態展示網站，不需要任何框架或後端，可直接用瀏覽器開啟，或部署到 GitHub Pages。

## 專案結構

```
.
├── index.html          # 唯一的 HTML 進入點（SPA）
├── css/
│   └── style.css       # 全站樣式
├── js/
│   ├── config.js       # YouTube 影片 ID 設定（唯一需要手動修改的檔案）
│   ├── data.js         # 四個分類的文字內容 + 12 堂課表資料
│   └── main.js         # 路由（hash-based）與畫面渲染邏輯
└── README.md
```

網站以 `location.hash` 做簡易 SPA 路由，切換頁面時只會更新 `#app` 內容並加上淡入淡出效果，不會重新載入頁面：

- `#/`：首頁（四張分類卡片 + 12 堂課表，都在同一頁）
- `#/relax`、`#/ankle`、`#/core`、`#/power`：四個分類內容頁
- `#/W1-1`、`#/W1-2` … `#/W6-2`：深連結到首頁課表中對應的那一堂課，載入後會自動捲動過去。每堂課代碼（例如「W1-1」）本身也是可以點擊/右鍵複製連結的錨點。

首頁右上角的「12 堂課表」連結會平滑捲動到頁面下方的課表區塊，不會另外跳頁。

## 填入 YouTube 影片

打開 [js/config.js](js/config.js)，把四個分類對應的 YouTube 影片 ID 填進去即可（不用填整個網址，只要 `watch?v=` 後面那一段）：

```js
const VIDEO_IDS = {
  relax: "your-video-id",
  ankle: "your-video-id",
  core: "your-video-id",
  power: "your-video-id"
};
```

未填入 ID 前，該分類頁會顯示「影片尚未設定」的提示，不影響其他內容。

## 本機預覽

這是純靜態網站，理論上直接用瀏覽器打開 `index.html` 就能看到內容。但由於部分瀏覽器對 `fetch`/模組載入在 `file://` 協定下有限制，建議用一個簡單的本機伺服器預覽，效果會與正式部署時一致：

```bash
# 方法一：使用 Python（大多數系統內建）
python3 -m http.server 8000

# 方法二：使用 Node.js
npx serve .
```

啟動後，用瀏覽器打開 `http://localhost:8000` 即可預覽。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個新的 repository（例如 `linda-report`），並將本機專案推上去：

   ```bash
   git remote add origin <你的 repository 網址>
   git branch -M main
   git push -u origin main
   ```

2. 到 GitHub repository 的 **Settings → Pages**。
3. 在 **Build and deployment** 的 **Source** 選擇 **Deploy from a branch**。
4. **Branch** 選擇 `main`，資料夾選擇 `/ (root)`，儲存。
5. 等待約 1 分鐘，GitHub 會提供一個網址（通常是 `https://<你的帳號>.github.io/<repository 名稱>/`），即可線上瀏覽網站。

之後每次 `git push` 到 `main` 分支，GitHub Pages 都會自動重新部署最新內容。
