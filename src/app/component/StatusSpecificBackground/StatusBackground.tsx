export const StatusBackground = ({data})=> {
    switch (data) {
        case "Apt. 556":
            return "bg-red-200";
        case "Suite 879":
            return "bg-blue-300"
        case "Suite 847":
            return "bg-green-200"
        case "Apt. 692":
            return "bg-purple-200"
        case "Suite 351":
            return "bg-green-200"
        case "Apt. 950":
            return "bg-yellow-100";
        case "Suite 280":
            return "bg-pink-100";
        case "Suite 729":
            return "bg-purple-200";
        case "Suite 449":
            return "bg-red-200";
        case "Suite 198":
            return "bg-pink-100";
        default:
            return ""
    }
}
