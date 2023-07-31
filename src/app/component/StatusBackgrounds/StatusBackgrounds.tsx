export const StatusBackgrounds = (status: string) => {
    switch(status) {
        case "Suite 351":
            return {background:  "#ebfff4", color: "rgb(26 128 74)"};
        case "Suite 280":
            return {background:  "#fff8eb", color: "rgb(119 80 8)"};
        case "Apt. 950":
            return {background:  "#ecffeb", color: "#3b403a"};
        case "Apt. 556":
            return {background:  "#FFF6F4", color: "#e2164b"};
        case "Suite 847":
            return {background:  "#FFEBEB", color: "#88968e"};
        default:
            return {background:  "#6faedf42", color: "rgb(13 87 150)"};
    }
}
