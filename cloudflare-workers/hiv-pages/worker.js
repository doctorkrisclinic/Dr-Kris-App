const B='https://cdn.jsdelivr.net/gh/doctorkrisclinic/Dr-Kris-App@cloudflare-hiv-pages/cloudflare-workers/hiv-pages/';
const M={'/knowledge/sti-hiv/do-i-need-pep-or-prep/':'p1-th.html','/en/knowledge/sti-hiv/do-i-need-pep-or-prep/':'p1-en.html','/knowledge/sti-hiv/hiv-risk-assessment/':'p2-th.html','/en/knowledge/sti-hiv/hiv-risk-assessment/':'p2-en.html'};
export default{async fetch(req){const u=new URL(req.url);let p=u.pathname;
if(p.startsWith('/knowledge/sti-hiv/img/')){const f=p.split('/').pop();const r=await fetch(B+f,{cf:{cacheTtl:86400,cacheEverything:true}});return new Response(r.body,{status:r.status,headers:{'content-type':f.endsWith('.webp')?'image/webp':'image/jpeg','cache-control':'public, max-age=604800'}});}
if(!p.endsWith('/')&&M[p+'/']){u.pathname=p+'/';return Response.redirect(u.toString(),301);}
const f=M[p];if(!f)return fetch(req);
const r=await fetch(B+f,{cf:{cacheTtl:600,cacheEverything:true}});
return new Response(r.body,{status:r.status,headers:{'content-type':'text/html; charset=utf-8','cache-control':'public, max-age=300'}});}};
