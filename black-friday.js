/* Black Friday 2026 banner + pop-up. No tracking, no cookies; localStorage only remembers that the pop-up was closed. */
(function(){"use strict";
var B={"brand": "Ludispel", "code": "BLACK20", "title": "Lek, lær og le – 20 % rabatt", "lead": "Black Friday hos Ludispel: 20 % på utvalgte leker og spill – perfekt før julegaveshoppingen.", "bg": "#3b1f5c", "accent": "#ffd23f"};var now=Date.now(),start=Date.parse("2026-11-26T23:00:00Z"),end=Date.parse("2026-11-30T23:00:00Z");
var q=new URLSearchParams(location.search).get("bf");if(q==="live")now=start+1;if(q==="pre")now=start-3*864e5;
if(now>=end)return;var live=now>=start;
function el(t,s,h){var e=document.createElement(t);if(s)e.style.cssText=s;if(h!=null)e.innerHTML=h;return e;}
var bar=el("div","position:relative;z-index:9998;background:"+B.bg+";color:#fff;font:600 14px/1.4 Inter,Arial,sans-serif;text-align:center;padding:9px 40px");
bar.setAttribute("role","region");bar.setAttribute("aria-label","Black Friday");
var txt=el("span");bar.appendChild(txt);
function fmt(ms){var s=Math.max(0,Math.floor(ms/1e3)),d=Math.floor(s/86400),h=Math.floor(s%86400/3600),m=Math.floor(s%3600/60),x=s%60;return d+" d "+h+" t "+m+" min "+x+" s";}
function render(){var n=q?now:Date.now();if(n>=start||live){txt.innerHTML="<b>BLACK FRIDAY</b> · 20 % med koden <b style='background:"+B.accent+";color:#111;padding:1px 6px;border-radius:3px'>"+B.code+"</b> til og med 30. november · <a href='/black-friday' style='color:#fff'>Se tilbudene</a>";}
else{txt.innerHTML="<b>BLACK FRIDAY</b> starter om <span aria-live='off'>"+fmt(start-n)+"</span> · <a href='/black-friday' style='color:#fff'>Se kampanjevarene</a>";}}
render();if(!live&&!q)setInterval(render,1000);
document.body.insertBefore(bar,document.body.firstChild);
var FP={"tykk-dunjakke-til-barn-14474614": [779, 623], "sekskantet-slottstelt-for-inne-og-ute-13799933": [599, 479], "varmt-fleecesett-med-hettegenser-til-barn-16029671": [579, 463], "strikket-svopeteppe-med-volang-til-nyfodt-16025337": [569, 455], "gaveeske-med-klaer-til-nyfodt-17264307": [569, 455], "sengehimmel-i-blonder-14056941": [489, 391], "prinsessekjole-til-babyjente-bursdag-og-fest-13985138": [469, 375], "klessett-til-baby-9964534a": [469, 375], "regndress-i-ett-til-barn-med-motiv-7d8d52f7": [409, 327], "musselinteppe-i-bambus-og-bomull-120-x-120-cm-15093719": [419, 335], "vinterdress-til-baby-og-barn-med-votter-011eb2f2": [409, 327], "vinterdress-til-baby-ad0e6462": [389, 311], "langermet-pyjamas-til-smabarn-14007217": [359, 287], "svopeteppe-til-nyfodt-fin-som-gave-15649306": [349, 279], "fleecejakke-med-glidelas-til-barn-14183951": [349, 279]};/*fp*/
(function(){var m=location.pathname.match(/^\/p\/([^\/?#]+)/);if(!m||!live)return;var f=FP[m[1]];var pe=document.querySelector('.pp-price');if(!f||!pe)return;pe.innerHTML="<span style='color:#b91c1c'>"+f[1]+" kr</span> <small style='font-size:14px;font-weight:400;color:#555'>med koden "+B.code+" · Førpris (laveste pris siste 30 dager): <s>"+f[0]+" kr</s></small>";})();
if(/\/black-friday/.test(location.pathname))return;
var KEY="bf2026_popup_closed";try{if(localStorage.getItem(KEY))return;}catch(e){}
setTimeout(function(){
var ov=el("div","position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px");
var box=el("div","background:#fff;color:#111;max-width:420px;width:100%;border-radius:10px;padding:24px 22px;font:15px/1.5 Inter,Arial,sans-serif;position:relative;border-top:6px solid "+B.accent);
box.setAttribute("role","dialog");box.setAttribute("aria-modal","true");box.setAttribute("aria-labelledby","bfTitle");
var nl=document.getElementById("mlNewsletter"),nlOn=nl&&nl.dataset.state!=="disabled";
box.innerHTML="<button type='button' aria-label='Lukk' style='position:absolute;top:8px;right:10px;border:0;background:none;font-size:26px;cursor:pointer;line-height:1'>&times;</button>"+
"<p style='margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase'>"+B.brand+" · Black Friday</p><h2 id='bfTitle' style='margin:0 0 8px;font-size:22px'>"+B.title+"</h2><p style='margin:0 0 14px'>"+B.lead+"</p>"+
"<p style='margin:0 0 6px'>Bruk koden i kassen "+(live?"fram til 30. november":"fra 27. til og med 30. november")+":</p><p style='font:700 24px monospace;letter-spacing:.12em;background:#f3f3f3;padding:10px;text-align:center;margin:0 0 12px'>"+B.code+"</p>"+
"<p style='margin:0 0 14px;font-size:12px;color:#555'>Gjelder kampanjevarene på <a href='/black-friday'>/black-friday</a>. Kan ikke kombineres med andre varer i samme ordre.</p>"+
"<div style='display:flex;gap:8px;flex-wrap:wrap'><a href='/black-friday' style='background:#111;color:#fff;padding:10px 14px;text-decoration:none;border-radius:6px'>Se tilbudene</a>"+(nlOn?"<a href='#nyhetsbrev' data-nl style='padding:10px 14px;border:1px solid #111;color:#111;text-decoration:none;border-radius:6px'>Meld deg på nyhetsbrevet</a>":"")+"<button type='button' data-close style='padding:10px 14px;border:1px solid #bbb;background:#fff;border-radius:6px;cursor:pointer'>Nei takk</button></div>";
ov.appendChild(box);document.body.appendChild(ov);
function close(){ov.remove();try{localStorage.setItem(KEY,"1");}catch(e){}document.removeEventListener("keydown",esc);}
function esc(e){if(e.key==="Escape")close();}
document.addEventListener("keydown",esc);ov.addEventListener("click",function(e){if(e.target===ov)close();});
box.querySelectorAll("button,[data-nl]").forEach(function(b){b.addEventListener("click",close);});
box.querySelector("button").focus();},6000);
})();
