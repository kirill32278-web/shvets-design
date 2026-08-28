(async()=>{
  try{
    const old=await fetch('https://raw.githubusercontent.com/kirill32278-web/shvets-design/d246f8049957ad0ff923885ab23b4269cfa635f2/assets/new/loader.js',{cache:'no-store'}).then(r=>r.text());
    (0,eval)(old);
  }catch(e){console.error('catalog loader backup failed',e)}

  const apply=()=>{
    if(document.getElementById('approved-shvets-layout')) return;
    const style=document.createElement('style');
    style.id='approved-shvets-layout';
    style.textContent=`
      :root{--approved-bg:#16222a;--approved-panel:#1b2830;--approved-text:#eef2f3;--approved-muted:#9aa6ac;}
      html,body{background:#142029!important;color:var(--approved-text)!important;}
      body{background-image:linear-gradient(180deg,#17242c 0,#121c23 100%)!important;background-attachment:fixed!important;}
      body:before,body:after{opacity:.24!important;}
      header{
        position:absolute!important;top:0!important;left:0!important;right:0!important;z-index:50!important;
        height:96px!important;padding:20px 3.2vw 0!important;
        background:transparent!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;
        align-items:flex-start!important;
      }
      .brand{font-size:18px!important;letter-spacing:.16em!important;line-height:1!important;font-weight:600!important;margin-top:9px!important;}
      .brand small{font-size:10px!important;letter-spacing:.11em!important;margin-top:8px!important;color:#d4dadd!important;font-weight:400!important;}
      .nav{gap:38px!important;margin-top:17px!important;}
      .nav a{font-size:12px!important;letter-spacing:.08em!important;color:#eef2f3!important;font-weight:400!important;}
      header>.btn{height:59px!important;padding:0 26px!important;margin-top:1px!important;font-size:11px!important;letter-spacing:.11em!important;background:rgba(14,24,30,.08)!important;border-color:rgba(231,238,241,.58)!important;}
      .hero{
        min-height:0!important;height:404px!important;display:block!important;position:relative!important;overflow:hidden!important;
        border:0!important;background:
          linear-gradient(90deg,rgba(12,22,28,.90) 0%,rgba(16,26,32,.72) 25%,rgba(35,49,58,.18) 48%,rgba(21,33,40,.12) 100%),
          linear-gradient(180deg,#314049 0%,#17242c 100%)!important;
      }
      .hero:before{
        content:""!important;position:absolute!important;inset:0!important;pointer-events:none!important;opacity:1!important;
        background:
          linear-gradient(90deg,transparent 0 30%,rgba(205,219,225,.08) 30.1%,transparent 30.4% 39%,rgba(225,235,239,.15) 39.1%,transparent 39.4% 47%,rgba(225,235,239,.10) 47.1%,transparent 47.4% 100%),
          repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0,rgba(255,255,255,.025) 1px,transparent 1px,transparent 125px)!important;
      }
      .hero-copy{
        position:absolute!important;z-index:4!important;left:4.4vw!important;top:121px!important;width:390px!important;
        padding:0!important;display:block!important;
      }
      .hero .micro{display:block!important;font:400 11px/1.2 Arial,sans-serif!important;letter-spacing:.10em!important;color:#c9d0d4!important;text-transform:uppercase!important;margin:0 0 21px!important;}
      .hero .micro:before{display:none!important;}
      .hero h1{font:300 27px/1.1 Arial,sans-serif!important;letter-spacing:.16em!important;margin:0 0 20px!important;text-transform:uppercase!important;white-space:nowrap!important;}
      .hero h1 span{display:none!important;}
      .hero .lead{font:400 14px/1.45 Arial,sans-serif!important;color:#c5ced2!important;max-width:360px!important;margin:0!important;}
      .hero-actions{margin:28px 0 0!important;display:block!important;}
      .hero-actions .btn{width:244px!important;height:42px!important;padding:0 20px!important;justify-content:flex-start!important;font-size:11px!important;letter-spacing:.10em!important;position:relative!important;background:rgba(19,30,36,.20)!important;border-color:rgba(232,239,242,.42)!important;}
      .hero-actions .btn:after{content:'⟶'!important;position:absolute!important;right:20px!important;font-size:18px!important;font-weight:300!important;}
      .hero-actions .textlink{display:none!important;}
      .hero-visual{
        position:absolute!important;z-index:2!important;inset:0 0 0 42%!important;min-height:0!important;height:404px!important;
        display:flex!important;align-items:flex-end!important;justify-content:center!important;
        background:
          linear-gradient(90deg,rgba(110,127,136,.06),rgba(206,218,224,.10) 26%,rgba(57,74,83,.06) 64%,rgba(12,22,28,.08)),
          repeating-linear-gradient(90deg,transparent 0 17%,rgba(233,240,243,.10) 17.2%,transparent 17.6% 27%)!important;
      }
      .hero-visual:before{inset:0!important;border:0!important;background:
        radial-gradient(ellipse at 68% 70%,rgba(226,234,238,.18),transparent 31%),
        linear-gradient(180deg,rgba(255,255,255,.04),rgba(7,14,18,.08))!important;}
      .hero-visual img{height:390px!important;max-height:390px!important;max-width:77%!important;width:auto!important;object-fit:contain!important;object-position:center bottom!important;filter:drop-shadow(0 28px 28px rgba(0,0,0,.45)) saturate(.80) contrast(1.04)!important;}
      .hero .objno,.hero .bottom-note{display:none!important;}
      #works,.works-section{padding:27px 0 0!important;background:#17242c!important;border:0!important;}
      #works .shell,.works-section .shell{width:calc(100% - 9.2vw)!important;max-width:none!important;margin:0 auto!important;}
      #works .headrow,.works-section .headrow{margin:0 0 15px!important;display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:20px!important;}
      #works .headrow>div:first-child,.works-section .headrow>div:first-child{display:block!important;}
      #works .headrow .micro,.works-section .headrow .micro{display:none!important;}
      #works h2,.works-section h2{font:400 17px/1.15 Arial,sans-serif!important;letter-spacing:.20em!important;text-transform:uppercase!important;margin:0 0 5px!important;color:#eef2f3!important;}
      #works .intro,.works-section .intro{font:400 12px/1.2 Arial,sans-serif!important;color:#7f8b91!important;margin:0!important;max-width:none!important;}
      .approved-catalog-tools{display:flex;align-items:center;gap:16px;margin-top:-3px;color:#89969c;text-transform:uppercase;font:400 10px/1 Arial,sans-serif;letter-spacing:.13em;}
      .approved-filter{height:34px;min-width:165px;border:1px solid rgba(225,235,239,.14);display:flex;align-items:center;justify-content:space-between;padding:0 13px;color:#8d999f;background:rgba(255,255,255,.015);}
      .approved-grid-icon{width:28px;height:28px;display:grid;grid-template-columns:repeat(2,8px);grid-template-rows:repeat(2,8px);gap:3px;padding:3px;}
      .approved-grid-icon i{border:1px solid rgba(211,223,228,.56);display:block;}
      #grid{grid-template-columns:repeat(12,1fr)!important;gap:16px!important;margin-top:0!important;}
      #grid .card{grid-column:span 3!important;}
      @media(max-width:1200px){
        header{padding-left:28px!important;padding-right:28px!important}.nav{gap:22px!important}.nav a{font-size:10px!important}
        #grid .card{grid-column:span 4!important;}
      }
      @media(max-width:900px){
        header{height:76px!important}.nav{display:none!important}.hero{height:500px!important}.hero-copy{top:110px!important;left:24px!important}.hero-visual{inset:0!important;height:500px!important;opacity:.5!important}.hero-visual img{height:460px!important;max-height:460px!important;max-width:95%!important}.hero-copy{width:calc(100% - 48px)!important}.hero h1{white-space:normal!important;font-size:25px!important}.hero .lead{max-width:330px!important}.approved-catalog-tools{display:none!important}#grid .card{grid-column:span 6!important;}}
      @media(max-width:620px){#grid .card{grid-column:1/-1!important;}#works .shell,.works-section .shell{width:calc(100% - 28px)!important}.brand{font-size:15px!important}.brand small{font-size:8px!important}header>.btn{height:44px!important;font-size:9px!important;padding:0 14px!important}.hero-copy{top:105px!important}.hero h1{font-size:23px!important;letter-spacing:.12em!important}}
    `;
    document.head.appendChild(style);

    const hero=document.querySelector('.hero');
    if(hero){
      const micro=hero.querySelector('.micro'); if(micro) micro.textContent='ДИЗАЙН С МЫСЛЬЮ О БУДУЩЕМ';
      const h1=hero.querySelector('h1'); if(h1) h1.innerHTML='АВТОРСКИЕ ОБЪЕКТЫ';
      const lead=hero.querySelector('.lead'); if(lead) lead.innerHTML='Коллекция предметов и арт-объектов из алюминия<br>и металла, созданных в уникальном стиле.<br>Каждое изделие — результат идеи, формы и<br>инженерной точности.';
      const btn=hero.querySelector('.hero-actions .btn'); if(btn){btn.textContent='СМОТРЕТЬ КАТАЛОГ';btn.setAttribute('href','#works');}
    }

    const grid=document.getElementById('grid');
    const works=grid?grid.closest('section'):document.getElementById('works');
    if(works){
      works.id='works'; works.classList.add('works-section');
      const shell=grid?grid.closest('.shell'):works.querySelector('.shell');
      if(shell){
        let head=shell.querySelector('.headrow');
        if(!head){head=document.createElement('div');head.className='headrow';shell.insertBefore(head,shell.firstChild);}
        head.innerHTML=`<div><h2>КАТАЛОГ ОБЪЕКТОВ</h2><p class="intro">28 уникальных объектов</p></div><div class="approved-catalog-tools"><span>ФИЛЬТР:</span><div class="approved-filter"><span>ВСЕ КАТЕГОРИИ</span><span>⌄</span></div><span class="approved-grid-icon"><i></i><i></i><i></i><i></i></span></div>`;
      }
    }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply,{once:true}); else apply();
  setTimeout(apply,600);
})();