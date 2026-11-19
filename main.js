(() => {
const D = PORTFOLIO, $ = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const na = '<span class="na">To be added</span>';
const ph = t => `<div class="ph" role="img" aria-label="Image placeholder">${esc(t||'Image placeholder — add files in assets/images/')}</div>`;
const thumb = (p,alt) => p.images && p.images[0] ? `<img class="thumb" loading="lazy" src="${esc(p.images[0])}" alt="${esc(alt)}">` : ph();
$('#yr').textContent = new Date().getFullYear();

// theme
const root = document.documentElement;
try { const s = localStorage.getItem('theme'); if (s) root.dataset.theme = s; else if (matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme = 'light'; } catch(e){}
$('#theme').onclick = () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; try{localStorage.setItem('theme',root.dataset.theme)}catch(e){} };

// static content
$('#aboutText').innerHTML = D.about.map(t=>`<p>${esc(t)}</p>`).join('');
$('#facts').innerHTML = D.facts.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
$('#skillGrid').innerHTML = Object.entries(D.skills).map(([k,v])=>`<div><h3>${esc(k)}</h3><ul>${v.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>`).join('');

// projects + filter
const cats = ['All', ...new Set(D.projects.map(p=>p.cat))];
let cur = 'All';
const renderProjects = () => {
  $('#projList').innerHTML = D.projects.map((p,i)=>({p,i})).filter(x=>cur==='All'||x.p.cat===cur).map(({p,i})=>`
  <article class="proj"><div class="pm">${thumb(p,p.title+' preview')}</div><div>
    <p class="mono tag">PROJECT ${String(i+1).padStart(2,'0')} · ${esc(p.cat.toUpperCase())}</p><h3>${esc(p.title)}</h3>
    <p>${p.overview?esc(p.overview):na}</p>
    <div class="meta">${p.tools.map(t=>`<span class="pill">${esc(t)}</span>`).join('')}</div>
    <button class="btn" data-open="p" data-i="${i}">Technical details</button></div></article>`).join('');
};
$('#projFilter').innerHTML = cats.map(c=>`<button class="chip" aria-pressed="${c==='All'}" data-c="${esc(c)}">${esc(c)}</button>`).join('');
$('#projFilter').onclick = e => { const b = e.target.closest('.chip'); if(!b) return; cur = b.dataset.c; document.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b)); renderProjects(); };
renderProjects();

// CAD
$('#cadOjt').innerHTML = `<div class="cad-ojt">${D.cadOjt.map((c,i)=>`<button class="cad-row" data-open="o" data-i="${i}"><span class="mono">${String(i+1).padStart(2,'0')}</span><span><b>${esc(c.title)}</b><small>Lufthansa Technik Philippines · OJT · SolidWorks</small></span><span class="mono">OPEN →</span></button>`).join('')}</div>`;
$('#cadOther').innerHTML = D.cadOther.map((c,i)=>`<article class="cad-big">${thumb(c,c.title)}<p class="mono tag">ACADEMIC / PERSONAL · SOLIDWORKS</p><h4>${esc(c.title)}</h4><p>${esc((c.tasks||[])[0]||'')}</p><button class="btn" data-open="x" data-i="${i}">Open details</button></article>`).join('');

// experience, achievements, leadership, certs
const E = D.experience;
$('#exp').innerHTML = `<div class="job"><p class="mono tag">${esc(E.role.toUpperCase())}${E.period?' · '+esc(E.period):''}</p><h3>${esc(E.org)}</h3><ul>${E.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><p class="note">Task details and approved supporting images can be added under CAD section C.1. Descriptions reflect tasks performed during training.</p><a class="btn" href="#cad">See tooling projects</a></div>`;
$('#ach').innerHTML = D.achievements.map(a=>`<li><span>${esc(a.y)}</span><b>${esc(a.r)}</b>${esc(a.t)}</li>`).join('');
$('#lead').innerHTML = D.leadership.map(o=>`<div class="org"><h3>${esc(o.org)}</h3><ul>${o.roles.map(([r,y])=>`<li>${esc(r)}<span>${esc(y)}</span></li>`).join('')}</ul></div>`).join('');
$('#certList').innerHTML = D.certs.map(c=>`<li><span>${esc(c.t)}</span>${c.pdf?`<a href="${esc(c.pdf)}" target="_blank" rel="noopener">View PDF</a>`:''}</li>`).join('');

