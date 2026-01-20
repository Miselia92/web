import { TinaMarkdown } from "tinacms/dist/rich-text";

export function RichText({ content }: { content: any }) {
    if (!content) return null;
    return <TinaMarkdown content={content} />;
}
