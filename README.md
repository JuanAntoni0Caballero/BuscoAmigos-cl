# Plan routes
## Base URL /plan

| HHTPP Method | URLpath       | Description                   |
|--------------|---------------|-------------------------------|
| GET          | /getPlan      | Plan list                     |
| POST         | /savePlan     | Create a new Plan             |
| GET          | /:id          | Matching ID plan     details  |
| PUT          | /:id/edit     | Matching ID plan     edition  |
| Delete       | /:id/delete   | Matching ID plan     deletion |


# Auth rout
## Base URL /auth

| HHTPP Method | URLpath | Description       |
|--------------|---------|-------------------|
| POST         | /signup | Signup user       |
| POST         | /login  | Loging user       |
| GET          | /verify | Verify auth token |


# Client routes

| URL              | Description            | Protected |
|------------------|------------------------|-----------|
| /                | Home page              |           |
| /plan            | Plan page              |           |
| /details/:id     | Plan detail page       |           |
| /login           | Login page             |           |
| /register        | Register page          |           |
| /create-plan     | New plan form page     | X         |
| /profile         | User profile page      | X         |
| *                | 404 page               |           |