'use client'

import { Compressor } from "@/lib/compressor";
import Editor from "@monaco-editor/react"
import { useState } from "react"

export default function CCSEditor() {
  const [code, setCode] = useState("// Hello");
  const [result, setResult] = useState("// Hello");

  const handleCodeEdit = (value: any, event: any) => {
    setCode(value);
  }

  const deCompressCode = (e: any) => {
    setResult(new Compressor().decompress(code));
  }

  const compressCode = (e: any) => {
    setResult(new Compressor().compress(code));
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#1e1e1e] text-white">
      <div className="flex-1 h-full">
        <Editor
          language="plain"
          className="h-full"
          value={code}
          onChange={handleCodeEdit}
          theme="vs-dark"
          options={{
            'wordWrap': true,
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center p-4 lg:w-1/12 lg:px-2 lg:py-8">
        <button onClick={deCompressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full mb-4 lg:w-auto">Format</button>
        <button onClick={compressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full lg:w-auto">Minify</button>
      </div>

      <div className="flex-1 h-full">
        <Editor
          language="plain"
          className="h-full"
          theme="vs-dark"
          value={result}
          options={{
            'readOnly': true,
            'wordWrap': true,
          }}
        />
      </div>
    </div>
  )
}
