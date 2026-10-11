(() => {
  document.querySelectorAll('.prose a[href]').forEach(link => {
    try {
      const url = new URL(link.href, document.baseURI);
      if (!['goflybit.com', '99ba.net'].includes(url.hostname) || !/[?&]code=/.test(url.search + url.hash)) return;
      const rel = new Set(link.rel.split(/\s+/).filter(Boolean));
      ['sponsored', 'noopener', 'noreferrer'].forEach(value => rel.add(value));
      link.rel = [...rel].join(' ');
    } catch {}
  });
})();
