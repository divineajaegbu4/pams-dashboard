import Link from "next/link";

type ProspectLink = {
    name: string,
    url:string,
    id: number
}

export const GetProspectsLink = () => {
    const prospectLinkData: ProspectLink[] = [
        {name: "Create Prospects", url:"/prospects/create", id: 1},
        {name: "Prospects Leads", url:"/leads", id: 2},
        {name: "Export CSV", url: "", id: 1},
        {name: "View All", url: "/prospects/all", id: 3}
    ];

    const prospectsContent = (
        <>
            {prospectLinkData?.map((prospectLink:ProspectLink)=> (
                <div key={prospectLink?.id}>
                <Link href={prospectLink?.url} className={`${prospectLink?.name === "View All" ? "prospects-all-table": "prospects-link prospects-border"}`}>
                    {prospectLink?.name}
                </Link>
                </div>
            ))}
        </>
    )


    return (
        <section className="flex gap-8">
            {/*<Link href="/prospects/create" className="prospects-link prospects-border">Create Prospects</Link>*/}
            {/*<Link href="/leads">Prospects Leads</Link>*/}
            {/*<p>Export CSV</p>*/}
            {/*<Link href="/prospects/all">View All</Link>*/}

            {prospectsContent}
        </section>
    )
}
