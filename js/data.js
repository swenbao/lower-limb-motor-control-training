/**
 * 網站內容資料
 * CATEGORIES：四個訓練分類的文字內容，依訓練邏輯排序（由淺入深）
 * SCHEDULE：12 堂課表資料，依「週」分組，每週包含 2 堂課，每堂課包含放鬆軟組織時間與該堂的動作清單
 */
const CATEGORIES = [
  {
    id: "relax",
    num: "01",
    title: "放鬆",
    videoKey: "relax",
    intro:
      "你運動時常常小腿或腳底很緊，甚至做沒幾下就抽筋嗎？很多人做足踝相關訓練，如果小腿到腳底的張力太高，不只容易抽筋，也可能影響後續動作品質。今天先教你最基礎的放鬆方式，讓身體先準備好，再開始訓練。",
    note:
      "如果左右兩側的肌肉張力不平衡，身體就容易出現代償，影響後續訓練的動作品質。先把肌肉放鬆，再開始訓練，才能讓身體更順暢地學會正確的發力方式。"
  },
  {
    id: "ankle",
    num: "02",
    title: "足踝控制",
    videoKey: "ankle",
    intro:
      "你落地的時候會站不穩嗎？甚至感覺到腳踝或膝蓋有點不舒服？很多人會以為是腿沒力，但有可能是你的腳沒有提供足夠穩定的支撐。當足弓沒有發揮穩定支撐的功能，落地時腳踝更容易內塌，身體也會開始用其他地方代償，增加膝蓋、髖關節等部位的負擔。今天教你 4 個足部控制訓練，拯救你的關節！",
    note:
      "很多人以為只要穿矯正鞋墊就可以改善足弓，但鞋墊只能提供被動支撐，沒辦法讓身體學會主動控制足弓。其實多數兒童的低足弓、扁平足都屬於功能性扁平足，只要透過適當訓練，還是有機會建立更好的足部控制能力。"
  },
  {
    id: "core",
    num: "03",
    title: "核心訓練",
    videoKey: "core",
    intro:
      "核心訓練，是預防運動傷害的核心。很多人一直練核心，卻沒有練到核心。因為核心訓練的核心，不是腹肌，而是讓身體保持穩定。今天就從最核心的核心訓練開始。",
    note:
      "很多人認為核心訓練就是練腹肌，其實核心真正的功能，是在動作中穩定軀幹，讓力量可以有效傳遞。當核心沒辦法穩定軀幹時，跑步、跳躍或落地的過程，身體就更容易左右晃動或前後傾斜，為了完成動作，膝蓋、腳踝等關節就有可能承受更多額外的負擔。"
  },
  {
    id: "power",
    num: "04",
    title: "多關節力量傳遞",
    videoKey: "power",
    intro:
      "下肢相關的運動都是運用髖、膝、踝協同的動作，知道正確的力量傳遞，才能有效地增進運動表現。",
    note: null
  }
];

