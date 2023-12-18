import { useCallback, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

export const useOptionState = () => {
  const [lang, setLang] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [check, setCheck] = useState<string | null>(null);
  const [stack, setStack] = useState<string | null>(null);
  const [importance, setImportance] = useState<string | null>(null);

  const onLangChange = useCallback((option: OptionType | null) => {
    setLang(option?.value || null);
  }, []);
  const onSortChange = useCallback((option: OptionType | null) => {
    setSort(option?.value || null);
  }, []);

  const onCheckChange = useCallback((option: OptionType | null) => {
    setCheck(option?.value || null);
  }, []);

  const onStackChange = useCallback((option: OptionType | null) => {
    setStack(option?.value || null);
  }, []);

  const onImportanceChange = useCallback((option: OptionType | null) => {
    setImportance(option?.value || null);
  }, []);

  return {
    lang,
    sort,
    check,
    stack,
    importance,
    onLangChange,
    onSortChange,
    onCheckChange,
    onStackChange,
    onImportanceChange,
  };
};
