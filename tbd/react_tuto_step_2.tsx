import { UIForm } from 'uiform'
import { JSONSchema7 } from "json-schema";
import schema from './schema.json'
import "uiform/dist/index.css";
import { useState, useEffect } from 'react';

function App() {

    const [token, setToken] = useState<string>("")

    useEffect(() => {
        const fetchToken = async () => {
            const response = await fetch(process.env.REACT_APP_BACKEND_BASE_URL + "/token",
                {
                    headers: {
                        "Authorization": `Bearer toto`,
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({})
                })
            const data = await response.json()
            console.log("data", data)
            setToken(data.token.access_token)
        }
        fetchToken()
    }, [])

    return (
        <div className='bg-slate-100 p-4'>
            <UIForm
                schema={schema as JSONSchema7}
                onSubmit={(data) => console.log("data", data)}
                onChange={(data) => console.log("data", data)}
                className='text-[#0A2540] shadow-lg bg-white border-[#0A2540] border rounded-sm'
                aiform={{
                    token: token,                              // Authentication token for UIForm service
                    mimeTypes: ["application/pdf"],            // Allowed file types for upload (PDF only in this example)
                    maxFileSize: 1000000,                      // Maximum file size (1MB)
                    stream: true,                              // Enable real-time streaming of AI responses
                    aiProvider: "OpenAI",                      // Specify the AI service provider
                    chatCompletionParameters: {
                        model: "gpt-4o-mini",                  // The AI model to use
                        temperature: 0                          // 0 = most deterministic, 1 = most creative
                    },
                    prompting: {},                             // Custom prompting configuration (empty for default behavior)
                    variants: {
                        fileUpload: "button",                  // Use button-style upload interface
                        uncertaintyDisplay: "none"              // Hide uncertainty indicators
                    }
                }}
            />
        </div>
    );
}