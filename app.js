const steps = [
  {
    id: "race",
    title: "STEP1｜人種・国籍",
    summaryLabel: "人種",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["日本人", "東アジア", "欧米", "その他"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "gender",
    title: "STEP2｜性別",
    summaryLabel: "性別",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["女性", "男性", "中性的", "自由入力"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "ageMood",
    title: "STEP3｜年齢・雰囲気",
    summaryLabel: ["年齢", "雰囲気"],
    fields: [
      {
        id: "age",
        label: "年齢",
        type: "single",
        options: ["10代前半", "10代後半", "20代前半", "20代後半", "30代前半", "30代後半", "40代", "50代以上", "自由入力"],
      },
      {
        id: "mood",
        label: "雰囲気",
        type: "single",
        options: ["清潔感", "ナチュラル", "クール", "かわいい", "上品", "セクシー", "大人っぽい", "カジュアル", "モード系"],
      },
    ],
    freeTextLabel: "補足（自由入力）",
  },
  {
    id: "composition",
    title: "STEP4｜構図（ショット）",
    summaryLabel: "構図",
    fields: [
      {
        id: "shot",
        label: "ショット",
        type: "single",
        options: ["顔アップ", "バストアップ", "ウエストショット", "全身（立ち）", "全身（ポーズあり）", "3/4ショット"],
      },
      {
        id: "direction",
        label: "向き",
        type: "single",
        options: ["正面", "横", "斜め", "振り向き"],
      },
    ],
    freeTextLabel: "補足（例: 歩いている、振り返りポーズ）",
  },
  {
    id: "hair",
    title: "STEP5｜髪",
    summaryLabel: "髪",
    fields: [
      {
        id: "length",
        label: "長さ",
        type: "single",
        options: ["ロング", "セミロング", "ミディアム", "ボブ", "ショート", "ベリーショート"],
      },
      {
        id: "baseColor",
        label: "色（ベース）",
        type: "single",
        options: ["黒", "ダークブラウン", "ブラウン", "ライトブラウン", "ブロンド", "グレー", "ピンク", "レッド", "ブルー", "ハイトーン"],
      },
      {
        id: "extraColor",
        label: "追加カラー（複数可）",
        type: "multi",
        options: ["インナーカラー", "グラデーション", "ハイライト", "ローライト"],
      },
      {
        id: "style",
        label: "スタイル",
        type: "single",
        options: ["ストレート", "ゆる巻き", "強めカール", "レイヤー", "外ハネ", "内巻き", "パーマ", "ウェーブ", "アップスタイル"],
      },
      {
        id: "bangs",
        label: "前髪",
        type: "single",
        options: ["あり", "なし", "シースルー", "ぱっつん", "センターパート"],
      },
    ],
    freeTextLabel: "補足（自由入力）",
  },
  {
    id: "faceLine",
    title: "STEP6｜フェイスライン",
    summaryLabel: "フェイスライン",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["卵型", "シャープ", "丸顔", "面長", "ベース型"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "eyes",
    title: "STEP7｜目",
    summaryLabel: "目",
    fields: [
      {
        id: "shape",
        label: "形",
        type: "single",
        options: ["アーモンド", "大きめ", "切れ長", "たれ目", "丸目", "三白眼"],
      },
      {
        id: "impression",
        label: "印象",
        type: "single",
        options: ["ナチュラル", "クール", "かわいい", "色っぽい", "意志が強い"],
      },
    ],
    freeTextLabel: "補足（自由入力）",
  },
  {
    id: "nose",
    title: "STEP8｜鼻",
    summaryLabel: "鼻",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["自然", "高め", "小さめ", "シャープ"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "mouth",
    title: "STEP9｜口・唇",
    summaryLabel: "口",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["自然", "ふっくら", "薄め", "立体的"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "skin",
    title: "STEP10｜肌",
    summaryLabel: "肌",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["ナチュラル", "透明感", "ツヤ", "マット", "色白", "健康的"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "makeup",
    title: "STEP11｜メイク",
    summaryLabel: "メイク",
    fields: [
      {
        id: "base",
        label: "選択",
        type: "single",
        options: ["ナチュラル", "韓国風", "クール", "しっかり", "モード", "艶感重視"],
      },
    ],
    freeTextLabel: "自由入力",
  },
  {
    id: "adjustment",
    title: "STEP12｜微調整（仕上がり）",
    summaryLabel: "微調整",
    fields: [
      {
        id: "base",
        label: "選択（複数可）",
        type: "multi",
        options: [
          "明るめ",
          "暗め",
          "シャープ寄り",
          "柔らかさ少し追加",
          "コントラスト強め",
          "コントラスト弱め",
          "リアル寄り（クリーン）",
          "ナチュラル寄り",
          "切り抜き最適化",
          "境界くっきり",
          "影を弱くする",
        ],
      },
    ],
    freeTextLabel: "補足（自由入力）",
  },
  {
    id: "notes",
    title: "STEP13｜最終補足",
    summaryLabel: "補足",
    fields: [],
    freeTextLabel: "追加要望（なし / 自由入力）",
  },
];

const summaryOrder = [
  "人種",
  "性別",
  "年齢",
  "雰囲気",
  "構図",
  "髪",
  "フェイスライン",
  "目",
  "鼻",
  "口",
  "肌",
  "メイク",
  "微調整",
  "補足",
];

const form = document.getElementById("portrait-form");
const resultSection = document.getElementById("result-section");
const result = document.getElementById("result");
const error = document.getElementById("error");

renderForm();

document.getElementById("generate-btn").addEventListener("click", generateSummary);
document.getElementById("reset-btn").addEventListener("click", () => {
  form.reset();
  resultSection.classList.add("hidden");
  error.textContent = "";
});

function renderForm() {
  form.innerHTML = steps
    .map((step) => {
      const fieldsHtml = step.fields
        .map((field) => {
          const optionsHtml = field.options
            .map((option, i) => {
              const inputType = field.type === "multi" ? "checkbox" : "radio";
              const name = `${step.id}-${field.id}`;
              const id = `${name}-${i}`;

              return `<label class="option" for="${id}">
                  <input id="${id}" type="${inputType}" name="${name}" value="${option}">
                  <span>${option}</span>
                </label>`;
            })
            .join("");

          return `<div class="field-block">
              <p class="field-label">${field.label}</p>
              <div class="option-grid">${optionsHtml}</div>
            </div>`;
        })
        .join("");

      return `<section class="step-card">
          <h3>${step.title}</h3>
          ${fieldsHtml}
          <label class="field-label" for="${step.id}-free">${step.freeTextLabel}</label>
          <textarea id="${step.id}-free" name="${step.id}-free" rows="2" placeholder="任意入力"></textarea>
        </section>`;
    })
    .join("");
}

function generateSummary() {
  const summary = {
    人種: "",
    性別: "",
    年齢: "",
    雰囲気: "",
    構図: "",
    髪: "",
    フェイスライン: "",
    目: "",
    鼻: "",
    口: "",
    肌: "",
    メイク: "",
    微調整: "",
    補足: "",
  };

  for (const step of steps) {
    const stepData = collectStepData(step);

    if (step.id === "ageMood") {
      summary["年齢"] = stepData.age || "";
      summary["雰囲気"] = appendText(stepData.mood || "", stepData.freeText);
      continue;
    }

    if (step.id === "composition") {
      summary["構図"] = appendText(joinParts([stepData.shot, stepData.direction], " / "), stepData.freeText);
      continue;
    }

    if (step.id === "notes") {
      summary["補足"] = stepData.freeText || "";
      continue;
    }

    const label = Array.isArray(step.summaryLabel) ? step.summaryLabel[0] : step.summaryLabel;
    summary[label] = appendText(formatGeneralStep(step, stepData), stepData.freeText);
  }

  if (Object.values(summary).every((value) => !value)) {
    error.textContent = "少なくとも1項目は選択または入力してください。";
    resultSection.classList.add("hidden");
    return;
  }

  error.textContent = "";
  result.textContent = summaryOrder.map((key) => `${key}: ${summary[key] || ""}`).join("\n");
  resultSection.classList.remove("hidden");
}

function collectStepData(step) {
  const data = {};

  for (const field of step.fields) {
    const name = `${step.id}-${field.id}`;

    if (field.type === "multi") {
      data[field.id] = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value).join("、");
    } else {
      const checked = document.querySelector(`input[name="${name}"]:checked`);
      data[field.id] = checked ? checked.value : "";
    }
  }

  const freeText = document.getElementById(`${step.id}-free`).value.trim();
  data.freeText = freeText;
  return data;
}

function formatGeneralStep(step, data) {
  const entries = step.fields
    .map((field) => {
      const value = data[field.id];
      return value ? `${field.label}: ${value}` : "";
    })
    .filter(Boolean);

  if (entries.length === 0 && step.fields.length <= 1) {
    return data.base || "";
  }

  return entries.join(" / ");
}

function appendText(base, freeText) {
  if (base && freeText) {
    return `${base}（自由入力: ${freeText}）`;
  }
  return base || freeText || "";
}

function joinParts(parts, separator) {
  return parts.filter(Boolean).join(separator);
}
