const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiUrl = "https://85c1-136-185-142-4.ngrok-free.app/auth/v1/get-customers";

app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.json(response.data.customers);
    console.log(response.data.customers);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);

});
