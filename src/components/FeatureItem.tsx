import { StaticImageData } from "next/image";

interface FeatureItemProps 
{
    title: string;
    icon: string;
    imageUrl: StaticImageData;
    description: string;
    extraClasses?: string;

}

const FeatureItem = (props: FeatureItemProps) => {
    return (

        <div className={`w-full lg:w-1/4 mb-4 lg:mb-0 h-fit border border-slate-900 ${props.extraClasses ? props.extraClasses : ""} rounded-lg duration-300 ease-in-out pb-8`}>
            <div className="p-8">
                <img src={props.imageUrl.src} alt="" className="rounded-lg border border-slate-900" />
            </div>

            <div className="px-8">
                <h4 className="font-black text-2xl mb-2">{props.icon}</h4>
                <h4 className="mb-4 font-black text-2xl">{props.title}</h4>
                <div className="text-lg font-medium leading-relaxed">{props.description}</div>
            </div>

        </div>

    )
}

export default FeatureItem;