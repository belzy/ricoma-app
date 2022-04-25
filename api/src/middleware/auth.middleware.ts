import { AuthChecker,  } from "type-graphql";
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || '';

type AuthContext = {
  authToken: string
  company_id: unknown
}

interface JWT extends JwtPayload {
  company_id: number
};

export const customAuthChecker: AuthChecker<AuthContext> = async ({
  root, args, context, info
}, roles ) => {

  const token = context.authToken.split(' ')[1];

  try {

    const { company_id } = await <JWT>jwt.verify(token, SECRET)

    context.company_id = company_id;
    return true;

  } catch (err) {
    return false; 
  }
  return false;



};