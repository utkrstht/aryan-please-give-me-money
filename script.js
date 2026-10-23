const dlg=document.getElementById('dlg');
const msgs=[
 "Hello!! we are nia and kaboom.<br>We request good boba.<br>If u have boba pls give us.",
 "Wow u clicked again!! Boba?? 🥺",
 "kaboom will dance <br>if u buy us boba.<br>It is a bad dance.",
 "OK final offer:<br>1 boba = 1 friend.<br>Terms and conditions apply."
];
let i=0, n=362686, pct=3;
function applyTheme(dark){
  document.body.classList.toggle('dark',dark);
  document.getElementById('themeBtn').textContent=dark?'light mode':'dark mode';
}
function toggleTheme(){
  const dark=!document.body.classList.contains('dark');
  applyTheme(dark);
  localStorage.setItem('theme',dark?'dark':'light');
}
const savedTheme=localStorage.getItem('theme');
if(savedTheme)applyTheme(savedTheme==='dark');
function beg(){
  document.getElementById('dm').innerHTML=msgs[i++%msgs.length];
  dlg.showModal();
  n+=Math.floor(Math.random()*9)+1;
  document.getElementById('cnt').textContent=String(n).padStart(10,'0');
  pct=Math.min(100,pct+7);
  document.getElementById('bar').style.width=pct+'%';
  document.getElementById('pct').textContent=pct+'% of 1 boba';
}
function yes(){
  dlg.close();
  alert("YAYYY!! nia and kaboom are crying happy tears. they will now drink this boba in 4 seconds.");
}
document.addEventListener('mousemove',e=>{
  const s=document.createElement('div');
  s.className='spark';
  s.textContent=['✨','🧋','⭐','💖'][Math.floor(Math.random()*4)];
  s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';
  document.getElementById('stars').appendChild(s);
  setTimeout(()=>s.remove(),1000);
});
setTimeout(beg,1500);
