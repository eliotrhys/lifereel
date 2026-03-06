import Image, { StaticImageData } from "next/image";

interface AsSeenOnItemProps 
{
    altText: string;
    imageUrl: StaticImageData;
}

const AsSeenOnItem = (props: AsSeenOnItemProps) => {
    return (
        <div className="item rounded-lg p-8 flex items-center justify-center">
            <div>
                <Image src={props.imageUrl} className="h-12 w-auto mx-auto" alt={props.altText} />
            </div>
        </div>
    )
}

export default AsSeenOnItem;
