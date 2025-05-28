
import { Button } from './ui/button';
import { 
  Scissors, 
  Sparkles, 
  Image, 
  Music, 
  Type, 
  Palette,
  Video,
  Youtube,
  Download,
  Zap
} from 'lucide-react';

interface SidebarProps {
  selectedTool: string;
  onToolSelect: (tool: string) => void;
}

const Sidebar = ({ selectedTool, onToolSelect }: SidebarProps) => {
  const tools = [
    { id: 'trim', icon: Scissors, label: 'Trim & Cut' },
    { id: 'effects', icon: Sparkles, label: 'AI Effects' },
    { id: 'images', icon: Image, label: 'AI Images' },
    { id: 'audio', icon: Music, label: 'Audio' },
    { id: 'text', icon: Type, label: 'Text & Titles' },
    { id: 'filters', icon: Palette, label: 'Filters' },
    { id: 'templates', icon: Video, label: 'Templates' },
    { id: 'youtube', icon: Youtube, label: 'YouTube Shorts' },
    { id: 'export', icon: Download, label: 'Export' },
  ];

  return (
    <div className="w-64 bg-card border-r border-border p-4">
      <div className="space-y-2">
        <div className="mb-6">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Professional video editing with AI assistance
            </p>
          </div>
        </div>

        {tools.map((tool) => (
          <Button
            key={tool.id}
            variant={selectedTool === tool.id ? "default" : "ghost"}
            className={`w-full justify-start gap-3 h-12 ${
              selectedTool === tool.id 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-accent"
            }`}
            onClick={() => onToolSelect(tool.id)}
          >
            <tool.icon className="w-5 h-5" />
            <span className="text-sm">{tool.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
