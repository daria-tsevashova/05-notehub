import axios from "axios";
import type { AxiosResponse } from "axios";
import type { CreateNoteData, Note } from "../types/note";

interface CreateNoteResponse {
  note: Note;
}
interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
interface DeleteNoteResponse {
  note: Note;
}

const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const apiClient = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const createNote = async (
  noteData: CreateNoteData
): Promise<CreateNoteResponse> => {
  const response: AxiosResponse<CreateNoteResponse> = await apiClient.post(
    "/notes",
    noteData
  );
  return response.data;
};

const fetchNotes = async (
  page?: number,
  perPage?: number,
  search?: string
): Promise<FetchNotesResponse> => {
  const response: AxiosResponse<FetchNotesResponse> = await apiClient.get(
    "/notes",
    {
      params: {
        page,
        perPage,
        search,
      },
    }
  );
  return response.data;
};

const deleteNote = async (id: string): Promise<DeleteNoteResponse> => {
  const response: AxiosResponse<DeleteNoteResponse> = await apiClient.delete(
    `/notes/${id}`
  );
  return response.data;
};

export { createNote, fetchNotes, deleteNote };
