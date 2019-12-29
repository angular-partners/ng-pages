import { Injectable } from '@nestjs/common';

import ApolloClient, {InMemoryCache, HttpLink, IntrospectionFragmentMatcher } from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'cross-fetch';
import { ConfigService } from '@nestjs/config';

import introspectionQueryResultData from './generated/github-fragment-matcher';

const repoTreeQuery = require('graphql-tag/loader!./schemas/repoTree.graphql');
const repoContentQuery = require('graphql-tag/loader!./schemas/repoContent.graphql');


const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

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
      cache: new InMemoryCache({fragmentMatcher}),
    });
  }

  async test(): Promise<any> {

    return this.createClient().query({
      query: repoTreeQuery,
      variables: {
        owner: this.repositoryOwner,
        name: this.repositoryName,
        expression: this.repositoryBranch + ':',
      },
    })
    .then(data => console.log(JSON.stringify(data.data, undefined, 2)))
    .catch(error => console.error(error));
  }

  getFileContent() {
    return this.createClient().query({
      query: repoContentQuery,
      variables: {
        owner: this.repositoryOwner,
        name: this.repositoryName,
        expression: this.repositoryBranch + ':README.md',
      },
    })
    .then(data => console.log(JSON.stringify(data.data, undefined, 2))))
    .catch(error => console.error(error));
  }
}
