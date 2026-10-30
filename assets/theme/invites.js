/* 仅增强正文内带邀请码的外站注册链接；原生链接在脚本不可用时仍可访问。 */
(() => {
  for (const link of document.querySelectorAll('.prose a[href]')) {
    try {
      const url = new URL(link.getAttribute('href'), location.href);
      if (!['http:', 'https:'].includes(url.protocol) || url.origin === location.origin) continue;
      const fragment = url.hash.slice(1);
      const separator = fragment.indexOf('?');
      if (separator < 0 || fragment.slice(0, separator) !== '/register') continue;
      if (!new URLSearchParams(fragment.slice(separator + 1)).get('code')?.trim()) continue;
      link.relList.add('sponsored', 'noopener', 'noreferrer');
      link.target = '_blank';
      link.classList.add('wg-invite-link');
    } catch {}
  }
})();
