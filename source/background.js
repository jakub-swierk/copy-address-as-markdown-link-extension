browser.action.onClicked.addListener(async () => {
  const [{ url, title }] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  await navigator.clipboard.writeText(
    `[${title.replace(/([\\`*_{}\[\]<>()#+\-.!|])/g, "\\$1")}](${url.replace(/([\\\[\]\(\)])/g, "\\$1")})`,
  );
});
