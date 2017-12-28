## Lab 9 - Testing CRUD operations in the console

### Read (GET)

No need to test this; once you complete SQL `JOIN` correctly and the articles are displaying, this works as it should.

---

### Create a record (POST)

Go into the **psql** shell and enter `SELECT COUNT(*) from articles;` to view the current number of records in the table. Then, in the browser console:

```
let newArticle = new Article({
  title:'Flibbity goes Jibbiting',
  author:'Flibbity Jibbit',
  authorUrl:'flibbity.jibbit.com',
  category:'jibbits',
  publishedOn:'01-01-2217',
  body:'Flibbity Jibbit and the Key Keeper'
});
```

`newArticle.insertRecord();`

You can now go into the **psql** shell and see that the `SELECT COUNT(*) from articles;` value has increased by 1.

The new article should appear in the blog on page refresh.

---

### Update a record (PUT)

In the browser console, inspect `Article.all[0]` and make note of the `author_id` and `article_id` for the Flibbity Jibbit article; you're going to need those in the next step.

Next, enter this in the console, making sure to put in the correct values you just noted:

```
let updatedArticle = new Article({
  author_id: ****number from the prior step****,
  article_id: ****number from the prior step****,
  title:'Bob',
  author:'Bob',
  authorUrl:'bob.com',
  category:'Bob',
  publishedOn:'01-01-3217',
  body:'Bob Goes Bobbing'
});
```

Next, enter `updatedArticle.updateRecord()` and if there are no errors, refresh the page; the Flibbity Jibbit article will have been replaced by the Bob article, and you should also be able to see that the filters now have references to Bob instead of the dearly departed Flibbity.

---

### Destroy a record (DELETE)

Go into the **psql** shell and enter `SELECT COUNT(*) from articles;` to view the current number of records in the table.

Inspect the Flibbity Jibbit article we created and updated by entering `Article.all[0]` in the console. We can delete it by entering:

`Article.all[0].deleteRecord()`

After calling this method, the article will still be in the browser memory although it has been deleted from the database. You can verify this by entering `Article.all[0]` in the console, and see that the article is still there... but... go into the **psql** shell and enter `SELECT COUNT(*) from articles;` to see that the number of records has decreased by one!

On page refresh, the Flibbity Jibbit article will no longer appear in the browser.

---

### Destroy all records (DELETE)

You might want to save this for last.

`Article.truncateTable()`

Refresh the page: *NO MORE ARTICLES*.

Go into the **psql** shell and enter `SELECT COUNT(*) from articles;` to see that there are now *ZERO* articles in the DB.

After you do this, you'll need to restart the server to reload the DB. But then put the Flibbity article back in like you did above, and inspect it in the console with `Article.all[0]`, and take a look at `author_id` and `article_id`! Whoa! The numbers are different!

If you want, you can `DROP TABLE` the `articles` and `author` tables to reset the numbering of the records in the DB.
