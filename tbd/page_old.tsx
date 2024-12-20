'use client'

import Image from "next/image";
import { useEffect, useState } from 'react'
import { UIForm } from 'uiform'
import RoadBookingConfirmationDataTypeNew from '../RoadBookingConfirmationDataTypeNew'
import "uiform/dist/index.css";
export default function Home() {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch("http://localhost:3000/api/token",
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

    // Usage example:


    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div >

          {/* <DynamicForm layout={RoadBookingConfirmationLayout} schema={RoadBookingConfirmationSchema} schemaWithRequired={schemaWithRequired} onChange={()=>null} onSubmit={()=>null} initialData={RoadBookingConfirmationTest} initialDataIsStreaming={false} uncertainties={RoadBookingConfirmationTestUncertainties} appearance={appearance_cube}  />  */}
          {token &&
            <div className='flex flex-row gap-4'>
              <div className='bg-slate-100 p-4'>
                <UIForm
                  schema={RoadBookingConfirmationDataTypeNew}
                  onSubmit={(data) => console.log("data", data)}
                  onChange={(data) => console.log("data", data)}
                  className='text-[#0A2540] shadow-lg bg-white border-[#0A2540] border rounded-sm'
                  aiform={{
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

              <div className='bg-[#F8E1F5] p-4'>
                <UIForm
                  schema={RoadBookingConfirmationDataTypeNew}
                  onSubmit={(data) => console.log("data", data)}
                  onChange={(data) => console.log("data", data)}
                  className='bg-white text-gray-500 outline-2  outline-white  placeholder-gray-300 text-xs rounded-[calc(var(--radius)-6px)]  border-none shadow-xs focus:outline-none focus:border-purple-400'
                  aiform={{
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

              <div className='bg-gray-100 p-4'>
                <UIForm
                  schema={RoadBookingConfirmationDataTypeNew}
                  onSubmit={(data) => console.log("data", data)}
                  onChange={(data) => console.log("data", data)}
                  className='bg-white text-gray-500 text-xs rounded-none border border-gray-400 shadow-[inset_-1px_-1px_0px_#FFF,inset_1px_1px_0px_#000,inset_2px_2px_0px_#808080,inset_-2px_-2px_0px_#DFDFDF] focus:outline-none focus:border-blue-500 font-[Verdana]'
                  aiform={{
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

              <div className='bg-[#0A3456] p-4'>
                <UIForm
                  schema={RoadBookingConfirmationDataTypeNew}
                  onSubmit={(data) => console.log("data", data)}
                  onChange={(data) => console.log("data", data)}
                  className='bg-transparent text-white  text-xs font-light rounded-lg border border-[#FFCE47] focus:outline-none focus:border-[#FAD446] placeholder-gray-400   focus:ring-offset-white focus-visible:white'
                  aiform={{
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
          }
        </div>
      </main>

    </div>
  );
}
