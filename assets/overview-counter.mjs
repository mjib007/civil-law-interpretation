// 不載入第三方程式；僅把固定的總覽頁網址送至公開計數API。
export const CANONICAL = 'https://mjib007.github.io/civil-law-interpretation/';
export const ENDPOINT = 'https://cdn.busuanzi.cc/api.php';
export async function mountCounter({element, location = globalThis.location, fetcher = globalThis.fetch, timeoutMs = 8000} = {}) {
  if (!element) return;
  const value = element.querySelector('[data-counter-value]');
  const status = element.querySelector('[data-counter-status]');
  if (!value || !status) return;
  const setState = (state, message) => {
    element.dataset.state = state;
    element.setAttribute('aria-busy', String(state === 'loading'));
    status.textContent = message;
  };
  const isLive = location?.protocol === 'https:' && location.hostname === 'mjib007.github.io'
    && /^\/civil-law-interpretation\/(?:index\.html)?$/.test(location.pathname);
  if (!isLive) {
    value.textContent = '—';
    setState('preview', '僅正式總覽頁計數');
    return;
  }
  if (element.dataset.requested === 'true') return;
  element.dataset.requested = 'true';
  setState('loading', '載入中…');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetcher(ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      cache: 'no-store',
      body: JSON.stringify({url: CANONICAL, referrer: ''}),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('Counter service unavailable');
    const data = await response.json();
    const raw = data.busuanzi_page_pv;
    if (!((typeof raw === 'number' || typeof raw === 'string') && /^\d+$/.test(String(raw)))) throw new Error('Invalid count');
    const count = Number(raw);
    if (!Number.isSafeInteger(count) || count < 1) throw new Error('Invalid count');
    value.textContent = new Intl.NumberFormat('zh-TW').format(count);
    setState('ready', '2026.11.22 起');
  } catch (_) {
    value.textContent = '—';
    setState('unavailable', '暫時無法取得');
  } finally {
    clearTimeout(timeout);
  }
}
if (typeof document !== 'undefined') mountCounter({element: document.getElementById('overview-counter')});
