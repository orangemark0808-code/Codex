const START_KEYWORD = "ポートレート設計";

const steps = [
  {
    id: "race",
    title: "STEP1｜人種・国籍",
    question: "人種・国籍を選択または入力してください",
    examples: `A. 日本人\nB. 東アジア\nC. 欧米\nD. その他\n\n補足:\n自由入力可`,
    summaryLabel: "人種",
  },
  {
    id: "gender",
    title: "STEP2｜性別",
    question: "性別を選択または入力してください",
    examples: `A. 女性\nB. 男性\nC. 中性的\nD. 自由入力\n\n補足:\n自由入力可`,
    summaryLabel: "性別",
  },
  {
    id: "ageMood",
    title: "STEP3｜年齢・雰囲気",
    question: "年齢と雰囲気を選択または入力してください",
    examples: `年齢:\nA. 10代前半\nB. 10代後半\nC. 20代前半\nD. 20代後半\nE. 30代前半\nF. 30代後半\nG. 40代\nH. 50代以上\nI. 自由入力\n\n雰囲気:\nA. 清潔感\nB. ナチュラル\nC. クール\nD. かわいい\nE. 上品\nF. セクシー\nG. 大人っぽい\nH. カジュアル\nI. モード系\n\n補足:\n自由入力可`,
    summaryLabel: ["年齢", "雰囲気"],
  },
  {
    id: "composition",
    title: "STEP4｜構図（ショット）",
    question: "構図を選択または入力してください",
    examples: `A. 顔アップ\nB. バストアップ\nC. ウエストショット\nD. 全身（立ち）\nE. 全身（ポーズあり）\nF. 3/4ショット\n\n向き:\nA. 正面\nB. 横\nC. 斜め\nD. 振り向き\n\n補足:\n自由入力可（例：歩いている、振り返りポーズ など）`,
    summaryLabel: "構図",
  },
  {
    id: "hair",
    title: "STEP5｜髪",
    question: "髪の要素を選択または入力してください",
    examples: `長さ:\nA. ロング\nB. セミロング\nC. ミディアム\nD. ボブ\nE. ショート\nF. ベリーショート\n\n色（ベース）:\nA. 黒\nB. ダークブラウン\nC. ブラウン\nD. ライトブラウン\nE. ブロンド\nF. グレー\nG. ピンク\nH. レッド\nI. ブルー\nJ. ハイトーン\n\n追加カラー（複数可）:\nK. インナーカラー\nL. グラデーション\nM. ハイライト\nN. ローライト\n\nスタイル:\nA. ストレート\nB. ゆる巻き\nC. 強めカール\nD. レイヤー\nE. 外ハネ\nF. 内巻き\nG. パーマ\nH. ウェーブ\nI. アップスタイル\n\n前髪:\nA. あり\nB. なし\nC. シースルー\nD. ぱっつん\nE. センターパート\n\n補足:\n自由入力可`,
    summaryLabel: "髪",
  },
  {
    id: "faceLine",
    title: "STEP6｜フェイスライン",
    question: "フェイスラインを選択または入力してください",
    examples: `A. 卵型\nB. シャープ\nC. 丸顔\nD. 面長\nE. ベース型\n\n補足:\n自由入力可`,
    summaryLabel: "フェイスライン",
  },
  {
    id: "eyes",
    title: "STEP7｜目",
    question: "目の形と印象を選択または入力してください",
    examples: `形:\nA. アーモンド\nB. 大きめ\nC. 切れ長\nD. たれ目\nE. 丸目\nF. 三白眼\n\n印象:\nA. ナチュラル\nB. クール\nC. かわいい\nD. 色っぽい\nE. 意志が強い\n\n補足:\n自由入力可`,
    summaryLabel: "目",
  },
  {
    id: "nose",
    title: "STEP8｜鼻",
    question: "鼻を選択または入力してください",
    examples: `A. 自然\nB. 高め\nC. 小さめ\nD. シャープ\n\n補足:\n自由入力可`,
    summaryLabel: "鼻",
  },
  {
    id: "mouth",
    title: "STEP9｜口・唇",
    question: "口・唇を選択または入力してください",
    examples: `A. 自然\nB. ふっくら\nC. 薄め\nD. 立体的\n\n補足:\n自由入力可`,
    summaryLabel: "口",
  },
  {
    id: "skin",
    title: "STEP10｜肌",
    question: "肌質を選択または入力してください",
    examples: `A. ナチュラル\nB. 透明感\nC. ツヤ\nD. マット\nE. 色白\nF. 健康的\n\n補足:\n自由入力可`,
    summaryLabel: "肌",
  },
  {
    id: "makeup",
    title: "STEP11｜メイク",
    question: "メイクを選択または入力してください",
    examples: `A. ナチュラル\nB. 韓国風\nC. クール\nD. しっかり\nE. モード\nF. 艶感重視\n\n補足:\n自由入力可`,
    summaryLabel: "メイク",
  },
  {
    id: "adjustment",
    title: "STEP12｜微調整（仕上がり）",
    question: "仕上がりを調整してください（複数選択可・矛盾しない範囲）",
    examples: `A. 明るめ\nB. 暗め\nC. シャープ寄り\nD. 柔らかさ少し追加\nE. コントラスト強め\nF. コントラスト弱め\n\nG. リアル寄り（クリーン）\nH. ナチュラル寄り\n\nI. 切り抜き最適化\nJ. 境界くっきり\nK. 影を弱くする\n\n補足:\n自由入力可`,
    summaryLabel: "微調整",
  },
  {
    id: "notes",
    title: "STEP13｜最終補足",
    question: "追加要望があれば入力してください",
    examples: `なし / 自由入力`,
    summaryLabel: "補足",
  },
];

