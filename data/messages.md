To create a new database or switch to an existing database, you need to run: use
```<name of the database>```. Create a messages database:

```sh
use messages
```

Create a collection called posts, and you need to save the data
directly in JSON format using the 
```
db.<your-collectionname>.save({})
```
command:

```sh
db.posts.save({ title: 'Post 1', slug: 'post-1', content:
'<p>Content</p>' })
```

```sh
db.posts.find()
```

Now let's suppose you add a new row for Post 2 and you want to find that
specific row by specifying the slug (post-2). You can do it like this:

```sh
db.posts.save({ title: 'Post 2', slug: 'post-2', content:
'<p>Post 2</p>' })
```

```sh
db.posts.find({ slug: 'post-2' })
```

Change the Post 2 title

```sh
db.posts.update({ slug: "post-2" }, { $set: { title: "My Updated Post 2" }})
```

To remove a specific row, we can do it as follows:

```sh
db.posts.remove({ "_id": ObjectId("5bd00beb7ed13a57bea48209") })
```

use [database];

Drop Database
```sh
db.dropDatabase();
```