// Načítanie súboru header-footer.html pomocou XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // Vytvorenie elementu z reťazca
    const parser = new DOMParser();
    const headerFooter = parser.parseFromString(this.responseText, 'text/html');
    // Vloženie súboru do navigačného panela a pätičky
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.innerHTML = headerFooter.querySelector('header').innerHTML;
    footer.innerHTML = headerFooter.querySelector('footer').innerHTML;
  }
};
xhr.open('GET', 'header-footer.html', true);
xhr.send();