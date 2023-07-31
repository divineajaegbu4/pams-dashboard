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


// type Checkbox = {
//     isChecked: string,
//     id: number
// }
//
//
// type Images = {
//     img: string,
//     id: number
// }
//
//
// type ProspectsHeaderContentItemProps =  {
//     prospectsHeader: ProspectsHeader
// };
//
//
// type StatusComponentProps = {
//     data: string[];
// };


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

