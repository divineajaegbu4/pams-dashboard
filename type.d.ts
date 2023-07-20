type Cities =      {
    "city": string,
    "country": string,
    "populationCounts": [
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": string,
            "value": string,
            "sex": string,
            "reliabilty": string
        },
        {
            "year": "2007",
            "value": "10863",
            "sex": "Both Sexes",
            "reliabilty": "Final figure, complete"
        },
        {
            "year": "2000",
            "value": "10488",
            "sex": "Both Sexes",
            "reliabilty": "Final figure, complete"
        }
    ]
}


type Images = {
    img: string,
    id: number
}

type ProspectsHeader = {
    header: string,
    data: Users[] | Images[],
    id: number,
    isCheckbox: boolean
}

type ProspectsHeaderContentItemProps =  {
    prospectsHeader: ProspectsHeader
};

type Users =   {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

