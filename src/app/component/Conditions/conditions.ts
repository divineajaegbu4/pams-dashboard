
export const getSpecificBackgrounds = (getUserId:number): string => {
    let colors: string = ""
    switch(getUserId) {
        case 1:
            colors = "bg-pink-100"
            break;
        case 2:
            colors = "bg-blue-100"
            break;
        case 3:
            colors ="bg-red-100"
            break;
        case 4:
            colors = "bg-blue-100"
            break;
        case 5:
            colors = "bg-violet-200"
            break;
        case 6:
            colors =  "bg-purple-100"
            break;
        case 7:
            colors = "bg-blue-100"
            break;
        case 8:
            colors = "bg-fuchsia-100"
            break;
        case 9:
            colors = "bg-blue-100"
            break;
        case 10:
            colors = "bg-pink-100"
            break;
        default:
            colors = "";
            break;
    }

    return colors;
}


export const getSpecificImages = (getUserImage:number):string => {
    switch (getUserImage){
        case 1 :
            return "/checklist.5274bb47.svg"
        case 2:
            return "/drivingtest.91fbdbdd.svg"
        case 3:
            return "/filter.a8d059c4.svg"
        case 4:
            return "/icons8-cancel.b835e0db.svg"
        case 5:
            return "/Layer.73dd76f0.svg"
        case 6:
            return "/MaskGroup5.53f02066.svg"
        case 7:
            return "/MaskGroup5.53f02066 (1).svg"
        case 8:
            return "/pause.6ac2481f.svg"
        case 9:
            return "/question.44d61fef.svg"
        default:
            return "/question.44d61fef.svg"
    }
}
