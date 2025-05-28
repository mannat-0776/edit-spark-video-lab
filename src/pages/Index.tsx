
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoPreview from '../components/VideoPreview';
import Timeline from '../components/Timeline';
import ToolsPanel from '../components/ToolsPanel';
import { Button } from '../components/ui/button';
import { Play, Pause, Download, Upload } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTool, setSelectedTool] = useState('trim');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar selectedTool={selectedTool} onToolSelect={setSelectedTool} />
        
        <div className="flex-1 flex flex-col">
          {/* Main editing area */}
          <div className="flex flex-1">
            {/* Video preview area */}
            <div className="flex-1 p-6">
              <VideoPreview />
              
              {/* Video controls */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-primary/10 border-primary/20 hover:bg-primary/20"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                
                <Button variant="outline" size="sm" className="bg-green-600/10 border-green-600/20 hover:bg-green-600/20">
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </Button>
                
                <Button variant="outline" size="sm" className="bg-blue-600/10 border-blue-600/20 hover:bg-blue-600/20">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            
            {/* Tools panel */}
            <ToolsPanel selectedTool={selectedTool} />
          </div>
          
          {/* Timeline */}
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Index;
