var pipeline = [
    {
        $match: {
            'imdb.votes': {
                $exists: true,
                $ne: ''
            }
        }
    },
    {
        $addFields: {
            scaled_votes: {
                $add: [
                    {
                        $multiply: [
                            {
                                $divide: [
                                    {
                                        $subtract: ['$imdb.votes', 5]
                                    },
                                    {
                                        $subtract: [1521105, 5]
                                    }
                                ]
                            },
                            9
                        ]
                    },
                    1
                ]
            }
        }
    },
    {
        $match: {
            'imdb.rating': {
                $gte: 1
            },
            'imdb.votes': {
                $gte: 1
            },
            year: {
                $gte: 1990
            },
            languages: {
                $in: ['English']
            }
        }
    },
    {
        $project: {
            title: 1,
            'imdb.rating': 1,
            'imdb.votes': 1,
            year: 1,
            languages: 1,
            normalized_rating: {
                $avg: ['$scaled_votes', '$imdb.rating']
            },
            _id: 0
        }
    },
    {
        $sort: {
            normalized_rating: 1
        }
    },
    {
        $limit: 1
    }
];
