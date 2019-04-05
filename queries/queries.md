# read from database
## get all users
```
query {
  users {
    id
    name
  }
}
```

## get all users with email
```
query {
  users {
    id
    name
    email
  }
}
```

## get all users with email and posts
```
query {
  users {
    id
    name
    email
    posts {
      id
    }
  }
}
```

## get all comments
```
query {
  comments {
    id
    text
    author {
    	id
      name
  	}
  }
}
```