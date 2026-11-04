const F=__F__;
__SHELVES__
const LN='https://line.me/R/oaMessage/%40dr.krisclinic';
const FIX='<style id="chips-fix">.hook .chips a{background:rgba(255,255,255,.08)}.hook .chips a:hover{background:rgba(255,255,255,.18)}</style>';
function dec(b){const s=atob(b);const u=new Uint8Array(s.length);for(let i=0;i<s.length;i++)u[i]=s.charCodeAt(i);return u;}
function isHtml(r){return (r.headers.get('content-type')||'').includes('text/html');}
const GALE_TH='/knowledge/lgbtq-gender/gale-dosage-cost/', GALE_EN='/en/knowledge/lgbtq-gender/gale-dosage-cost/';
const PREP_TH='/knowledge/sti-hiv/prep-price-where-to-buy/', PREP_EN='/en/knowledge/sti-hiv/prep-price-where-to-buy/';
const FREE_TH='/knowledge/sti-hiv/free-prep-vs-clinic/', FREE_EN='/en/knowledge/sti-hiv/free-prep-vs-clinic/';
function kcard(href,img,tag,h3,p){return '<article class="card"><a href="'+href+'" class="card-link"><span class="reveal"><img src="'+img+'" alt="" width="600" height="315" loading="lazy" decoding="async"></span><div class="card-body"><span class="tag">'+tag+'</span><h3>'+h3+'</h3>'+(p?'<p>'+p+'</p>':'')+'</div></a></article>';}
const C={
 galeTH:kcard(GALE_TH,'/knowledge/img/covers/gale-dosage-cost.webp','LGBTQ+ และฮอร์โมนข้ามเพศ','ยาเกล (Gale) กินยังไง วันละกี่เม็ด? ขนาดยา ผลเลือด และค่าใช้จ่ายต่อเดือน','กินวันละ 1–2 เม็ดสูงไปไหม เทียบแนวทางมาตรฐาน เป้าหมายผลเลือด และค่ายาต่อเดือนตามขนาดยา'),
 galeEN:kcard(GALE_EN,'/knowledge/img/covers/gale-dosage-cost-en.webp','LGBTQ+ &amp; Gender-Affirming Hormones','Gale (Cyproterone 50 mg) Dosage: How Many Tablets a Day? Blood Targets and Monthly Cost','Is 1–2 tablets a day too much? Guideline doses, blood targets and monthly cost by dose.'),
 prepTH:kcard(PREP_TH,'/knowledge/img/covers/prep-price-where-to-buy.webp','STI · HIV · PrEP','ยา PrEP ราคาเท่าไหร่ ซื้อที่ไหน? รับ PrEP ออนไลน์ ส่งยาทั่วประเทศ','ราคาต่อเดือน ช่องทางรับยาในไทย และขั้นตอนรับ PrEP ออนไลน์กับแพทย์ ส่งยาแบบปกปิด'),
 prepEN:kcard(PREP_EN,'/knowledge/img/covers/prep-price-where-to-buy-en.webp','STI, HIV &amp; PrEP','PrEP in Thailand: Price, Where to Get It and Online PrEP with Nationwide Delivery','Monthly cost, every way to get PrEP in Thailand and online PrEP with discreet delivery.'),
 freeTH:kcard(FREE_TH,'/knowledge/img/covers/free-prep-vs-clinic.webp','STI · HIV · PrEP','รับยา PrEP ฟรีได้ที่ไหน? เทียบรับฟรีกับรับที่คลินิก แบบไหนเหมาะกับคุณ','ใครรับฟรีได้ รับที่ไหน และเมื่อไหร่ที่การรับที่คลินิกเหมาะกว่า'),
 freeEN:kcard(FREE_EN,'/knowledge/img/covers/free-prep-vs-clinic-en.webp','STI, HIV &amp; PrEP','Free PrEP vs Clinic PrEP in Thailand: Which Suits You?','Who can get PrEP free, and when a clinic is the better fit.')};
