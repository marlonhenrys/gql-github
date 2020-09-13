const dateDiff = require('../utils/dateDiff')
const { blue } = require('../config/console')

module.exports = nodes => {
    console.log(blue, '\nFormatando dados...')

    return nodes.map(node => {
        const nameWithOwner = node.nameWithOwner
        const starCount = node.stargazers.totalCount
        const releaseCount = node.releases.totalCount
        const acceptedPRCount = node.mergedPRs.totalCount
        const primaryLanguage = node.primaryLanguage ? node.primaryLanguage.name : 'N/A'
        const issueRatio = (node.closedIssues.totalCount / node.totalIssues.totalCount || 0).toFixed(2)
        const lifetime = parseInt(dateDiff(node.createdAt) / 365)
        const lastUpdate = dateDiff(node.updatedAt)

        const format = {
            'Name with owner': nameWithOwner,
            'Primary language': primaryLanguage,
            'Lifetime (years)': lifetime,
            'Last update (days)': lastUpdate,
            'Stars': starCount,
            'Releases': releaseCount,
            'Accepted pull requests': acceptedPRCount,
            'Ratio closed issues': issueRatio,
        }

        return format
    })
}