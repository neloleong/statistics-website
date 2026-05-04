import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

const methodRules = [
  {
    id: "one-sample-t-test",
    methodName: "單樣本 t 檢定",
    englishName: "One-Sample t-test",
    category: "假設檢定",
    calculatorId: "t-test-calculator",
    purpose: ["compare"],
    groups: ["one"],
    dataType: ["continuous"],
    relation: ["single"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於比較一組樣本平均數是否與某個已知標準值不同，例如某班平均分是否高於 75 分。",
    reason:
      "你的研究目標是比較一組連續型資料與固定標準值，因此可考慮單樣本 t 檢定。",
    warning:
      "資料應大致接近正態分佈；若樣本很小且分佈明顯偏態，應謹慎使用。"
  },
  {
    id: "independent-t-test",
    methodName: "獨立樣本 t 檢定",
    englishName: "Independent Samples t-test",
    category: "假設檢定",
    calculatorId: "t-test-calculator",
    purpose: ["compare"],
    groups: ["two"],
    dataType: ["continuous"],
    relation: ["independent"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於比較兩個互相獨立組別的平均數，例如男生與女生的平均分是否不同。",
    reason:
      "你選擇了兩組、連續型資料、而且組別互相獨立，因此可考慮獨立樣本 t 檢定。",
    warning:
      "若兩組方差差異很大，建議使用 Welch t-test；若資料明顯非正態，可考慮 Mann-Whitney U 檢定。"
  },
  {
    id: "paired-t-test",
    methodName: "配對樣本 t 檢定",
    englishName: "Paired Samples t-test",
    category: "假設檢定",
    calculatorId: "t-test-calculator",
    purpose: ["compare"],
    groups: ["two"],
    dataType: ["continuous"],
    relation: ["paired"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於比較同一批對象在兩個時間點或兩種條件下的平均數，例如補習前後成績是否提升。",
    reason:
      "你選擇了兩組連續型資料，而且資料之間有配對關係，因此可考慮配對樣本 t 檢定。",
    warning:
      "應分析每一對差值是否大致接近正態分佈。若差值分佈明顯偏態，可考慮 Wilcoxon 符號等級檢定。"
  },
  {
    id: "anova",
    methodName: "單因子 ANOVA",
    englishName: "One-Way ANOVA",
    category: "假設檢定",
    calculatorId: "anova-calculator",
    purpose: ["compare"],
    groups: ["three-or-more"],
    dataType: ["continuous"],
    relation: ["independent"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於比較三組或以上的平均數是否存在差異，例如三種教學方法的成績是否不同。",
    reason:
      "你選擇了三組或以上、連續型資料、互相獨立組別，因此可考慮單因子 ANOVA。",
    warning:
      "ANOVA 只能判斷至少有一組可能不同，不能直接告訴你哪兩組不同；若結果顯著，需進一步做事後比較。"
  },
  {
    id: "mann-whitney",
    methodName: "Mann-Whitney U 檢定",
    englishName: "Mann-Whitney U Test",
    category: "非參數檢定",
    calculatorId: null,
    purpose: ["compare"],
    groups: ["two"],
    dataType: ["ordinal", "continuous"],
    relation: ["independent"],
    normality: ["non-normal"],
    sampleSize: ["small", "medium", "large"],
    description:
      "用於比較兩個獨立組別的等級資料或非正態連續資料。",
    reason:
      "你的資料不符合正態分佈，且是兩個獨立組別，因此可考慮 Mann-Whitney U 檢定。",
    warning:
      "此工具目前未提供計算器，可先作為方法選擇參考，正式分析可用 SPSS、R 或 Python。"
  },
  {
    id: "wilcoxon",
    methodName: "Wilcoxon 符號等級檢定",
    englishName: "Wilcoxon Signed-Rank Test",
    category: "非參數檢定",
    calculatorId: null,
    purpose: ["compare"],
    groups: ["two"],
    dataType: ["ordinal", "continuous"],
    relation: ["paired"],
    normality: ["non-normal"],
    sampleSize: ["small", "medium", "large"],
    description:
      "用於比較同一批對象在兩個時間點的等級資料或非正態連續資料。",
    reason:
      "你的資料有配對關係，而且可能不符合正態分佈，因此可考慮 Wilcoxon 符號等級檢定。",
    warning:
      "此方法是配對樣本 t 檢定的非參數替代方法。"
  },
  {
    id: "kruskal-wallis",
    methodName: "Kruskal-Wallis 檢定",
    englishName: "Kruskal-Wallis Test",
    category: "非參數檢定",
    calculatorId: null,
    purpose: ["compare"],
    groups: ["three-or-more"],
    dataType: ["ordinal", "continuous"],
    relation: ["independent"],
    normality: ["non-normal"],
    sampleSize: ["small", "medium", "large"],
    description:
      "用於比較三組或以上的等級資料或非正態連續資料。",
    reason:
      "你的資料不符合正態分佈，而且有三組或以上，因此可考慮 Kruskal-Wallis 檢定。",
    warning:
      "如果結果顯著，仍需進一步做兩兩比較。"
  },
  {
    id: "chi-square",
    methodName: "卡方獨立性檢定",
    englishName: "Chi-Square Test of Independence",
    category: "假設檢定",
    calculatorId: "chi-square-calculator",
    purpose: ["association"],
    groups: ["cross-table"],
    dataType: ["categorical"],
    relation: ["independent"],
    normality: ["not-applicable"],
    sampleSize: ["medium", "large"],
    description:
      "用於分析兩個分類變量是否存在關聯，例如性別與購買意願是否有關。",
    reason:
      "你的研究目標是分析兩個分類變量的關聯，因此可考慮卡方獨立性檢定。",
    warning:
      "如果期望頻數太低，尤其是 2x2 表格中樣本較小，應考慮 Fisher 精確檢定。"
  },
  {
    id: "fisher-exact",
    methodName: "Fisher 精確檢定",
    englishName: "Fisher's Exact Test",
    category: "假設檢定",
    calculatorId: null,
    purpose: ["association"],
    groups: ["cross-table"],
    dataType: ["categorical"],
    relation: ["independent"],
    normality: ["not-applicable"],
    sampleSize: ["small"],
    description:
      "用於小樣本 2x2 交叉表，檢查兩個分類變量是否有關聯。",
    reason:
      "你的資料是分類資料且樣本量較小，因此 Fisher 精確檢定比卡方檢定更穩妥。",
    warning:
      "目前網站未提供 Fisher 精確檢定計算器，可作為方法選擇建議。"
  },
  {
    id: "pearson-correlation",
    methodName: "Pearson 相關分析",
    englishName: "Pearson Correlation",
    category: "關係分析",
    calculatorId: "correlation-calculator",
    purpose: ["relationship"],
    groups: ["two-variables"],
    dataType: ["continuous"],
    relation: ["variables"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於分析兩個連續型變量之間是否存在線性關係，例如學習時間與考試成績是否相關。",
    reason:
      "你的研究目標是分析兩個連續型變量之間的關係，因此可考慮 Pearson 相關分析。",
    warning:
      "Pearson 相關主要檢查線性關係，且相關不等於因果。"
  },
  {
    id: "spearman-correlation",
    methodName: "Spearman 等級相關",
    englishName: "Spearman Rank Correlation",
    category: "關係分析",
    calculatorId: null,
    purpose: ["relationship"],
    groups: ["two-variables"],
    dataType: ["ordinal", "continuous"],
    relation: ["variables"],
    normality: ["non-normal"],
    sampleSize: ["small", "medium", "large"],
    description:
      "用於分析兩個等級變量，或非正態連續變量之間的單調關係。",
    reason:
      "你的資料可能是等級資料或非正態資料，因此 Spearman 相關會比 Pearson 更適合。",
    warning:
      "Spearman 分析的是等級關係，不直接代表線性關係。"
  },
  {
    id: "linear-regression",
    methodName: "線性回歸",
    englishName: "Linear Regression",
    category: "回歸分析",
    calculatorId: "regression-calculator",
    purpose: ["prediction"],
    groups: ["two-variables"],
    dataType: ["continuous"],
    relation: ["variables"],
    normality: ["normal", "unknown"],
    sampleSize: ["medium", "large"],
    description:
      "用於分析一個或多個自變量如何影響連續型結果變量，例如廣告費如何影響銷售額。",
    reason:
      "你的研究目標是建立預測模型，且結果變量是連續型資料，因此可考慮線性回歸。",
    warning:
      "正式研究需檢查線性關係、殘差、離群值、共線性和模型適配度。"
  },
  {
    id: "logistic-regression",
    methodName: "Logistic 回歸",
    englishName: "Logistic Regression",
    category: "回歸分析",
    calculatorId: "logistic-regression-helper",
    purpose: ["prediction"],
    groups: ["two-variables", "multiple-variables"],
    dataType: ["binary"],
    relation: ["variables"],
    normality: ["not-applicable"],
    sampleSize: ["medium", "large"],
    description:
      "用於分析二分類結果，例如是否購買、是否流失、是否通過、是否復發。",
    reason:
      "你的研究目標是建立預測模型，而且結果變量是二分類，因此可考慮 Logistic 回歸。",
    warning:
      "正式分析需檢查變量編碼、樣本量、模型適配度、ROC/AUC 和分類門檻。"
  },
  {
    id: "cronbach-alpha",
    methodName: "Cronbach's Alpha 信度分析",
    englishName: "Cronbach's Alpha",
    category: "問卷分析",
    calculatorId: "cronbach-alpha-calculator",
    purpose: ["questionnaire"],
    groups: ["multiple-items"],
    dataType: ["scale"],
    relation: ["items"],
    normality: ["not-applicable"],
    sampleSize: ["medium", "large"],
    description:
      "用於檢查多個問卷題項是否能穩定測量同一個構面，例如服務滿意度量表是否可靠。",
    reason:
      "你的研究目標是問卷信度分析，且資料由多個量表題項組成，因此可使用 Cronbach's Alpha。",
    warning:
      "Alpha 高不代表問卷一定有效；仍需配合效度、因素分析和題項內容判斷。"
  },
  {
    id: "ab-testing",
    methodName: "A/B Testing 兩比例檢定",
    englishName: "A/B Testing Proportion Test",
    category: "商業分析",
    calculatorId: "ab-test-calculator",
    purpose: ["abtest"],
    groups: ["two"],
    dataType: ["proportion"],
    relation: ["independent"],
    normality: ["not-applicable"],
    sampleSize: ["medium", "large"],
    description:
      "用於比較 A 版本與 B 版本的轉化率、點擊率或成功率是否有差異。",
    reason:
      "你的研究目標是比較兩個版本的比例或轉化率，因此可使用 A/B Testing 兩比例檢定。",
    warning:
      "A/B Testing 不應只看顯著性，也要考慮樣本量、測試時間、流量來源和實際商業價值。"
  },
  {
    id: "sample-size",
    methodName: "樣本量估算",
    englishName: "Sample Size Estimation",
    category: "研究設計",
    calculatorId: "sample-size-calculator",
    purpose: ["sample-size"],
    groups: ["not-applicable"],
    dataType: ["continuous", "proportion"],
    relation: ["not-applicable"],
    normality: ["not-applicable"],
    sampleSize: ["planning"],
    description:
      "用於在問卷、論文或市場研究前，估算需要多少樣本才較穩妥。",
    reason:
      "你的目標是研究設計和樣本量規劃，因此可使用樣本量計算器。",
    warning:
      "樣本量估算仍需配合抽樣方法、回收率、分層設計和研究目的。"
  }
];

const purposeOptions = [
  { value: "compare", label: "比較平均數 / 組別差異" },
  { value: "association", label: "分析分類變量關聯" },
  { value: "relationship", label: "分析兩個變量關係" },
  { value: "prediction", label: "建立預測模型" },
  { value: "questionnaire", label: "問卷信度分析" },
  { value: "abtest", label: "A/B Testing / 轉化率比較" },
  { value: "sample-size", label: "研究設計 / 樣本量估算" }
];

const groupOptions = [
  { value: "one", label: "一組資料" },
  { value: "two", label: "兩組資料" },
  { value: "three-or-more", label: "三組或以上" },
  { value: "two-variables", label: "兩個變量" },
  { value: "multiple-variables", label: "多個變量" },
  { value: "multiple-items", label: "多個問卷題項" },
  { value: "cross-table", label: "交叉表 / 列聯表" },
  { value: "not-applicable", label: "不適用 / 尚未開始收集資料" }
];

const dataTypeOptions = [
  { value: "continuous", label: "連續型數據，例如分數、金額、時間" },
  { value: "categorical", label: "分類數據，例如性別、是否購買" },
  { value: "binary", label: "二分類結果，例如是 / 否" },
  { value: "ordinal", label: "等級資料，例如 1 至 5 分量表" },
  { value: "scale", label: "問卷量表題項" },
  { value: "proportion", label: "比例 / 轉化率" }
];

const relationOptions = [
  { value: "independent", label: "不同組別，互相獨立" },
  { value: "paired", label: "同一批對象前後比較 / 配對資料" },
  { value: "single", label: "一組資料與標準值比較" },
  { value: "variables", label: "變量之間的關係" },
  { value: "items", label: "多個題項之間的一致性" },
  { value: "not-applicable", label: "不適用" }
];

const normalityOptions = [
  { value: "normal", label: "大致接近正態分佈" },
  { value: "non-normal", label: "明顯非正態 / 等級資料" },
  { value: "unknown", label: "不確定" },
  { value: "not-applicable", label: "不適用" }
];

const sampleSizeOptions = [
  { value: "small", label: "小樣本" },
  { value: "medium", label: "中等樣本" },
  { value: "large", label: "大樣本" },
  { value: "planning", label: "尚未收集資料 / 正在規劃" }
];

function includesOption(ruleValues, selectedValue) {
  return ruleValues.includes(selectedValue);
}

function getScore(rule, form) {
  let score = 0;

  if (includesOption(rule.purpose, form.purpose)) score += 5;
  if (includesOption(rule.groups, form.groups)) score += 3;
  if (includesOption(rule.dataType, form.dataType)) score += 3;
  if (includesOption(rule.relation, form.relation)) score += 2;
  if (includesOption(rule.normality, form.normality)) score += 1;
  if (includesOption(rule.sampleSize, form.sampleSize)) score += 1;

  return score;
}

function MethodSelectorPage({ navigate }) {
  const [form, setForm] = useState({
    purpose: "compare",
    groups: "two",
    dataType: "continuous",
    relation: "independent",
    normality: "unknown",
    sampleSize: "medium"
  });

  const recommendations = useMemo(() => {
    return methodRules
      .map((rule) => ({
        ...rule,
        score: getScore(rule, form)
      }))
      .filter((rule) => rule.score >= 8)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [form]);

  const bestRecommendation = recommendations[0];

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  }

  function goToCalculator(calculatorId) {
    if (!calculatorId) {
      return;
    }

    if (typeof navigate === "function") {
      navigate("calculators", calculatorId);
      return;
    }

    window.location.hash = `calculators/${calculatorId}`;
  }

  return (
    <div className="page-section">
      <div className="page-top">
        <div className="page-eyebrow">Method Selector</div>
        <h1 className="page-title">統計方法選擇器</h1>
        <p className="page-description">
          根據你的研究目的、資料類型、組別數量和樣本情況，初步推薦合適的統計方法。
          這不是正式統計判斷，但可以幫你快速縮小方法範圍。
        </p>
      </div>

      <div className="selector-layout">
        <section className="selector-box">
          <h3>輸入你的研究情況</h3>

          <label>
            研究目的
            <select
              value={form.purpose}
              onChange={(event) => updateField("purpose", event.target.value)}
            >
              {purposeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            組別 / 變量情況
            <select
              value={form.groups}
              onChange={(event) => updateField("groups", event.target.value)}
            >
              {groupOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            資料類型
            <select
              value={form.dataType}
              onChange={(event) => updateField("dataType", event.target.value)}
            >
              {dataTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            資料關係
            <select
              value={form.relation}
              onChange={(event) => updateField("relation", event.target.value)}
            >
              {relationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            分佈情況
            <select
              value={form.normality}
              onChange={(event) => updateField("normality", event.target.value)}
            >
              {normalityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            樣本量情況
            <select
              value={form.sampleSize}
              onChange={(event) => updateField("sampleSize", event.target.value)}
            >
              {sampleSizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="recommendation-panel">
          <h3>推薦結果</h3>

          {bestRecommendation ? (
            <>
              <div className="status-row">
                <span className="status-badge available">
                  <CheckCircle2 size={14} />
                  最推薦
                </span>

                <span className="difficulty-badge">
                  {bestRecommendation.category}
                </span>
              </div>

              <h2>{bestRecommendation.methodName}</h2>
              <p className="english-name">{bestRecommendation.englishName}</p>

              <p>{bestRecommendation.description}</p>

              <div className="result-box">
                <strong>推薦原因：</strong>
                <p>{bestRecommendation.reason}</p>
              </div>

              <div className="recommendation-warning">
                <strong>注意事項：</strong>
                <br />
                {bestRecommendation.warning}
              </div>

              {bestRecommendation.calculatorId ? (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() =>
                    goToCalculator(bestRecommendation.calculatorId)
                  }
                  style={{ marginTop: 18 }}
                >
                  前往相關計算器
                  <ArrowRight size={16} style={{ marginLeft: 8 }} />
                </button>
              ) : (
                <div
                  className="recommendation-warning"
                  style={{ marginTop: 18 }}
                >
                  目前網站未提供此方法的計算器，但可先作為方法選擇參考。
                </div>
              )}
            </>
          ) : (
            <div className="empty-state">
              <strong>暫時未找到明確推薦</strong>
              <p>
                你選擇的條件比較特殊，可以調整資料類型、組別數量或分佈情況再試。
              </p>
            </div>
          )}
        </section>
      </div>

      <section className="content-section inner-section">
        <div className="section-heading">
          <div className="page-eyebrow">Alternative Methods</div>
          <h2 className="section-title">其他可能方法</h2>
          <p className="section-description">
            系統會根據你的選擇列出相近方法，正式研究時可再結合研究設計、
            資料分佈和樣本量進一步確認。
          </p>
        </div>

        <div className="method-list">
          {recommendations.map((method) => (
            <article className="method-card" key={method.id}>
              <span>{method.category}</span>
              <h3>{method.methodName}</h3>
              <p className="english-name">{method.englishName}</p>
              <p>{method.description}</p>
              <small>{method.warning}</small>

              {method.calculatorId ? (
                <button
                  type="button"
                  className="text-button"
                  onClick={() => goToCalculator(method.calculatorId)}
                  style={{ marginTop: 12 }}
                >
                  打開對應計算器
                </button>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section inner-section">
        <div className="section-heading">
          <div className="page-eyebrow">Important Reminder</div>
          <h2 className="section-title">方法選擇提醒</h2>
        </div>

        <div className="recommendation-warning">
          <AlertTriangle
            size={18}
            style={{ verticalAlign: "middle", marginRight: 6 }}
          />
          本工具是學習與初步判斷用途，不能取代正式統計顧問或研究設計審查。
          正式論文、醫學研究、政府報告或商業決策，仍應使用專業統計軟件並由專業人士確認。
        </div>
      </section>
    </div>
  );
}

export default MethodSelectorPage;