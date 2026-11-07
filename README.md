# Working with Mongo CLI

Install MongoDB Community Server

Windows installation:
[Download MongoDB Community Server](https://www.mongodb.com/try/download/community)

Windows PowerShell MongoDB Shell CLI installation

```powershell
winget install MongoDB.Shell
```

Open git bash and run

```bash
mongosh --version
```

To check the service in PowerShell

```powershell
sc.exe query MongoDB
or
Get-Service MongoDB
```

Run MongoDB

```bash
Mongosh
```

## Mongo Database Methods

This will show the version of the mongodb server.
`db.version()`

`show` gets the list of databases on the server.

`show dbs`

`use` create a database or directs you to existing database

`use employeeDB`
