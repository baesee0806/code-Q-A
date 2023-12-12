import { useCallback, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface SearchQueryProps {
  page: string;
}
export const useSearchQueryString = ({ page }: SearchQueryProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();
  const [searchParms] = useSearchParams();

  const q = searchParms.get("q");

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSearchQuery(e.target.value);
    },
    []
  );
  const onSearch = (e: React.FormEvent, search: string) => {
    e.preventDefault();
    navigate(`/${page}?q=${search}`);
    setSearchQuery("");
  };

  return { searchQuery, onInputChange, onSearch, q };
};
