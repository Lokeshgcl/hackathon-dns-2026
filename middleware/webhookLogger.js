const N8N_WEBHOOK_URL = 'process.env.N8N_WEBHOOK_URL';

function webhookLogger(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const logData = {
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      ip: req.ip,
      apiId: 'hackathon-dns',
      duration: Date.now() - start,
      timestamp: new Date().toISOString()
    };

    fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logData)
    }).catch(() => {});
  });

  next();
}

module.exports = webhookLogger;
