# QUERIES

## CREATE
```mongo
db.posts.save({
    "artist": "Leroy Gomez", "slug": "Leroy Gomez - Music Makes My Life", "song": "Music Makes My Life", "mix": "ORIGINAL", "year": 1
  })
```

## GET 
```mongo
db.posts.find()
```

##GET by Slug
```mongo
db.posts.find({ slug: 'post-2' })
```


##GET by Year
```mongo
db.posts.find({ year: 1 })
```

##Update
```mongo
db.posts.update({ slug: "Leroy Gomez - Music Makes My Life" }, { $set: { mix: "Original Mix" }})
```

