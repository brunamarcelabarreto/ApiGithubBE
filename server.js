
// const express = require('express');
// const axios = require('axios');

// const token = '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'

// const app = express();
// app.use(express.json());
// const BASE_URL = 'https://api.github.com';


// // List of users
// app.get('/users', async (req, res) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/users`);
//     res.send({
//       data: response.data,
//       nextLink: getNextLink(response.headers.link)
//     })
//   } catch (err) {
//     res.json(err);
//   }
// });

// // Details of users
// app.get('/details', async (req, res) => {
//   try {
//     const { username } = req.query;
//     console.log(username)
//     const url = `${BASE_URL}/users/${username}`;
//     const response = await axios.get(url, {
//       headers:
//       {
//         Authorization: `token ${token}`
//       }
//     });
//     res.send(response.data);
//   } catch (err) {
//     res.json(err);
//   }
// });

// // User's repositories'
// app.get('/repos', async (req, res) => {
//   try {
//     const { username } = req.query;
//     const url = `${BASE_URL}/users/${username}/repos`;
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `token ${token}`
//       }
//     });
//     res.setHeader('Cache-Control', 'no-cache');
//     res.send(response.data);
//   } catch (err) {
//     res.json(err);
//   }
// });

// function getNextLink(linkHeader) {
//   const links = linkHeader.split(',').map((link) => {
//     const [url, rel] = link.split(';').map((part) => part.trim());
//     return { url: url.slice(1, -1), rel: rel.slice(5, -1) };
//   })
//   const nextLink = links.find((link) => link.rel === 'next');
//   return nextLink ? nextLink.url : null;
// }

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.sendStatus(500);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./userRoutes');
app.use('/api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
