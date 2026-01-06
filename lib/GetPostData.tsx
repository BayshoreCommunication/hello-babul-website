export default async function GetAllPostData() {
  const bloData = await fetch(
    "https://backend-mccullochlawpa.vercel.app/site/blog",
    {
      next: { revalidate: 200 },
    }
  );
  return bloData.json();
}
