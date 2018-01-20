var pipeline = [
    {
        $match: {
            'imdb.rating': {
                $gt: 0
            },
            metacritic: {
                $gt: 0
            }
        }
    },
    {
        $sort: {
            'imdb.rating': -1
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            'imdb.rating': 1,
            metacritic: 1
        }
    },
    {
        $limit: 10
    }
];

var pipeline1 = [
    {
        $match: {
            metacritic: {
                $gt: 0
            }
        }
    },
    {
        $sort: {
            metacritic: -1
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            metacritic: 1,
            'imdb.rating': 1
        }
    },
    {
        $limit: 10
    }
];
