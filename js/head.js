function loadHeader() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const head = document.getElementsByTagName('head')[0];
        const header = xhr.responseText;
        head.innerHTML += header;
      }
    }
  };
  xhr.open('GET', 'head.html', true);
  xhr.send();
}