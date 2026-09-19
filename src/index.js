<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#090c14" />
    <meta name="description" content="StreetReady — Apologetics Training Platform" />
    <title>StreetReady</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: #090c14; }
      @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      .fade-up { animation: fadeUp 0.3s ease both; }
      button:hover { opacity: 0.85; }
      textarea:focus, input:focus { outline: none; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #0d1020; }
      ::-webkit-scrollbar-thumb { background: #2a3a4a; border-radius: 2px; }
      .sr-street { font-family: 'Bebas Neue', sans-serif !important; }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
