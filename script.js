function daysSince(dateStr){
  const start = new Date(dateStr);
  const now = new Date();
  const diff = now - start;
  return Math.floor(diff / (1000*60*60*24));
}
function yearsTogether(dateStr){
  const start = new Date(dateStr);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) years--;
  return years;
}
function fillGlobals(){
  const y = document.getElementById('youName');
  const h = document.getElementById('herName');
  const siteTitle = document.getElementById('siteTitle');
  const year = document.getElementById('year');
  if(y) y.textContent = SITE.yourName;
  if(h) h.textContent = SITE.herName;
  if(siteTitle) siteTitle.textContent = `${SITE.yourName} ❤ ${SITE.herName}`;
  if(year) year.textContent = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', ()=>{
  fillGlobals();
  const elMsg = document.getElementById('homepageMessage');
  if (elMsg) elMsg.textContent = SITE.homepageMessage;

  const together = document.getElementById('daysTogether');
  if(together) together.textContent = daysSince(SITE.anniversary);

  const years = document.getElementById('yearsTogether');
  if(years) years.textContent = yearsTogether(SITE.anniversary);

  const gal = document.getElementById('gallery');
  if (gal && SITE.gallery) {
    SITE.gallery.forEach(src=>{
      const img = document.createElement('img');
      img.loading = "lazy";
      img.src = src;
      img.alt = "Birlikte anımız";
      gal.appendChild(img);
    });
  }

  const tl = document.getElementById('timeline');
  if (tl && SITE.timeline) {
    SITE.timeline.forEach(item=>{
      const div = document.createElement('div');
      div.className = "tl-item card";
      div.innerHTML = `<h3>${item.title} <small style="color:#94a3b8;font-weight:400">• ${item.date}</small></h3><p>${item.text}</p>`;
      tl.appendChild(div);
    });
  }

  const letters = document.getElementById('letters');
  if (letters && SITE.letters) {
    SITE.letters.forEach(l=>{
      const div = document.createElement('div');
      div.className = "card";
      div.innerHTML = `<h3>${l.title}</h3><p>${l.text}</p>`;
      letters.appendChild(div);
    });
  }
});
