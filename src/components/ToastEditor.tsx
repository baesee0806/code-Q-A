import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";
function ToastEditor() {
  return (
    <EditorContainer>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        initialValue="hello"
      />
    </EditorContainer>
  );
}
const EditorContainer = styled.div`
  width: 80%;
  margin: 0 auto 30px auto;
`;
export default ToastEditor;
