import { useEffect, useState } from "react";

import ResourceTopic from "../ResourceTopic";
import { API_URL } from "../../config";

export default function ResourcesPage() {
  const [resourcesData, setResourcesData] = useState("");

  useEffect(() => {
    async function getResources() {
      try {
        const response = await fetch(`${API_URL}/resources`);
        let receivedData = await response.json();
        setResourcesData(receivedData.payload);
      } catch (error) {}
    }
    getResources();
  }, []);

  if (resourcesData) {
    return (
      <div>
        <h2>Resources</h2>
        <div className="topic-section">
          <ResourceTopic
            title="CSS"
            imgSrc="https://www.logolynx.com/images/logolynx/0d/0d35ef6c8d4fdaf0590228404dc6448b.png"
            data={resourcesData.filter((obj) => obj.topic === "css")}
          ></ResourceTopic>
          <ResourceTopic
            title="Javascript"
            imgSrc="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            data={resourcesData.filter((obj) => obj.topic === "javascript")}
          ></ResourceTopic>
          <ResourceTopic
            title="Backend"
            imgSrc="https://nodejs.org/static/images/logo-hexagon-card.png"
            data={resourcesData.filter((obj) => obj.topic === "backend")}
          ></ResourceTopic>
          <ResourceTopic
            title="Testing"
            imgSrc="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"
            data={resourcesData.filter((obj) => obj.topic === "testing")}
          ></ResourceTopic>
          <ResourceTopic
            title="SQL"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"
            data={resourcesData.filter((obj) => obj.topic === "sql")}
          ></ResourceTopic>
          <ResourceTopic
            title="React"
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
            data={resourcesData.filter((obj) => obj.topic === "react")}
          ></ResourceTopic>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
