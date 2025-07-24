export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <title>Я тебя люблю</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            background: linear-gradient(135deg, #ff9a9e, #fad0c4, #a18cd1, #fbc7c7);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-family: 'Arial Black', Arial, sans-serif;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
          }
          h1 {
            font-size: 5em;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <h1>Я тебe люблю!</h1>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  },
};
