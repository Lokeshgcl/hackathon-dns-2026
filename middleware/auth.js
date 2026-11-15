function authInterceptor(req, res, next) {
  const apiId = req.headers['x-api-id'];
  const apiKey = req.headers['x-api-key'];

  if (!apiId || !apiKey) {
    return res.status(401).json({ error: 'Missing API credentials' });
  }

  if (apiId !== process.env.API_ID || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Invalid API credentials' });
  }

  next();
}

module.exports = authInterceptor;
