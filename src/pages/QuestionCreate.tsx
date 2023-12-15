import styled from "styled-components";
import ToastEditor from "../components/ToastEditor";
import Select from "react-select";
import { stackOptions, importOptions } from "../apis/selectOption";
import { useOptionState } from "../hooks/useOptionState";
import { useCallback, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { useQueryClient, useMutation } from "react-query";
import { postQuestion } from "../apis/postQuestion";
import { useNavigate } from "react-router-dom";
const QuestionCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setTitle(e.target.value);
    },
    []
  );

  const { stack, importance, onStackChange, onImportanceChange } =
    useOptionState();

  const [content, setContent] = useState<string>("");
  const editorRef = useRef<Editor | null>(null);

  const onChange = useCallback(() => {
    const data = editorRef.current?.getInstance().getMarkdown();
    if (data !== undefined) {
      setContent(data);
    }
  }, []);

  const queryClient = useQueryClient();
  const mutation = useMutation(postQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("filteredData");
      navigate("/question");
    },
  });
  const handleSubmit = () => {
    mutation.mutate({ title, content, stack, importance });
  };

  const initData = useCallback(() => {
    setTitle("");
    editorRef.current?.getInstance().setMarkdown("");
  }, []);
  return (
    <Container>
      <Title
        type="text"
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
      />
      <SelectContainer>
        <SelectBox>
          <SelectTitle htmlFor="stack">스택</SelectTitle>
          <Selects
            options={stackOptions}
            defaultValue={stackOptions[0]}
            isSearchable={false}
            onChange={onStackChange}
          />
        </SelectBox>
        <SelectBox>
          <SelectTitle htmlFor="importance">중요도</SelectTitle>
          <Selects
            options={importOptions}
            defaultValue={importOptions[0]}
            isSearchable={false}
            onChange={onImportanceChange}
          />
        </SelectBox>
      </SelectContainer>
      <ToastEditor editorRef={editorRef} onChange={onChange} />
      <ButtonBox>
        <Btn onClick={handleSubmit}>질문하기</Btn>
        <Btn onClick={initData}>초기화</Btn>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.input`
  width: 80%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 20px 0;
  font-size: 2rem;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const SelectContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const SelectBox = styled.div`
  width: 49%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Selects = styled(Select)`
  width: 100%;
`;
const SelectTitle = styled.label`
  width: 70px;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 50px;
  margin-right: 10px;
`;
const ButtonBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #482308;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: #482308;
    border: 1px solid #482308;
  }
`;
export default QuestionCreate;
