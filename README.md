# HTN backend

## Requirements

- NodeJS
- Bash

---

## Starting server the first time

Run the following in root dir (might take ~30 sec to seed database):

```
npm install
sh seed.sh
```

To clear the database and re-seed it, run `sh seed.sh`.

## Running the server

Run the following in root dir:

```
sh start.sh
```

Server will be live on `http://localhost:3000`

---

## API Endpoints

### `/users` \[GET\]

Return a list of all user data from the database in a JSON format

### `/users/{userId}` \[GET\]

Return the user data for a specific user (with id of `userId`)

| Request data | Required | Type  | Datatype                          |
| ------------ | -------- | ----- | --------------------------------- |
| `userId`     | YES      | Param | A non-negative number as a string |

### `/users/{userId}` \[PUT\]

Update a given user's data by accepting data in a JSON format and return the updated user data as the response

| Request data | Required | Type  | Datatype                                                                       |
| ------------ | -------- | ----- | ------------------------------------------------------------------------------ |
| `userId`     | YES      | Param | A non-negative number as a string                                              |
| `name`       | YES      | Body  | A name as a string                                                             |
| `company`    | YES      | Body  | A company name as a string                                                     |
| `email`      | YES      | Body  | An email as a string                                                           |
| `phone`      | YES      | Body  | A phone number as a string                                                     |
| `Skills`     | YES      | Body  | An array with `Skill` objects (see below); Note the capitalization on "Skills" |

#### `Skill` object

| Attribute | Required | Datatype                            |
| --------- | -------- | ----------------------------------- |
| `skill`   | YES      | A skill name as a string            |
| `rating`  | YES      | A non-negative number as an integer |

### `/skills` \[GET\]

A list of skills and aggregate info about them (name of skill and number of people with the skill)

| Request data    | Required | Type  | Datatype                                                                       |
| --------------- | -------- | ----- | ------------------------------------------------------------------------------ |
| `min_frequency` | NO       | Query | A non-negative number as a string, must be less or equal to `max_frequency`    |
| `max_frequency` | NO       | Query | A non-negative number as a string, must be greater or equal to `min_frequency` |
