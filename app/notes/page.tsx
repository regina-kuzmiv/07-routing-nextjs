import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";

const NotesPage = async () => {
  const search = "";
  const page = 1;
  const perPage = 12;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", search, page, perPage],
    queryFn: () => fetchNotes(search, page, perPage),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes />
    </HydrationBoundary>
  );
};

export default NotesPage;
