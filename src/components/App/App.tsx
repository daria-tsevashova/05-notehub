import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import Pagination from "../Pagination/Pagination";
import NotesList from "../NoteList/NoteList";
import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";
import SearchBox from "../SearchBox/SearchBox";
import { fetchNotes } from "../../services/noteService";
import type { Note } from "../../types/note";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface NotesData {
  notes: Note[];
  totalPages: number;
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 12;

  const [debouncedQuery] = useDebounce(query, 500);

  const onOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  const { error, data, isLoading, isSuccess } = useQuery<NotesData>({
    queryKey: ["notes", debouncedQuery, currentPage],
    queryFn: () => fetchNotes(currentPage, perPage, debouncedQuery),
    keepPreviousData: true,
  });

  return (
    <div className={css.app}>
      <Toaster position="top-right" />

      <header className={css.toolbar}>
        <SearchBox
          value={query}
          onChange={(val) => {
            setQuery(val);
            setCurrentPage(1);
          }}
        />

        {data && data.totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={data.totalPages}
          />
        )}

        <button className={css.button} onClick={onOpen}>
          Create note +
        </button>
      </header>

      {isLoading && <Loader isLoading={isLoading} />}
      {error && <ErrorMessage />}

      {isSuccess && data?.notes.length > 0 && (
        <>
          <NotesList notes={data.notes} />
        </>
      )}

      {isSuccess && data?.notes.length === 0 && <p>No notes found</p>}

      {isModalOpen && (
        <Modal onClose={onClose}>
          <NoteForm onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};

export default App;
