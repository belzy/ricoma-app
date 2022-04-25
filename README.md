# ricoma-app

### To run the app locally, follow these steps:

  1. clone the repository
  ```
  git clone https://github.com/belzy/ricoma-app.git
  ```

  2. Change directory into the app
  ```
  cd ricoma-app
  ```

  3. In the api directory, create a file called `.env`

  4. Add the environment variables to the `.env` file
  ```
    # example .env

    DB_HOST=db
    POSTGRES_USER=docker
    POSTGRES_PASSWORD=docker
    POSTGRES_DB=ricoma
    PORT=8080
    SALT=10
    JWT_SECRET=MY_SECRET_KEY
    
  ```

  5. Build the docker images with docker-compose
  ```
  docker-compose build
  ```

  4. Start the docker containers
  ```
  docker-compose up -d
  ```

  Then you can view the frontend at `http://localhost:3000`
  and view the backend GraphQL studio at `http://localhost:8080`

  ### Authentication
  In order to qury the API, you'll need to set the Authorization header with your request. Login as a company with the query:
  ```GraphQL
    query Login {
      companyLogin(name: "Company One", password: "letmein123")
    }
  ```

  Then copy the JWT in the response. Create an Authorization header with the value `bearer YOUR_TOKEN`.

  ## Sample Queries:

  ### Register A Company
  ```
    mutation Register {
      registerCompany(name: "Company1", password: "letmein123")
    }
  ```

  ### Login as a Company
  ```
    query Login {
      companyLogin(name: "Company One", password: "letmein123")
    }
  ```

  ### Retrieve Companies
  ```
    query CompaniesQuery {
      companies {
        id,
        name
      }
    }
  ```

  ### Create an Embroidery Machine product
  ```
    mutation AddMachine {
      addMachine(
        model: "test",
        price: 1.22,
        sale_price: 1.00,
        description: "test",
        info: "test",
        color: "red",
        size: "single-head",
        type: "commercial",
        needle_count: 10
      )
    }
  ```

  ### Retrieve the products owned by the currently logged in company
  ```
    query RetrieveMachines {
      retrieveMachines {
        id,
        model,
        price,
        sale_price,
        description,
        info,
        color {
          id,
          color
        },
        size {
          id,
          size
        },
        type {
          id,
          type
        },
        needle_count {
          id,
          needle_count
        }
      }
    }
  ```

  ### Update an Embroidery Machine product
  ```
    mutation UpdateMachine {
      updateMachine(
        machine_id: 1,
        model: "New Model",
        color: "green"
      )
    }
  ```

  ### Delete an Embroidery Machine Product
  ```
    mutation DeleteMachine {
      deleteMachine(machine_id: 1)
    }
  ```




