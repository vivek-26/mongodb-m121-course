var pipeline = [
    {
        $match: {
            'imdb.rating': {
                $gte: 7
            },
            genres: {
                $not: {
                    $in: ['Crime', 'Horror']
                }
            },
            rated: {
                $in: ['PG', 'G']
            },
            languages: {
                $all: ['English', 'Japanese']
            }
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            rated: 1
        }
    }
];
