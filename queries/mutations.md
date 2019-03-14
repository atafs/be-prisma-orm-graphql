# write to database
## create user
```
mutation {
  createUser(
    data: {
    	name: "Americo Tomas"
  	}
  ) {
  id 
  name
	}
}
```

## create user with email
```
mutation {
  createUser(
    data: {
    	name: "Americo Tomas"
      email: "americo.tomas@fuseuniversal.com"
  	}
  ) {
  id 
  name
  email
	}
}
```

## update user
```
mutation {
  updateUser(
    where: {
      id: "cjt9148pr00bh07523ex17p3m"
    },
    data: {
      name: "Americo Tomas!!"
    }
  ) {
    id
    name
  }
}
```

## delete user
```
mutation {
  deleteUser(
    where: {
      id: "cjt91ldj100it0752uh623bra"
    }
  ) {
    id
    name
  }
}
```

## create a post
```
mutation {
  createPost(
    data: {
      title: "Prisma Post",
      body: "",
      published: false,
      author: {
        connect:{
          id: "cjt92nxg6015x0752envn53vp"
        }
      }
    }
  ) {
    id
    title
    body
    published
    author {
      id
      name
    }
  }
}
```

## update a post
```
mutation {
  updatePost(
    where: {
      id: "cjt92pawb016z0752rremxqaf"
    },
    data: {
      published: true
    }
  ) {
    id 
    title
    body
    published
  }
}
```