const SCHEDULE = [
  {
    week: "第 1 週",
    sessions: [
      {
        session: "W1-1",
        warmup: "20min",
        exercises: [
          { name: "坐姿踮腳尖", dose: "10 次/組，共 3 組" },
          {
            name: "腳趾 extension ＋ 前足踩地",
            dose: "左右各 10 次/組，坐姿 2 組站姿 1 組",
            note: "先單腳分開做，再雙腳一起"
          }
        ]
      },
      {
        session: "W1-2",
        warmup: "15min",
        exercises: [
          { name: "坐姿踮腳尖", dose: "10 次/組，共 3 組" },
          {
            name: "腳趾 extension ＋ 前足踩地",
            dose: "左右各 10 次/組，坐姿 2 組站姿 1 組",
            note: "雙腳一起"
          }
        ]
      }
    ]
  },
  {
    week: "第 2 週",
    sessions: [
      {
        session: "W2-1",
        warmup: "15min",
        exercises: [
          { name: "坐姿踮腳尖", dose: "10 次/組，共 2 組" },
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，坐姿 1 組站姿 2 組" },
          { name: "四足跪姿－膝離地", dose: "10s/組，共 2 組" }
        ]
      },
      {
        session: "W2-2",
        warmup: "15min",
        exercises: [
          { name: "坐姿踮腳尖", dose: "10 次/組，共 2 組" },
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，坐姿 1 組站姿 2 組" },
          { name: "建立四足跪姿的中立位", dose: "" },
          { name: "四足跪姿－膝離地", dose: "10s/組，共 2 組" },
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 2 組" }
        ]
      }
    ]
  },
  {
    week: "第 3 週",
    sessions: [
      {
        session: "W3-1",
        warmup: "10min",
        exercises: [
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，坐姿 1 組站姿 1 組" },
          { name: "四足跪姿－膝離地", dose: "10s/組，共 1 組" },
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 2 組" },
          { name: "熊爬", dose: "20 步，共 2 組" }
        ]
      },
      {
        session: "W3-2",
        warmup: "10min",
        exercises: [
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，站姿 1 組" },
          { name: "四足跪姿－膝離地", dose: "10s/組，共 1 組" },
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 1 組" },
          { name: "熊爬", dose: "20 步，共 1 組" },
          { name: "站姿踮腳尖", dose: "10 次/組，共 2 組" }
        ]
      }
    ]
  },
  {
    week: "第 4 週",
    sessions: [
      {
        session: "W4-1",
        warmup: "10min",
        exercises: [
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，站姿 1 組" },
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 1 組" },
          { name: "站姿踮腳尖", dose: "10 次/組，共 2 組" },
          { name: "分腿站踮腳尖", dose: "左右各 10 次/組，共 2 組" },
          { name: "Squat", dose: "學會髖膝踝一起動" }
        ]
      },
      {
        session: "W4-2",
        warmup: "10min",
        exercises: [
          { name: "腳趾 extension ＋ 前足踩地", dose: "左右各 10 次/組，站姿 1 組" },
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 1 組" },
          { name: "站姿踮腳尖", dose: "10 次/組，共 1 組" },
          { name: "Squat", dose: "10 次/組，共 3 組" }
        ]
      }
    ]
  },
  {
    week: "第 5 週",
    sessions: [
      {
        session: "W5-1",
        warmup: "10min",
        exercises: [
          { name: "四足跪姿－棒式（動態）", dose: "10 次/組，共 1 組" },
          { name: "Squat", dose: "10 次/組，共 2 組" },
          { name: "Squat ＋ 踮腳 1 下", dose: "10 次/組，共 2 組" },
          { name: "分腿蹲", dose: "學會動作" }
        ]
      },
      {
        session: "W5-2",
        warmup: "10min",
        exercises: [
          { name: "Squat", dose: "10 次/組，共 1 組" },
          { name: "Squat ＋ 踮腳 1 下", dose: "10 次/組，共 2 組" },
          { name: "分腿蹲", dose: "左右各 10 次/組，共 2 組" },
          { name: "Squat ＋ 輕跳", dose: "共 10 下，不連續" }
        ]
      }
    ]
  },
  {
    week: "第 6 週",
    sessions: [
      {
        session: "W6-1",
        warmup: "10min",
        exercises: [
          { name: "Squat", dose: "10 次/組，共 1 組" },
          { name: "分腿蹲 ＋ 前腳踮腳尖", dose: "10 次/組，共 1 組" },
          { name: "Squat ＋ 輕跳", dose: "10 下連續，共 2 組" }
        ]
      },
      {
        session: "W6-2",
        warmup: "10min",
        exercises: [
          { name: "Squat", dose: "10 次/組，共 1 組" },
          { name: "分腿蹲 ＋ 前腳踮腳尖", dose: "10 次/組，共 1 組" },
          { name: "Squat ＋ 輕跳", dose: "10 下連續，共 2 組" },
          { name: "CMJ", dose: "每跳間隔 15 秒，10 跳" }
        ]
      }
    ]
  }
];
