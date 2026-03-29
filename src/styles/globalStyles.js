// ── Global stylesheet injected once at the app root ──────────────────────────
// SRP: one file owns all visual tokens and layout rules.

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:       #0d0d0f;
    --surface:  #16161a;
    --card:     #1e1e24;
    --border:   #2a2a35;
    --accent:   #c8f547;
    --accent2:  #f5a623;
    --danger:   #ff5c5c;
    --text:     #f0f0f5;
    --muted:    #7a7a90;
    --radius:   14px;
  }

  body { background: var(--bg); color: var(--text); font-family: 'DM Mono', monospace; }

  .app {
    min-height: 100vh;
    padding: 32px 20px 60px;
    max-width: 860px;
    margin: 0 auto;
  }

  /* ── Header ── */
  .header { margin-bottom: 36px; }
  .header h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1;
  }
  .header h1 span { color: var(--accent); }
  .header p { color: var(--muted); font-size: 0.8rem; margin-top: 6px; }

  /* ── Summary Cards ── */
  .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 28px; }
  @media (max-width: 560px) { .summary { grid-template-columns: 1fr; } }

  .stat-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 18px 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s;
  }
  .stat-card:hover { transform: translateY(-2px); }
  .stat-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
  }
  .stat-card.income::before  { background: var(--accent); }
  .stat-card.expense::before { background: var(--danger); }
  .stat-card.balance::before { background: var(--accent2); }

  .stat-label { font-size: 0.65rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1.5px; }
  .stat-value { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 700; margin-top: 4px; }
  .stat-card.income  .stat-value { color: var(--accent); }
  .stat-card.expense .stat-value { color: var(--danger); }
  .stat-card.balance .stat-value { color: var(--accent2); }

  /* ── Add Transaction Form ── */
  .form-panel {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 24px;
    margin-bottom: 24px;
  }
  .form-panel h2 {
    font-family: 'Syne', sans-serif;
    font-size: 1rem; font-weight: 700;
    margin-bottom: 16px; color: var(--accent);
    text-transform: uppercase; letter-spacing: 1px;
  }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (max-width: 500px) { .form-grid { grid-template-columns: 1fr; } }
  .form-grid .full { grid-column: 1 / -1; }

  .field { display: flex; flex-direction: column; gap: 5px; }
  .field label { font-size: 0.65rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
  .field input, .field select {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    padding: 10px 12px;
    outline: none;
    transition: border-color 0.2s;
    -webkit-appearance: none;
  }
  .field input:focus, .field select:focus { border-color: var(--accent); }
  .field select option { background: var(--surface); }

  .type-toggle { display: flex; gap: 8px; }
  .type-btn {
    flex: 1; padding: 10px; border-radius: 8px; border: 1px solid var(--border);
    background: var(--surface); color: var(--muted); font-family: 'DM Mono', monospace;
    font-size: 0.8rem; cursor: pointer; transition: all 0.2s;
    text-transform: uppercase; letter-spacing: 1px;
  }
  .type-btn.active-income  { background: rgba(200,245,71,0.12); border-color: var(--accent); color: var(--accent); }
  .type-btn.active-expense { background: rgba(255,92,92,0.12);  border-color: var(--danger); color: var(--danger); }

  .add-btn {
    width: 100%; padding: 12px; border-radius: 8px; border: none;
    background: var(--accent); color: #0d0d0f;
    font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.9rem;
    cursor: pointer; letter-spacing: 0.5px; transition: opacity 0.2s, transform 0.1s;
    margin-top: 4px;
  }
  .add-btn:hover  { opacity: 0.88; }
  .add-btn:active { transform: scale(0.98); }

  /* ── Filter Bar ── */
  .filter-bar {
    display: flex; gap: 10px; flex-wrap: wrap; align-items: center;
    margin-bottom: 16px;
  }
  .filter-bar select, .filter-bar input[type="text"] {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 8px; color: var(--text); font-family: 'DM Mono', monospace;
    font-size: 0.75rem; padding: 8px 12px; outline: none; transition: border-color 0.2s;
    -webkit-appearance: none;
  }
  .filter-bar select:focus, .filter-bar input:focus { border-color: var(--accent); }
  .filter-bar .spacer { flex: 1; }
  .clear-btn {
    background: transparent; border: 1px solid var(--border); border-radius: 8px;
    color: var(--muted); font-family: 'DM Mono', monospace; font-size: 0.75rem;
    padding: 8px 14px; cursor: pointer; transition: all 0.2s;
  }
  .clear-btn:hover { border-color: var(--danger); color: var(--danger); }

  /* ── Transaction List ── */
  .tx-list  { display: flex; flex-direction: column; gap: 8px; }
  .tx-empty {
    text-align: center; padding: 48px 0; color: var(--muted);
    font-size: 0.8rem; border: 1px dashed var(--border); border-radius: var(--radius);
  }
  .tx-empty span { display: block; font-size: 2rem; margin-bottom: 8px; }

  .tx-item {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 14px 18px;
    display: flex; align-items: center; gap: 14px;
    transition: all 0.2s; animation: slideIn 0.25s ease;
  }
  @keyframes slideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  .tx-item:hover { background: #22222a; }

  .tx-icon {
    width: 38px; height: 38px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; flex-shrink: 0;
  }
  .tx-icon.income  { background: rgba(200,245,71,0.1); }
  .tx-icon.expense { background: rgba(255,92,92,0.1); }

  .tx-info  { flex: 1; min-width: 0; }
  .tx-desc  { font-size: 0.85rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .tx-meta  { font-size: 0.65rem; color: var(--muted); margin-top: 2px; }
  .tx-cat   {
    display: inline-block; background: var(--surface); border: 1px solid var(--border);
    border-radius: 4px; padding: 1px 6px; font-size: 0.6rem;
    text-transform: uppercase; letter-spacing: 0.8px; margin-right: 6px;
  }

  .tx-amount { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; flex-shrink: 0; }
  .tx-amount.income  { color: var(--accent); }
  .tx-amount.expense { color: var(--danger); }

  .tx-delete {
    background: transparent; border: none; color: var(--border);
    cursor: pointer; font-size: 1rem; padding: 4px; border-radius: 6px;
    transition: all 0.2s; line-height: 1; flex-shrink: 0;
  }
  .tx-delete:hover { color: var(--danger); background: rgba(255,92,92,0.1); }

  /* ── Category Chart ── */
  .chart-panel {
    background: var(--card); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 24px; margin-bottom: 24px;
  }
  .chart-panel h2 {
    font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700;
    margin-bottom: 18px; color: var(--accent2);
    text-transform: uppercase; letter-spacing: 1px;
  }
  .bar-chart { display: flex; flex-direction: column; gap: 10px; }
  .bar-row   { display: flex; align-items: center; gap: 10px; }
  .bar-label { width: 80px; font-size: 0.65rem; color: var(--muted); text-align: right; flex-shrink: 0; }
  .bar-track { flex: 1; background: var(--surface); border-radius: 4px; height: 22px; overflow: hidden; }
  .bar-fill  {
    height: 100%; border-radius: 4px; display: flex; align-items: center;
    padding-left: 8px; font-size: 0.65rem; font-weight: 500; color: #0d0d0f;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1); min-width: 4px;
  }
  .bar-fill.income  { background: var(--accent); }
  .bar-fill.expense { background: var(--danger); }
  .bar-val  { width: 70px; font-size: 0.7rem; flex-shrink: 0; }
  .bar-val.income   { color: var(--accent); }
  .bar-val.expense  { color: var(--danger); }
`;
