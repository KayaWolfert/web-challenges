import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();
    return response.status(200).json(places);
  } 

  if (request.method === "POST") {
    try {
      const placesData = request.body;
      await Place.create(placesData);

      response.status(201).json({ status: "New place created!" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
}



 
}
