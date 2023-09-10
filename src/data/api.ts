export default async function fetchTasks(): Promise<
  { userId: number; id: number; title: string; completed: boolean }[]
> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
