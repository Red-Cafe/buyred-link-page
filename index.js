  const express = require('express');
  
  const app = express();
  
  const links = {
    1: {
      "name": "discord",
      "url": "https://redcafe.lol/invite",
    },
    2: {
      "name": "website",
      "url": "https://redcafe.lol/",
    },
    3: {
      "name": "github",
      "url": "https://github.com/Red-Cafe",
    },
     4: {
      "name": "blogs",
      "url": "https://redcafe.lol/blog",
    }
  }
  
  let linkss = [];
  
  
  app.get('/', (req, res) => {
    res.json(links)
  });
  
  app.get("/:name", async (req, res) => {
  
    for (const link in links) {
      linkss.push(links[link])
    }
    
      const link = linkss.find(link => link.name === req.params.name)
  
      if (!link) return res.status(404).json({ error: "Link not found" })
  
      res.redirect(link.url)
  })
  
  app.listen(3000, () => {
    console.log('server started');
  });