const state = {
  currentStepIndex: -1,
  answers: {},
};

const startSection = document.getElementById("start-section");
const interviewSection = document.getElementById("interview-section");
const resultSection = document.getElementById("result-section");
const startInput = document.getElementById("start-input");
const answerInput = document.getElementById("answer-input");
const stepTitle = document.getElementById("step-title");
const question = document.getElementById("question");
const examples = document.getElementById("examples");
const result = document.getElementById("result");
const error = document.getElementById("error");

document.getElementById("start-btn").addEventListener("click", startInterview);
document.getElementById("next-btn").addEventListener("click", nextStep);
document.getElementById("restart-btn").addEventListener("click", resetAll);
document.getElementById("restart-btn-result").addEventListener("click", resetAll);

function startInterview() {
  const value = startInput.value.trim();
  if (value !== START_KEYWORD) {
    error.textContent = `開始するには「${START_KEYWORD}」と入力してください。`;
    return;
  }

  error.textContent = "";
  startSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  interviewSection.classList.remove("hidden");
  state.currentStepIndex = 0;
  state.answers = {};
  renderStep();
}

function renderStep() {
  const step = steps[state.currentStepIndex];
  stepTitle.textContent = step.title;
  question.textContent = `質問: ${step.question}`;
  examples.textContent = `例:\n${step.examples}`;
  answerInput.value = state.answers[step.id] || "";
  answerInput.focus();
}

function nextStep() {
  if (state.currentStepIndex < 0) {
    return;
  }

  const step = steps[state.currentStepIndex];
  const value = answerInput.value.trim();

  if (!value) {
    error.textContent = "回答を入力してください。";
    return;
  }

  error.textContent = "";
  state.answers[step.id] = value;

  if (state.currentStepIndex === steps.length - 1) {
    showResult();
    return;
  }

  state.currentStepIndex += 1;
  renderStep();
}

function showResult() {
  interviewSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  const ageMood = state.answers.ageMood || "";
  const [age = "", mood = ""] = ageMood
    .split(/[／/、,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  result.textContent = [
    `人種: ${state.answers.race || ""}`,
    `性別: ${state.answers.gender || ""}`,
    `年齢: ${age}`,
    `雰囲気: ${mood || ageMood}`,
    `構図: ${state.answers.composition || ""}`,
    `髪: ${state.answers.hair || ""}`,
    `フェイスライン: ${state.answers.faceLine || ""}`,
    `目: ${state.answers.eyes || ""}`,
    `鼻: ${state.answers.nose || ""}`,
    `口: ${state.answers.mouth || ""}`,
    `肌: ${state.answers.skin || ""}`,
    `メイク: ${state.answers.makeup || ""}`,
    `微調整: ${state.answers.adjustment || ""}`,
    `補足: ${state.answers.notes || ""}`,
  ].join("\n");
}

function resetAll() {
  state.currentStepIndex = -1;
  state.answers = {};
  startInput.value = "";
  answerInput.value = "";
  error.textContent = "";
  interviewSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  startSection.classList.remove("hidden");
}
