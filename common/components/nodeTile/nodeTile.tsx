import { UmbracoNode } from "@lib/umbraco/types/umbracoNode.type";
import ArticleTile from "./tiles/articleTile";
import NewsTile from "./tiles/newsTile";
import PersonTile from "./tiles/personTile";
import VideoTile from "./tiles/videoTile";
import NewsletterTile from "./tiles/newsletterTile";

export type NodeTileModel = {
    content: UmbracoNode,
    viewDetailsPrompt?: string
}

export default function NodeTile({content, viewDetailsPrompt}: NodeTileModel) {
    switch(content.contentTypeAlias) {
        case 'person':
            return <PersonTile {...content} />
        case 'article':
            return <ArticleTile {...content} />
        case 'newsItem':
            return <NewsTile content={content} viewDetailsPrompt={viewDetailsPrompt} />
        case 'video':
            return <VideoTile {...content} />
        case 'newsletter':
            return <NewsletterTile {...content} />
        default:
            return (
                <div>
                    <p>No tile set for "{content.contentTypeAlias}"</p>
                </div>
            )
    }
}