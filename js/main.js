/**
 * 路由與畫面渲染
 * 以 location.hash 作為簡易 SPA router：#/ 首頁（含 12 堂課表）、#/relax 等分類頁
 */
const TRANSITION_MS = 180;

function parseRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "home";
}

function renderHome() {
  const cards = CATEGORIES.map(
    (cat) => `
      <a class="cat-row" href="#/${cat.id}">
        <span class="cat-row-num">${cat.num}</span>
        <span class="cat-row-body">
          <span class="cat-row-title">${cat.title}</span>
          <span class="cat-row-sub">${cat.teaser}</span>
        </span>
        <span class="cat-row-arrow" aria-hidden="true">&rarr;</span>
      </a>`
  ).join("");

  const weeks = SCHEDULE.map(
    (week) => `
      <div class="week-group">
        <h3 class="week-label">${week.week}</h3>
        <div class="week-sessions">
          ${week.sessions.map(renderSessionCard).join("")}
        </div>
      </div>`
  ).join("");

  return `
    <section class="home">
      <h1 class="home-title">下肢動作控制訓練課程</h1>
      <p class="home-subtitle">四個階段，由淺入深，循序建立下肢動作控制能力</p>
      <div class="cat-list">${cards}</div>

      <section class="schedule-section" id="schedule-section">
        <header class="schedule-head">
          <h2>12 堂課表</h2>
          <p class="schedule-subtitle">共 6 週，每週 2 堂</p>
        </header>
        <div class="schedule-weeks">${weeks}</div>
      </section>
    </section>`;
}

function parseDoseChips(dose) {
  if (!dose) return [];
  return dose
    .split("，")
    .map((s) => s.trim())
    .filter(Boolean);
}

function renderExerciseRow(ex) {
  const chips = parseDoseChips(ex.dose);
  const chipsHtml = chips.map((c) => `<span class="dose-chip">${c}</span>`).join("");

  return `
    <li class="exercise-item${chips.length ? "" : " no-dose"}">
      <span class="exercise-name">${ex.name}</span>
      ${chips.length ? `<span class="exercise-doses">${chipsHtml}</span>` : ""}
      ${ex.note ? `<span class="exercise-note">＊${ex.note}</span>` : ""}
    </li>`;
}

function renderSessionCard(session) {
  const rows = [{ name: "放鬆軟組織", dose: session.warmup }, ...session.exercises]
    .map(renderExerciseRow)
    .join("");

  return `
    <article class="session-card">
      <header class="session-card-head">
        <span class="session-code">${session.session}</span>
      </header>
      <ul class="exercise-list">${rows}</ul>
    </article>`;
}

function renderCategory(id) {
  const index = CATEGORIES.findIndex((c) => c.id === id);
  if (index === -1) return null;

  const cat = CATEGORIES[index];
  const prev = CATEGORIES[index - 1];
  const next = CATEGORIES[index + 1];
  const videoId = VIDEO_IDS[cat.videoKey];

  const videoBlock = videoId
    ? `<div class="video-frame">
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          title="${cat.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>`
    : `<div class="video-frame video-placeholder">
        <p>影片尚未設定</p>
        <p class="video-placeholder-hint">請於 js/config.js 填入 VIDEO_IDS.${cat.videoKey} 的 YouTube 影片 ID</p>
      </div>`;

  const prevBtn = prev
    ? `<a class="pager-btn pager-prev" href="#/${prev.id}">
        <span class="pager-arrow">&larr;</span>
        <span class="pager-text"><small>上一個</small>${prev.num} ${prev.title}</span>
      </a>`
    : `<span class="pager-btn pager-placeholder" aria-hidden="true"></span>`;

  const nextBtn = next
    ? `<a class="pager-btn pager-next" href="#/${next.id}">
        <span class="pager-text"><small>下一個</small>${next.num} ${next.title}</span>
        <span class="pager-arrow">&rarr;</span>
      </a>`
    : `<span class="pager-btn pager-placeholder" aria-hidden="true"></span>`;

  return `
    <section class="category-page" data-bg-num="${cat.num}">
      <a class="back-link" href="#/">&larr; 返回首頁</a>
      <header class="category-head">
        <span class="category-num">${cat.num}</span>
        <h1 class="category-title">${cat.title}</h1>
      </header>
      <div class="category-intro">
        <p>${cat.intro}</p>
      </div>
      ${
        cat.note
          ? `<aside class="note-card">
              <span class="note-card-label">補充</span>
              <p class="note-card-text">${cat.note}</p>
            </aside>`
          : ""
      }
      ${videoBlock}
      <nav class="category-pager" aria-label="分類導覽">
        ${prevBtn}
        <span class="pager-progress">${cat.num} / 04</span>
        ${nextBtn}
      </nav>
    </section>`;
}

function mount(html, title) {
  const app = document.getElementById("app");
  document.title = title ? `${title}｜下肢動作控制訓練課程` : "下肢動作控制訓練課程";
  app.classList.add("is-leaving");
  window.setTimeout(() => {
    app.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      app.classList.remove("is-leaving");
    });
  }, TRANSITION_MS);
}

function updateNav(route) {
  document.querySelectorAll("[data-route]").forEach((el) => {
    el.classList.toggle("active", el.dataset.route === route);
  });
}

function render() {
  const route = parseRoute();
  let html;
  let title;

  if (route === "home") {
    html = renderHome();
    title = null;
  } else {
    const cat = CATEGORIES.find((c) => c.id === route);
    if (!cat) {
      window.location.hash = "#/";
      return;
    }
    html = renderCategory(route);
    title = `${cat.num} ${cat.title}`;
  }

  mount(html, title);
  updateNav(route);
}

function scrollToSchedule(event) {
  event.preventDefault();
  const jump = () => {
    const el = document.getElementById("schedule-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (parseRoute() === "home") {
    jump();
  } else {
    window.location.hash = "#/";
    window.setTimeout(jump, TRANSITION_MS + 60);
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  render();
  const scheduleLink = document.getElementById("schedule-nav-link");
  if (scheduleLink) scheduleLink.addEventListener("click", scrollToSchedule);
});
