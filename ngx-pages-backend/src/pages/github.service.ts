import { Injectable } from '@nestjs/common';

import ApolloClient, {InMemoryCache, HttpLink } from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'cross-fetch';

// playground: https://developer.github.com/v4/explorer/
@Injectable()
export class GithubService {

  private token: string;

  constructor( ) {
    this.token = process.env.GH_TOKEN;
    if (!this.token) {
      throw Error('Please provide a personal access token via the env variable GH_TOKEN!');
    }
  }

  async test(): Promise<any> {

    const client = new ApolloClient({
      fetch,
      uri: 'https://api.github.com/graphql',
      request: operation => {
        operation.setContext({
          headers: {
            authorization: 'token ' + this.token,
          },
        });
      },
    });

    return client.query({
      query: gql`
        query {
          repository(owner: "angular-schule", name: "website-articles") {
            content:object(expression: "gh-pages:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      `,
    })
    .then(data => console.log(data.data))
    .catch(error => console.error(error));

  }
}
