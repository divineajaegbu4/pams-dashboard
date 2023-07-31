import Image from "next/image";
import React, {ReactElement} from "react";

type ContentProps = {
    users: Users[];
    imgs(num: number): string;
    bgImgs(num: number): string;
}

export const DashboardContent: React.FC<ContentProps> = ({users, imgs, bgImgs}) => {
    const contents = users.map((user: any) => {
            const img = imgs(user.id);
            const bgImg = bgImgs(user.id);

            // console.log({user, img, bgImg});

            return (
                <div key={user?.id} className={`${bgImg} content-hover content-border content-padding content-font content-width`}>
                    <strong>{user?.id}</strong>
                    <br/>
                    <br/>
                    <span>{user?.name}</span>
                    <div className="content-position">
                        {img? <Image src={img} alt={"First image"} width={30} height={30}/>:null}
                    </div>
                </div>
            )
    });

    return <>{...contents}</>;
}
