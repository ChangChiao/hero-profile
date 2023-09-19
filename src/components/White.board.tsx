import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/editor.css";
import "@tldraw/tldraw/ui.css";

// for test https://github.com/tldraw/tldraw
export default function Example() {
  return (
    <div className="tldraw__editor">
      <Tldraw persistenceKey="tldraw_example" autoFocus />
    </div>
  );
}
