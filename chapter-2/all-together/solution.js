var pipeline = [{
    $match: {
        'imdb.rating': {
            $gte: 1
        },
        'imdb.votes': {
            $gte: 1
        }
    }
}];