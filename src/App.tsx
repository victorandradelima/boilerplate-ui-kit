import React, { useState } from 'react'
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './components'
import { Button } from './components/ui/button'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1">
              <h1 className="text-3xl font-medium">
                Exemplos de componentes do Nivello Ui Kit
              </h1>
            </div>
            <div className="col-span-1">
              <Button variant="default">Click me</Button>
            </div>
            <div className="col-span-1">
              <Input
                placeholder="Insira o valor"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
