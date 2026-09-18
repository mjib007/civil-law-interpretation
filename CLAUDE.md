# 嚴禁出現雙破折號

# Project Instructions

## 這個 Project 是什麼
`civil-law-interpretation`：民法條文解釋與教學講義產生器 Skill 專案，CC BY-NC 4.0 授權。
使用者貼上民法條文全文，產生 HTML 格式教學講義（條文結構解析、要件分析、學說見解、實務見解、虛構教學案例、申論練習題與模擬解答、速查卡），並列在總覽頁 `index.html`。

## 回應風格（每次都適用）
- 原則上以繁體中文回應
- 一步一步引導，不要一次丟出所有內容
- 重點不要廢話；若使用者把問題拆成好幾個小問題，回答完每個小問題後，記得把使用者帶回主問題，避免要上下翻找
- 執行前先確認理解、討論方案，不要直接跳過確認就動手產出

## Repo 結構
- `README.md`、`SKILL.md`、`LICENSE`（CC BY-NC 4.0）、`TODO.md`
- `index.html`：總覽頁，`LECTURES` 陣列列出所有講義（articles／title／date／chapterKey／file）
- `lectures/`：各講義 HTML 檔案存放處，新增講義時必須同步在 `index.html` 的 `LECTURES` 補上一筆
  - 檔名格式：`civil-code-{條號}-{英文主題}.html`（例如 `civil-code-6-11-capacity-of-rights.html`）
- 對外網頁（GitHub Pages）：https://mjib007.github.io/civil-law-interpretation/ ，抓取 `main` 分支內容

## GitHub 操作固定規則
- 這個環境已內建 GitHub 授權，不需要使用者另外提供 Personal Access Token；**絕不在對話中要求或使用使用者貼上的 token**，也不得將任何 token 寫入檔案或 commit
- 修改前先確認目前分支與遠端狀態是否為最新，不憑記憶編輯舊內容
- **每次完成 GitHub 上的變更後，一律附上兩個連結**：
  1. GitHub 連結（PR 連結，或所在分支／commit 連結）
  2. 對外網頁連結 https://mjib007.github.io/civil-law-interpretation/ ，並註明是否已合併進 main（未合併則網頁不會更新）
- 涉及檔案異動一律先建立 PR，經使用者確認或合併後才視為完成

## 待辦追蹤機制
- 對話開始時若任務性質為「接續之前工作」或不確定目前進度，主動先讀取 `TODO.md` 確認待辦與已完成項目

## SKILL.md 維護原則
- 修改 `SKILL.md` 涵蓋規則的講義產生任務前，一律先重新讀取最新版 `SKILL.md`，不依賴記憶中的舊版本
- 若在協助過程中觀察到 `SKILL.md` 有需要更新之處（流程調整、格式規範遺漏等），主動詢問使用者是否要更新，不要自行默默修改或略過

## 內容產生原則
- 申論題、模擬解答、法律條文、判決，一律由使用者提供，不自行生成
- 教學案例可由 AI 虛構，但須明確標明為教學用途
- 學說見解、實務見解若尚無內容，須以空白佔位樣式呈現，不可省略該章節

## 交接慣例
- 複雜任務結束時，若使用者要求交接摘要，依循固定格式：Repo背景／目前狀態／待辦／這次要做的事／操作提醒／不在這次範圍內
