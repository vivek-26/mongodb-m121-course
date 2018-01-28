var pipeline = [
    {
        $unwind: '$airlines'
    },
    {
        $lookup: {
            from: 'air_routes',
            localField: 'airlines',
            foreignField: 'airline.name',
            as: 'planes'
        }
    },
    {
        $unwind: '$planes'
    },
    {
        $match: {
            $or: [
                { 'planes.src_airport': 'JFK', 'planes.dst_airport': 'LHR' },
                { 'planes.src_airport': 'LHR', 'planes.dst_airport': 'JFK' }
            ]
        }
    },
    {
        $group: {
            _id: '$airlines',
            count: { $sum: 1 },
            name: { $addToSet: '$name' }
        }
    }
];
