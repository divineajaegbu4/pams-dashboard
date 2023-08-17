import React from 'react';

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


// For verification
type Address = { city: string; zipcode: string; suite: string };
type TRowOriginal = {
    name: string;
    username: string;
    address: Address;
    phone: string;
    avatarSrc: string;
};

type TRow = {
    original: TRowOriginal;
};

type TCell = {
    row: TRow;
};

type TableData = {
    cell: TCell;
};

type TableCell  =  {
    data: TableData;
}

type TableColumn = {
    accessorKey: string;
    header: string;
    cell(tableData: TCell): React.JSX.Element;
}

