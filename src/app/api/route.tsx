// import { NextApiRequest, NextApiResponse } from "next/server";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Get the HTTP method (GET, POST, PUT, etc.)
//   const { method } = req;

//   switch (method) {
//     case "GET":
//       // Handle GET request
//       res.status(200).json({ message: "Hello from GET!" });
//       break;
//     case "POST":
//       // Handle POST request
//       // You can access the body of the request with `req.body`
//       res.status(200).json({ message: "Hello from POST!", body: req.body });
//       break;
//     // Add more cases for other HTTP methods, if needed
//     default:
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello - GET" });
}