function box(en,items){return '<aside class="note" style="margin:0 0 26px"><p><strong>'+(en?'Read next:':'อ่านต่อ:')+'</strong></p><ul style="margin:6px 0 0 1.1em">'+items.map(([h,t])=>'<li><a href="'+h+'">'+t+' →</a></li>').join('')+'</ul></aside>';}
const PBOX_TH=box(false,[[PREP_TH,'ยา PrEP ราคาเท่าไหร่ ซื้อที่ไหน? รับออนไลน์ ส่งยาทั่วประเทศ'],[FREE_TH,'รับยา PrEP ฟรีได้ที่ไหน? เทียบรับฟรีกับรับที่คลินิก']]);
const PBOX_EN=box(true,[[PREP_EN,'PrEP in Thailand: price, where to get it, online PrEP'],[FREE_EN,'Free PrEP vs clinic PrEP in Thailand']]);
const GBOX_TH=box(false,[[GALE_TH,'ยาเกล (Gale) กินยังไง วันละกี่เม็ด? ขนาดยาที่ปลอดภัย ผลเลือด และค่าใช้จ่ายต่อเดือน']]);
const GBOX_EN=box(true,[[GALE_EN,'Gale dosage: how many tablets a day, blood targets and monthly cost']]);
const NOTE='<p class="price-note" style="font-size:13px;color:#857D71;margin:6px 0 12px;line-height:1.6">* ราคาที่แสดงเป็นราคา ณ ปัจจุบัน ไม่ใช่ราคาถาวร อาจปรับตามอัตราเงินเฟ้อหรือต้นทุนยาที่สูงขึ้น โปรดตรวจสอบราคาล่าสุดกับเจ้าหน้าที่ทาง <a href="'+LN+'" style="color:#8D6E45">LINE @dr.krisclinic</a> อีกครั้ง</p>';
const plink=(h,t)=>'<p style="margin:6px 0 14px"><a href="'+h+'" style="color:#8D6E45;font-weight:600">📖 '+t+' →</a></p>';
const GALE_LINK=plink(GALE_TH,'อ่านก่อนใช้: ยาเกลกินยังไง วันละกี่เม็ด และค่าใช้จ่ายต่อเดือน');
const PREP_LINK=plink(PREP_TH,'อ่านก่อนรับยา: PrEP ราคาเท่าไหร่ ซื้อที่ไหน รับออนไลน์อย่างไร')+plink(FREE_TH,'รับ PrEP ฟรีได้ไหม? เทียบรับฟรีกับรับที่คลินิก');
const SMU=[GALE_TH,GALE_EN,PREP_TH,PREP_EN,FREE_TH,FREE_EN];
const smu=u=>'<url><loc>https://doctorkrisclinic.com'+u+'</loc><lastmod>2026-11-04</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>';
const PREP_ARTICLES=['prep','prep-on-demand','prep-vs-pep','injectable-prep','tenofovir-generic-brands','online-prep-pep-telemedicine','prep-pep-surat-thani','pep','after-hiv-exposure','doxy-pep','hiv-self-test','sex-work-concepts'];
const HUB_CSS='<style id="dk-new-css">.dk-new{margin-top:8px}.dk-new .sec-head .badge{display:inline-block;background:#211D19;color:#fff;font-size:11.5px;letter-spacing:.1em;padding:3px 10px;border-radius:999px;margin-left:8px;vertical-align:middle}</style>';
function hubNew(en){return '<section class="wrap block dk-new"><div class="sec-head"><div><span class="eyebrow">'+(en?'New guides':'บทความใหม่')+'</span><h2>'+(en?'Just published: PrEP and gender-affirming hormones':'ใหม่ล่าสุด: PrEP และฮอร์โมนข้ามเพศ')+'<span class="badge">NEW</span></h2><p>'+(en?'Prices, where to get it and how to start safely with a doctor.':'ราคา ซื้อที่ไหน และเริ่มใช้อย่างปลอดภัยกับแพทย์')+'</p></div><a class="more" href="'+(en?'/en':'')+'/knowledge/sti-hiv/">'+(en?'See all':'ดูทั้งหมด')+'</a></div><div class="cards cards-3">'+(en?C.prepEN+C.freeEN+C.galeEN:C.prepTH+C.freeTH+C.galeTH)+'</div></section>';}
const HOME_CSS='<style id="dk-home-prep">.dk-prep .explore-grid{grid-template-columns:repeat(3,minmax(0,1fr))}@media (max-width:860px){.dk-prep .explore-grid{grid-template-columns:1fr}}.dk-prep .dk-cta{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:22px}.dk-prep .dk-cta a{display:inline-block;padding:12px 22px;text-decoration:none;font-weight:600;border-radius:2px}.dk-prep .dk-cta .l{background:#06C755;color:#fff}.dk-prep .dk-cta .i{background:#211D19;color:#fff}.dk-prep .explore-card img{aspect-ratio:1200/630;object-fit:cover}</style>';
function homePrep(en){const ec=(h,img,b,t)=>'<a class="explore-card" href="'+h+'"><img src="'+img+'" alt="" loading="lazy" width="600" height="315"><span><b>'+b+'</b>'+t+'<em>'+(en?'Read more →':'อ่านเพิ่มเติม →')+'</em></span></a>';
 return '<section id="prep-online" class="section-alt dk-prep"><div class="wrap"><div class="section-head reveal" style="text-align:center;margin-left:auto;margin-right:auto"><span class="eyebrow">'+(en?'HIV prevention · PrEP':'ป้องกัน HIV · PrEP')+'</span><h2>'+(en?'PrEP with a doctor, delivered anywhere in Thailand':'รับยา PrEP กับแพทย์ ส่งยาแบบปกปิดทั่วประเทศ')+'</h2><p>'+(en?'Consult on LINE, test, and receive PrEP at home or your hotel. Every patient sees a doctor first.':'ปรึกษาทาง LINE ตรวจเลือด แล้วรับยาถึงบ้าน ทุกรายปรึกษาแพทย์ก่อน ไม่ขายยาออนไลน์')+'</p></div><div class="explore-grid reveal">'+
 (en?ec(PREP_EN,'/knowledge/img/covers/prep-price-where-to-buy-en.webp','PrEP price and where to get it','Monthly cost, options in Thailand and online PrEP')+ec(FREE_EN,'/knowledge/img/covers/free-prep-vs-clinic-en.webp','Free PrEP vs clinic PrEP','Who can get it free and which suits you')+ec(GALE_EN,'/knowledge/img/covers/gale-dosage-cost-en.webp','Gale (cyproterone) dosage','How many tablets a day, blood targets and cost')
 :ec(PREP_TH,'/knowledge/img/covers/prep-price-where-to-buy.webp','ยา PrEP ราคาเท่าไหร่ ซื้อที่ไหน','ราคาต่อเดือน ช่องทางรับยา และรับ PrEP ออนไลน์')+ec(FREE_TH,'/knowledge/img/covers/free-prep-vs-clinic.webp','รับ PrEP ฟรี หรือรับที่คลินิก','ใครรับฟรีได้ และแบบไหนเหมาะกับคุณ')+ec(GALE_TH,'/knowledge/img/covers/gale-dosage-cost.webp','ยาเกล (Gale) กินยังไง','วันละกี่เม็ด ผลเลือด และค่าใช้จ่ายต่อเดือน'))+
 '</div><div class="dk-cta reveal"><a class="l" href="'+LN+'" rel="noopener">'+(en?'Consult a doctor on LINE':'ปรึกษาแพทย์ทาง LINE')+'</a><a class="i" href="/member/">'+(en?'Sign up as a member':'สมัครสมาชิก')+'</a></div></div></section>';}
