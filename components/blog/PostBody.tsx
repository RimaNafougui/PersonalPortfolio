import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface Props {
  content: string;
}

export default function PostBody({ content }: Props) {
  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Scrollable code blocks must be reachable by keyboard.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          pre: ({ node, ...props }) => <pre tabIndex={0} {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
