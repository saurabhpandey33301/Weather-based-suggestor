
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages'
import NotFound from './pages/notfound'
import { Toaster } from "@/components/ui/sonner"
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
