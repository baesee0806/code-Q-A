import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";

interface ToastEditorProps {
  editorRef: React.MutableRefObject<Editor | null>;
  onChange: () => void;
}

function ToastEditor({ editorRef, onChange }: ToastEditorProps) {
  return (
    <EditorContainer>
      <Editor
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        initialValue="질문을 입력해주세요."
        ref={editorRef}
        onChange={onChange}
      />
    </EditorContainer>
  );
}
const EditorContainer = styled.div`
  width: 80%;
  margin: 0 auto 30px auto;
`;
export default ToastEditor;
