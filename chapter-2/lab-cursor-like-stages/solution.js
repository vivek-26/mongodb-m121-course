var pipeline = [{
    $addFields: {
        'commonToBoth': {
            $setIntersection: [
                '$cast', [
                    "Sandra Bullock",
                    "Tom Hanks",
                    "Julia Roberts",
                    "Kevin Spacey",
                    "George Clooney"
                ]
            ]
        }
    }
}, {
    $match: {
        'countries': {
            $in: ["USA"]
        },
        'tomatoes.viewer.rating': {
            $gte: 3
        }
    }
}, {
    $project: {
        'tomatoes.viewer.rating': 1,
        'title': 1,
        'num_favs': {
            $size: {
                "$ifNull": ["$commonToBoth", []]
            }
        },
        '_id': 0
    }
}, {
    $sort: {
        'num_favs': -1,
        'tomatoes.viewer.rating': -1,
        'title': -1
    }
}, {
    $skip: 24
}, {
    $limit: 1
}];