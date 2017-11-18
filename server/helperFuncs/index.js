module.exports = {
  openNewTab: (url) => {
    let tab = window.open(url, '_blank');
    tab.focus();
  }
};
