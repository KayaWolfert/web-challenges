import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;




  if (request.method === "GET") {
   const place = await Place.findById(id);
   if(!place){
    return response.status(404).json({ status: "Not Found" });
   }
   response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const placeData = request.body;
    // Get the joke data from the request body
    await Place.findByIdAndUpdate(id, placeData);
    // Find the joke by its ID and update the joke using its ID and the new data.
    return response.status(200).json({ status: `Place ${id} updated!` });
    // Return an OK status on successful update
  }

  if (request.method === "DELETE") {
    await Place.findByIdAndDelete(id);
    // Find and delete the joke by its ID.
    response.status(200).json({ status: `Joke ${id} successfully deleted.` });
    // Confirm deletion with a status message.
  }
  

  
}
