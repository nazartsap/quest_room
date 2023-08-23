const express = require('express');
const fetch = require('isomorphic-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const TELEGRAM_BOT_TOKEN = '5808623661:AAEgZLpJoWQdkbnhmXg2dmQjzLOXqn97wlc';
const TELEGRAM_CHAT_ID = '-919585249'; // Chat ID для вашего чата с ботом

app.post('/send-telegram', async (req, res) => {
  const { name, phone,date } = req.body;

  const message = `Имя: ${name}\nТелефон: ${phone}\nДата: ${date}`;
  const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
    });

    const data = await response.json();

    if (data.ok) {
      console.log('Message sent successfully');
      res.status(200).send('Message sent successfully');
    } else {
      console.error('Error sending message');
      res.status(500).send('Error sending message');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
