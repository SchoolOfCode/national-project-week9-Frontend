import { useEffect, useState } from "react";

import ResourceTopic from "../ResourceTopic";
import { API_URL } from "../../config";

export default function ResourcesPage() {

    const [resourcesData, setResourcesData] = useState("");
    console.log("resourcesData", resourcesData)

    useEffect(() => {
        async function getResources() {
          try {
            const response = await fetch(`${API_URL}/resources`);
            let receivedData = await response.json();
            console.log(receivedData)
            setResourcesData(receivedData.payload);
            // setData(questionData.payload.slice(0, 6));
          } catch (error) {}
        }
        getResources();
      }, []);


      if(resourcesData) {
    return (
      <div className="resouces-section">
        <h1>Resource Page</h1>
        <ResourceTopic title="Javascript" imgSrc="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" data={resourcesData.filter((obj) => obj.topic === "javascript")} ></ResourceTopic>
      </div>
    );
      } else {
         return(<></>)
      }
  }
  