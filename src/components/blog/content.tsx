import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import ReactHtmlParser from "react-html-parser";

const CopyButtonPlugin = require("highlightjs-copy");

import { useEffect } from "react";

//@ts-nocheck
const BlogContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.initHighlighting();
    hljs.addPlugin(new CopyButtonPlugin());
    // hljs.initHighlightingOnLoad();
    // addEventListener('load', function () {
    //   const blocks = document.querySelectorAll('pre code.hljs');
    //   Array.prototype.forEach.call(blocks, function (block) {
    //     const language = block.result.language;
    //     block.insertAdjacentHTML('afterbegin', `<label>${language}</label>`);
    //   });
    // });
  }, []);
//@ts-ignore
//@ts-nocheck
  return <div>{ReactHtmlParser(content)}</div>;
};

export default BlogContent;
