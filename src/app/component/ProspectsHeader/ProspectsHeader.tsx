import {GetProspectsLink} from "@/app/component/GetProspectsLink/GetProspectsLink";
import {ProspectsTable} from "@/app/component/ProspectTable/ProspectsTable"

export const ProspectsHeader = () => {
    return (
        <>
        <section className="flex justify-between px-[50px]">
        <p className="prospect-list-text">Prospect List</p>
            <main >
                <GetProspectsLink/>
            </main>
        </section>
            <main>
                <ProspectsTable/>
            </main>

        </>
    )
}
