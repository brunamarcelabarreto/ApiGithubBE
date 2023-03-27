const axios = require('axios');
const token = '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';
const BASE_URL = 'https://api.github.com';

exports.listUsers = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const page = parseInt(req.query.page || 1);
    const limit = parseInt(req.query.limit || 10);
    const offset = (page - 1) * limit;
    const users = response.data.slice(offset, offset + limit);
    const totalUsers = response.data.length;
    const totalPages = Math.ceil(totalUsers / limit);
    res.send({
      users,
      pagination: {
        page,
        limit,
        totalUsers,
        totalPages,
      },
    });
  } catch (err) {
    console.error("Error:", err);
    res.json(err);
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const { username } = req.params;
    const url = `${BASE_URL}/users/${username}`;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    res.json(err);
  }
};

exports.getUserRepos = async (req, res) => {
  try {
    const { username } = req.params;
    const url = `${BASE_URL}/users/${username}/repos`;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (err) {
    res.json(err);
  }
};

