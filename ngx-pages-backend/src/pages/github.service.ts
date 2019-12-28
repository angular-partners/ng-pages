import { Injectable } from '@nestjs/common';

import ApolloClient, {InMemoryCache, HttpLink } from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'cross-fetch';
import { ConfigService } from '@nestjs/config';

// playground: https://developer.github.com/v4/explorer/
@Injectable()
export class GithubService {

  private token = this.configService.get<string>('GITHUB_TOKEN');
  private repositoryOwner = this.configService.get<string>('GITHUB_REPOSITORY_OWNER');
  private repositoryName = this.configService.get<string>('GITHUB_REPOSITORY_NAME');
  private repositoryBranch = this.configService.get<string>('GITHUB_REPOSITORY_BRANCH');


  constructor(private readonly configService: ConfigService) {
    if (!this.token) {
      throw Error('Please provide a personal access token via the env variable GH_TOKEN!');
    }

    if (!this.repositoryOwner || !this.repositoryName || !this.repositoryBranch) {
      throw Error('Please provide GITHUB_REPOSITORY_OWNER, GITHUB_REPOSITORY_NAME and GITHUB_REPOSITORY_BRANCH!');
    }

    this.test();
  }

  createClient() {
    return new ApolloClient({
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
  }

  async test(): Promise<any> {

    return this.createClient().query({
      query: gql`
        query  {
          repository(owner: "angular-schule", name: "website-articles") {
            tree: object(expression: "gh-pages:") {
            ... on Tree {
              entries {
                name
                object {
                  ... on Tree {
                    entries {
                      name
                      object {
                        ... on Tree {
                          entries {
                            name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
    })
    .then(data => console.log(data.data))
    .catch(error => console.error(error));
  }

  getFileContent() {
    return this.createClient().query({
      query: gql`
        query {
          repository(owner: "angular-schule", name: "website-articles") {
            content:object(expression: "gh-pages:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }`,
    })
    .then(data => console.log(data.data))
    .catch(error => console.error(error));
  }
}
