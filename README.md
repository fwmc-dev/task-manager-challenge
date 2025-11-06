
# Administratum

Toma el control de tu día y maximiza tu productividad con Administratum, el gestor de tareas intuitivo diseñado para ayudarte a concentrarte en lo que importa.


## Run Locally

Clone the project

```bash
  git clone https://github.com/fwmc-dev/task-manager-challenge.git
```

Go to the project directory

```bash
  cd task-manager-challenge/
```

- Backend

```bash
  cd backend/
```
- Frontend

```bash
  cd frontend/
```

Install dependencies

- Frontend and Backend
```bash
  pnpm install
```

Start the server

```bash
  pnpm run start
```
or
```bash
  pnpm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- Frontend

`NEXT_PUBLIC_API_URL`

- Backend

`PORT`

`FRONTEND_URL`


## API Reference

#### Get all tasks

```http
  GET /api/tasks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search`  | `string` | **Optional**. Search by the title or description. |
| `completed` | `boolean` | **Optional**. Filter completed/pending task. |

#### Create task

```http
  POST /api/tasks/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|  `title`  | `string` |  **Required**. Title of the task.  |
| `description` |  `string`  | **Required**. Description of the task. |


#### Update task

```http
  PUT /api/tasks/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of task to update. |


#### Delete task

```http
  DELETE /api/tasks/${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of task to delete. |




## Screenshots

![Home](/frontend/public/img/home.png?raw=true)
![List](/frontend/public/img/list.png?raw=true)
![Create](/frontend/public/img/create.png?raw=true)
![Edit](/frontend/public/img/edit.png?raw=true)
![Delete](/frontend/public/img/delete.png?raw=true)
![Search](/frontend/public/img/search.png?raw=true)




## Author

- [@fwmc-dev](https://www.github.com/fwmc-dev)

