# Deploy `json-server` to `Glitch`

> Instructions how to deploy the full fake REST API [json-server](https://github.com/typicode/json-server) to various free hosting sites. Should only be used in development purpose but can act as a simpler database for smaller applications.

* [**Create your database**](#create-your-database)
* [Deploy to **Glitch**](#deploy-to-glitch)
  
## Create your database

1. Press the green `Use this template`-button in the right corner
2. Give your new repo a name and press the green `Create repository from template`-button
3. Clone your newly created repository to your computer

4 . Change the contents of `db.json` to **your own content** according to the [`json-server example`](https://github.com/typicode/json-server#example) and then `commit` your changes to git locally.

_this example will create `/posts` route , each resource will have `id`, `title` and `content`. `id` will auto increment!_
```json
{
  "posts":[
    {
      "id" : 0,
      "title": "First post!",
      "content" : "My first content!"
    }
  ]
}
```

---

## Deploy to Glitch

Website will sleep after a while.

1. Register for [Glitch](https://glitch.com/) or go to [Glitch/edit](https://glitch.com/)
2. Click **New Project**
3. Click **Import from GitHub**
4. Paste `https://github.com/jesperorb/json-server-heroku.git` into the URL-input and click OK.
5. Wait for it to setup
6. Press **Share**-button to get your URL to live site. It should be something for example like: `https://fallabe-pie-snake.glitch.me`. And your DB will be at `https://fallabe-pie-snake.glitch.me/posts`
