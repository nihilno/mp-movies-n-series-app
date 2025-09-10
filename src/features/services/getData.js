export async function getMovieData() {
  const res = await fetch("/data.json");
  if (!res.ok) throw Error("Failed getting data");

  const data = await res.json();

  return data;
}
