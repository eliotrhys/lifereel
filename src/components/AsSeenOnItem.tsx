import { StaticImageData } from "next/image";

interface AsSeenOnItemProps 
{
    altText: string;
    imageUrl: StaticImageData;
}

const AsSeenOnItem = (props: AsSeenOnItemProps) => {
    return (
        <div className="item rounded-lg p-4 flex items-center justify-center">
            <div>
                <img src={props.imageUrl.src} className="h-12 mx-auto" alt={props.altText} />
            </div>
        </div>
    )
}

export default AsSeenOnItem;