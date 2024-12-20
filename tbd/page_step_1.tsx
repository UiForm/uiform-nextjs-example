'use client'

import { UIForm } from 'uiform'
import { JSONSchema7 } from "json-schema";
import schema from './schema.json'
import "uiform/dist/index.css";

export default function Home() {
    return (
        <div className='bg-slate-100 p-4'>
            <UIForm
                schema={schema as JSONSchema7}
                onSubmit={(data) => console.log("data", data)}
                onChange={(data) => console.log("data", data)}
                className='text-[#0A2540] shadow-lg bg-white border-[#0A2540] border rounded-sm'
            />
        </div>
    );
}
