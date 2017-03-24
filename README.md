### This is a simple node app that demonstrates the use of Mockgoose to automatically spin up an in-memory MongoDB instance for testing. At the end of the script the database is discarded.



#### Run script normally (requires mongodb running on localhost)
Note: multiple runs will cause errors due to duplicate keys.

```
  npm start
```


#### Run script with Mockgoose (MongoDB should not be running)
This will spin up a temporary mongodb instance, and discard the database at the end allowing for easy unit tests.
```
  npm test
```
