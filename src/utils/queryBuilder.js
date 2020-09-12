module.exports = after => `
{
    search(type: REPOSITORY, query: "stars:>13680", first: 10${after}) {
    repositoryCount
    pageInfo{
        endCursor
    }
    nodes {
        ... on Repository {
        nameWithOwner
        createdAt
        updatedAt
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