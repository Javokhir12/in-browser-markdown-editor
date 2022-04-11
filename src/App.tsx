import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import NewDocumentView from './components/NewDocument';
import Welcome from './components/Welcome';
import AllDocs from './components/AllDocs';
import DocumentView from './components/DocumentView';

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/new" element={<NewDocumentView />} />
        <Route path="/my-docs" element={<AllDocs />} />
        <Route path="/my-docs/:docId" element={<DocumentView />} />
      </Routes>
    </>
  );
}

export default App;