// contact
const C = D.contact, L = [];
L.push(`<li><span>${esc(C.email)}</span><button class="btn" id="copy" type="button">Copy email</button></li>`);
[['LinkedIn',C.linkedin],['GitHub',C.github]].forEach(([n,u])=>L.push(u?`<li><a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${n}</a></li>`:`<li><span class="off">${n}: add URL in js/data.js</span></li>`));
$('#contactLinks').innerHTML = L.join('');
$('#copy').onclick = async e => { try { await navigator.clipboard.writeText(C.email); e.target.textContent = 'Copied'; } catch(_) { e.target.textContent = 'Copy failed'; } setTimeout(()=>e.target.textContent='Copy email',1800); };
$('#form').onsubmit = e => { e.preventDefault(); const f = new FormData(e.target);
  location.href = `mailto:${C.email}?subject=${encodeURIComponent('Portfolio message from '+f.get('name'))}&body=${encodeURIComponent(f.get('msg')+'\n\n'+f.get('name')+' <'+f.get('email')+'>')}`;
  $('#formNote').textContent = 'Opening your email app…'; };

// dialog + gallery
const dlg = $('#dlg'); let imgs = [], gi = 0, trigger = null;
const sec = (h,b) => `<div class="dsec"><h4>${h}</h4>${b}</div>`;
const gallery = () => { const has = imgs.length; return `<div class="gal"><div class="gmain">${has?`<img class="thumb" src="${esc(imgs[gi])}" alt="Project image ${gi+1} of ${imgs.length}">`:ph('Gallery placeholder — add PNG, JPG, JPEG or WebP paths to data.js')}${imgs.length>1?'<button class="icon gnav l" data-g="-1" aria-label="Previous image">‹</button><button class="icon gnav r" data-g="1" aria-label="Next image">›</button>':''}</div>${imgs.length>1?`<div class="gth">${imgs.map((s,i)=>`<button data-gi="${i}" aria-label="Show image ${i+1}" aria-current="${i===gi}"><img src="${esc(s)}" alt=""></button>`).join('')}</div>`:''}</div>`; };
const show = (cat,title,html,im) => { imgs = im||[]; gi = 0; $('#dCat').textContent = cat; $('#dTitle').textContent = title; $('#dBody').innerHTML = html; dlg.showModal(); };
const links = o => (o.link||o.pdf) ? sec('Links',`<p>${o.link?`<a href="${esc(o.link)}" target="_blank" rel="noopener">External link</a> `:''}${o.pdf?`<a href="${esc(o.pdf)}" target="_blank" rel="noopener">PDF / 3D PDF</a>`:''}</p>`) : '';
const cadHtml = c => `<div id="g">${gallery()}</div>` + sec('Engineering tasks performed', c.tasks?`<ul>${c.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:`<p>${na}</p>`) + sec('CAD modeling & assembly details',`<p>${na}</p>`) + sec('Software & tools','<p>SolidWorks</p>') + sec('Technical drawings & fabrication',`<p>${c.note?esc(c.note):na}</p>`) + links(c);
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o) { trigger = o; const i = +o.dataset.i, k = o.dataset.open;
    if (k==='p') { const p = D.projects[i]; imgs = p.images; gi = 0; show(p.cat,p.title,`<div id="g">${gallery()}</div>`+sec('Overview',`<p>${p.overview?esc(p.overview):na}</p>`)+sec('Objective',`<p>${p.objective?esc(p.objective):na}</p>`)+sec('My contribution',`<p>${p.contribution?esc(p.contribution):na}</p>`)+sec('Tools & technologies',p.tools.length?`<p>${p.tools.map(esc).join(' · ')}</p>`:`<p>${na}</p>`)+sec('Technical details',`<p>${p.details?esc(p.details):na}</p>`)+links(p),p.images); }
    else { const c = (k==='o'?D.cadOjt:D.cadOther)[i]; const im = c.images||[]; imgs = im; show(k==='o'?'LUFTHANSA TECHNIK PHILIPPINES · OJT TASK':'ACADEMIC / PERSONAL CAD',c.title,cadHtml(c),im); }
    return; }
  const g = e.target.closest('[data-g]'), t = e.target.closest('[data-gi]');
  if (g||t) { gi = g ? (gi + +g.dataset.g + imgs.length) % imgs.length : +t.dataset.gi; $('#g').innerHTML = gallery(); }
  if (e.target === dlg || e.target.closest('#dClose')) dlg.close();
});
dlg.addEventListener('close', () => trigger && trigger.focus());
dlg.addEventListener('keydown', e => { if (imgs.length>1 && (e.key==='ArrowLeft'||e.key==='ArrowRight')) { gi = (gi + (e.key==='ArrowRight'?1:-1) + imgs.length) % imgs.length; $('#g').innerHTML = gallery(); } });

// nav active + back to top
const links2 = [...document.querySelectorAll('#navlinks a')];
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links2.forEach(a => a.classList.toggle('on', a.hash === '#'+en.target.id)); }), {rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section').forEach(s => io.observe(s));
const tt = $('#toTop'); addEventListener('scroll', () => tt.hidden = scrollY < 600, {passive:true});
tt.onclick = () => scrollTo({top:0});
})();
