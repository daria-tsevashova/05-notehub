import axios from "axios";

export interface Note {
  id?: string;
  title: string;
  content: string;
  tag: string;
}

// interface CreateNoteResponse {
//   note: Note;
// }

// interface fetchNotesResponse {
//   notes: Note[];
//   totalPages: number;
// }

// interface deleteNoteResponse {
//   note: Note;
// }

// axios.defaults.baseURL = "https://notehub-public.goit.study/api";
// const VITE_NOTEHUB_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

// export const fetchNotes = async (
//   query: string,
//   currentPage: number
// ): Promise<fetchNotesResponse> => {
//   const response = await axios.get<fetchNotesResponse>("/notes", {
//     params: {
//       search: query,
//       page: currentPage,
//       perPage: 10,
//     },
//     headers: {
//       Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
//     },
//   });
//   return response.data;
// };

// export const createNote = async (note: Note): Promise<CreateNoteResponse> => {
//   const response = await axios.post<CreateNoteResponse>("/notes", note, {
//     headers: {
//       Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
//     },
//   });
//   return response.data;
// };

// export const deleteNote = async (noteId: string) => {
//   const response = await axios.delete<deleteNoteResponse>(`/notes/${noteId}`, {
//     headers: {
//       Authorization: `Bearer ${VITE_NOTEHUB_TOKEN}`,
//     },
//   });
//   return response.data;
// };
