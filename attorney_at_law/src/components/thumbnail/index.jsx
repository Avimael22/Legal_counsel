

function Thumbnail({icon, content, className}){

    return (
        <div className={className}>
            <i className={icon}></i>
            <p>{content}</p>
        </div>
    )
}

function ThumbnailWithHeading({ headingContent, paragraphContent, className }){


    return (
        <div className={className}>
            <h1>{headingContent}</h1>
            <p>{paragraphContent}</p>
        </div>
    )
}

export default Thumbnail;
export { ThumbnailWithHeading };
