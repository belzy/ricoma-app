import 'dotenv/config';
import { AppDataSource } from "./data-source"
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { CompanyResolver } from './resolver';

const PORT = process.env.PORT || '8080';

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const schema = await buildSchema({
        resolvers: [CompanyResolver, ],
    });

    const server = new ApolloServer({ schema });

    server.listen(PORT).then(({ url }) => {
        console.log(`[server] Server ready at ${url}`);
    });
}).catch(error => console.log(error))
