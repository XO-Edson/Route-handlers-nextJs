/* type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data: Feedback = await request.json();

  console.log(data);

  const { name, email, message } = data;

  return Response.json({ name, email, message });
}
 */

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);

  const data = await response.json();
  console.log(data);

  return Response.json(data);
}
