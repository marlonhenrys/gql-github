module.exports = (limit, cursor) => `
{
    search(type: REPOSITORY, query: "stars:>10000", first: ${limit}, after: ${cursor}) {
        repositoryCount
        pageInfo {
            hasNextPage
            endCursor
        }
        nodes {
            ... on Repository {
                nameWithOwner
                createdAt
                pushedAt
                primaryLanguage {
                    name
                }
                stargazers {
                    totalCount
                }
                releases {
                    totalCount
                }
                mergedPRs: pullRequests(states: MERGED) {
                    totalCount
                }
                closedIssues: issues(states: CLOSED) {
                    totalCount
                }
                totalIssues: issues {
                    totalCount
                }
            }
        }
    }
}  
`