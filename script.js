const dlg=document.getElementById('dlg');
const msgs=[
 "Hello!! I am Aryan.<br>I request good boba.<br>If u have boba pls give me.",
 "Wow u clicked again!!<br>That means u care.<br>Boba?? 🥺",
 "I will do a little dance<br>if u buy me boba.<br>It is a bad dance.",
 "OK final offer:<br>1 boba = 1 friend.<br>Terms and conditions apply."
];
let i=0, n=362686, pct=3;
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
  alert("YAYYY!! 🧋🎉 Aryan is crying happy tears. He will now drink this boba in 4 seconds.");
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
