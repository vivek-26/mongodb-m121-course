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
            $or: [{ 'planes.airplane': '747' }, { 'planes.airplane': '380' }]
        }
    },
    {
        $group: {
            _id: '$name',
            airlineCount: {
                $sum: 1
            }
        }
    }
];