async function text(r){return await r.text();}
function htmlResp(t,r,extra){const h=new Headers(r.headers);h.delete('content-length');h.delete('content-encoding');if(extra)for(const k in extra)h.set(k,extra[k]);return new Response(t,{status:r.status,headers:h});}
export default{async fetch(req,env){const u=new URL(req.url);const p=u.pathname;
try{
// home pages: wrap drkris-seo
if(p==='/'||p==='/en/'){const r=await env.SEO.fetch(req);if(!isHtml(r)||r.status!==200)return r;const en=p==='/en/';
 return new HTMLRewriter().on('head',{element(e){e.append(HOME_CSS,{html:true})}}).on('section#explore',{element(e){e.before(homePrep(en),{html:true})}}).transform(r);}
// knowledge hub (and /blog/ redirects here)
if(p==='/knowledge/'||p==='/en/knowledge/'){const r=await env.UP.fetch(req);if(!isHtml(r)||r.status!==200)return r;const en=p.startsWith('/en/');let first=true;
 return new HTMLRewriter().on('head',{element(e){e.append(HUB_CSS,{html:true})}}).on('section.hub-hero',{element(e){if(first){e.after(hubNew(en),{html:true});first=false}}}).transform(r);}
// category shelves
let m=p.match(/^\/(en\/)?knowledge\/([a-z-]+)\/$/);
if(m&&SHELVES[m[2]]){const en=!!m[1],cat=m[2];const r=await env.UP.fetch(req);if(!isHtml(r)||r.status!==200)return r;let t=await r.text();
 const extra=cat==='lgbtq-gender'?[{slug:'gale-dosage-cost',html:en?C.galeEN:C.galeTH}]:cat==='sti-hiv'?[{slug:'free-prep-vs-clinic',html:en?C.freeEN:C.freeTH},{slug:'prep-price-where-to-buy',html:en?C.prepEN:C.prepTH}]:[];
 return htmlResp(shelfify(t,cat,en,extra),r,{'x-dk-shelf':'1'});}
// androcur vs gale
if(/^\/(en\/)?knowledge\/lgbtq-gender\/androcur-vs-gale\/$/.test(p)){const en=p.startsWith('/en/');const r=await env.UP.fetch(req);if(!isHtml(r))return r;let first=true;
 return new HTMLRewriter().on('head',{element(e){e.append(FIX,{html:true})}}).on('section.tldr',{element(e){e.after(en?GBOX_EN:GBOX_TH,{html:true})}}).on('section.related .cards',{element(e){if(first){e.prepend(en?C.galeEN:C.galeTH,{html:true});first=false}}}).transform(r);}
// existing PrEP articles: read-next box + related card
m=p.match(/^\/(en\/)?knowledge\/(sti-hiv|sexual-behavior)\/([a-z0-9-]+)\/$/);
if(m&&(PREP_ARTICLES.includes(m[3])||m[3]==='sex-worker-health')){const en=!!m[1];const r=await env.UP.fetch(req);if(!isHtml(r))return r;let first=true,boxed=false;
 return new HTMLRewriter().on('section.tldr',{element(e){if(!boxed){e.after(en?PBOX_EN:PBOX_TH,{html:true});boxed=true}}}).on('section.related .cards',{element(e){if(first){e.prepend(en?C.freeEN+C.prepEN:C.freeTH+C.prepTH,{html:true});first=false}}}).transform(r);}
// sitemap
if(p==='/knowledge/sitemap.xml'||p==='/en/knowledge/sitemap.xml'){const r=await env.UP.fetch(req);if(r.status!==200)return r;let t=await r.text();const add=SMU.filter(x=>!t.includes('<loc>https://doctorkrisclinic.com'+x+'</loc>')).map(smu).join('');t=t.replace('</urlset>',add+'</urlset>');return htmlResp(t,r);}
// service page
if(p==='/hiv-sti-prevention/'){const r=await env.SEO.fetch(req);if(!isHtml(r))return r;let done=false;
 return new HTMLRewriter().on('article.wrap h1',{element(e){if(!done){e.after('<div style="margin:14px 0 18px">'+PREP_LINK+'</div>',{html:true});done=true}}}).transform(r);}
if(p==='/shopping/prep-hiv-price/'){const r=await env.SEO.fetch(req);if(!isHtml(r))return r;let done=false;
 return new HTMLRewriter().on('div.answer',{element(e){if(!done){e.after(PREP_LINK,{html:true});done=true}}}).transform(r);}
// product pages: price note (+ article links)
if(/^\/shopping\/[^\/]+\/[^\/]+\/?$/.test(p)){const r=await env.SEO.fetch(req);if(!isHtml(r))return r;const gale=p.includes('gale-cyproterone');const prep=p.startsWith('/shopping/hiv-prevention/');
 const o=new HTMLRewriter().on('p.price',{element(e){e.after(NOTE+(gale?GALE_LINK:'')+(prep?PREP_LINK:''),{html:true})}}).transform(r);const h=new Headers(o.headers);h.set('x-dk-note','1');return new Response(o.body,{status:o.status,headers:h});}
if(/\/(gale-dosage-cost|prep-price-where-to-buy|free-prep-vs-clinic)$/.test(p))return Response.redirect(u.origin+p+'/'+u.search,301);
if(p.startsWith('/shopping'))return env.SEO.fetch(req);
const f=F[p];if(!f)return env.UP.fetch(req);
const html=f[0].startsWith('text/html');
return new Response(dec(f[1]),{headers:{'content-type':f[0],'cache-control':html?'public, max-age=300':'public, max-age=604800','x-content-type-options':'nosniff'}});
}catch(err){ if(p==='/'||p==='/en/'||p.startsWith('/shopping')||p==='/hiv-sti-prevention/')return env.SEO.fetch(req); return env.UP.fetch(req);}
}};
