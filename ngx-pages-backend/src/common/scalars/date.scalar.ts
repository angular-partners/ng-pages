import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

// lets GraphQL server send and receive Dates as numbers
// see https://www.apollographql.com/docs/apollo-server/schema/scalars-enums/#date-as-a-scalar
@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  parseValue(value: number): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): number {
    return value.getTime(); // value sent to the client
  }

  parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
