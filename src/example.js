import {render} from "react-dom";
import ReactMarkdown from "react-markdown";

export default class Example {
  constructor(target) {
    this.target = target;
  }
  render() {
    render(<ReactMarkdown>Some Markdown</ReactMarkdown>, this.target);
  }
}
