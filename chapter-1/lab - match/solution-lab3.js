var pipeline = [
    {
        $project: {
            movieTitle: {
                $split: ['$title', ' ']
            },
            _id: 0
        }
    },
    {
        $project: {
            movieTitles: {
                $size: '$movieTitle'
            }
        }
    },
    {
        $match: {
            movieTitles: {
                $eq: 1
            }
        }
    }
];
