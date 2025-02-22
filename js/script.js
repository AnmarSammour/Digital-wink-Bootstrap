function copyToClipboard(id) {
  var from = document.getElementById(id);
  from.select();
  document.execCommand('copy');
  window.alert("تم نسخ النص.");
}
