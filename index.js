require('dotenv').config();
const express = require('express');
const authInterceptor = require('./middleware/auth');
const webhookLogger = require('./middleware/webhookLogger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(authInterceptor);
app.use(webhookLogger);

app.get('/test', (req, res) => {
  res.json({ test: 'success' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
