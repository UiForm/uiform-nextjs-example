'use client'

import { useEffect, useState } from 'react'
import { UIForm } from 'uiform'
import { JSONSchema7 } from "json-schema";
import schema from './schema.json'
import "uiform/dist/index.css";

export default function Home() {

    const [token, setToken] = useState<string>()
    useEffect(() => {
        const fetchToken = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/token",
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
        <div>

            <div className='bg-slate-100 p-4 w-[300px] mx-auto my-20 rounded-md'>
                <UIForm
                    schema={schema as JSONSchema7}
                    onSubmit={(data) => console.log("data", data)}
                    onChange={(data) => console.log("data", data)}
                    className='text-[#0A2540] shadow-lg bg-white border-[#0A2540] border rounded-sm'
                    aiform={{
                        apiBaseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:4000",
                        token: token,
                        mimeTypes: ["application/pdf"],
                        maxFileSize: 1000000,
                        stream: true,
                        aiProvider: "OpenAI",
                        chatCompletionParameters: {
                            model: "gpt-4o-mini",
                            temperature: 0
                        },
                        prompting: {},
                        variants: {
                            fileUpload: "button",
                            uncertaintyDisplay: "none"
                        }
                    }}
                />
            </div>
        </div>

    );
}
