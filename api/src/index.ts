import 'dotenv/config';
import { AppDataSource } from "./data-source"
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { 
    CompanyResolver,
    MachineResolver,
} from './resolver';
import { customAuthChecker } from './middleware/auth.middleware';

const PORT = process.env.PORT || '8080';

import { seed } from './seed';

AppDataSource.initialize().then(async () => {
    
    try {
        seed()
    } catch(err) {
        console.log('Error Seeding');
    }

    const schema = await buildSchema({
        resolvers: [CompanyResolver, MachineResolver],
        authChecker: customAuthChecker,
    });

    const server = new ApolloServer({ 
        schema,
        context: ({ req }) => ({
            authToken: req.headers['authorization'],
        })
     });

    server.listen(PORT).then(({ url }) => {
        console.log(`[server] Server ready at ${url}`);
    });
}).catch(error => console.log(error))
