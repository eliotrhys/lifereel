interface ExampleItemProps {
    videoUrl: string;
    synopsis: string;
}

const ExampleItem = (props: ExampleItemProps) => {
    return (

        <div className="mb-14 lg:mb-0">
            <div className="mb-4">
                <div className="relative aspect-video"><iframe src={props.videoUrl} className="h-full w-full" frameBorder="0" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js" async></script>
                {/* <iframe width="560" height="315" className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/F9Pak63kaPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
            </div>

            <div className="text-center text-xl">{props.synopsis}</div>
        </div>
    )
}

export default ExampleItem;