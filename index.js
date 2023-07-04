import dotenv from 'dotenv'
import { createApp, eventHandler, toNodeListener } from 'h3';
import { listen } from 'listhen';

dotenv.config()
const app = createApp();

app.use(
  '/',
  eventHandler(async () => {
    await fetch(
      process.env.SANTAI_WEBHOOK_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: 'Senin? Gue sih santai',
          embeds: [{
            image: {
              url: 'https://assets.change.org/photos/4/qx/wv/qyqxwVxhrtfoeny-800x450-noPad.jpg?1538395188'
            }
          }]
        })
      }
    )

    return { 'status': 'ok' }
  })
);

listen(toNodeListener(app));
