
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Separator } from './ui/separator';
import { 
  Sparkles, 
  Download, 
  Youtube, 
  Image as ImageIcon,
  Video,
  Wand2,
  Clock
} from 'lucide-react';

interface ToolsPanelProps {
  selectedTool: string;
}

const ToolsPanel = ({ selectedTool }: ToolsPanelProps) => {
  const renderToolContent = () => {
    switch (selectedTool) {
      case 'export':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Video
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Quality</Label>
                <Select defaultValue="1080p">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="480p">480p • SD</SelectItem>
                    <SelectItem value="720p">720p • HD</SelectItem>
                    <SelectItem value="1080p">1080p • Full HD</SelectItem>
                    <SelectItem value="1440p">1440p • 2K</SelectItem>
                    <SelectItem value="2160p">2160p • 4K</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label>Format</Label>
                <Select defaultValue="mp4">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4</SelectItem>
                    <SelectItem value="mov">MOV</SelectItem>
                    <SelectItem value="avi">AVI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                <Download className="w-4 h-4 mr-2" />
                Export (10 credits)
              </Button>
            </CardContent>
          </Card>
        );
        
      case 'youtube':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Youtube className="w-5 h-5 text-red-500" />
                YouTube Shorts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>YouTube URL</Label>
                <Input placeholder="https://youtube.com/watch?v=..." />
              </div>
              
              <div>
                <Label>Short Duration</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 seconds</SelectItem>
                    <SelectItem value="30">30 seconds</SelectItem>
                    <SelectItem value="60">60 seconds</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Convert to Short (15 credits)
              </Button>
            </CardContent>
          </Card>
        );
        
      case 'images':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                AI Image Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Prompt</Label>
                <Input placeholder="Describe the image you want..." />
              </div>
              
              <div>
                <Label>Style</Label>
                <Select defaultValue="realistic">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realistic">Realistic</SelectItem>
                    <SelectItem value="cartoon">Cartoon</SelectItem>
                    <SelectItem value="anime">Anime</SelectItem>
                    <SelectItem value="abstract">Abstract</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">
                <Wand2 className="w-4 h-4 mr-2" />
                Generate Image (5 credits)
              </Button>
            </CardContent>
          </Card>
        );
        
      case 'templates':
        return (
          <div className="space-y-4">
            <h3 className="font-medium">Video Templates</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Social Media', type: 'Instagram Story' },
                { name: 'YouTube Intro', type: 'Channel Intro' },
                { name: 'Product Demo', type: 'Commercial' },
                { name: 'Travel Vlog', type: 'Lifestyle' },
                { name: 'Gaming', type: 'Stream Overlay' },
                { name: 'Business', type: 'Corporate' },
              ].map((template, index) => (
                <Card key={index} className="cursor-pointer hover:bg-accent transition-colors">
                  <CardContent className="p-3">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded mb-2 flex items-center justify-center">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{template.name}</p>
                    <p className="text-xs text-muted-foreground">{template.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
        
      case 'effects':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                AI Effects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Auto Enhance',
                  'Background Blur',
                  'Color Grading',
                  'Noise Reduction',
                  'Stabilization',
                  'Speed Ramping',
                ].map((effect) => (
                  <Button key={effect} variant="outline" size="sm" className="text-xs">
                    {effect}
                  </Button>
                ))}
              </div>
              
              <Separator />
              
              <div>
                <Label>AI Enhancement</Label>
                <Button className="w-full mt-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Auto Enhance (8 credits)
                </Button>
              </div>
            </CardContent>
          </Card>
        );
        
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Tool Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Select a tool from the sidebar to view its options.
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="w-80 border-l border-border p-4 overflow-y-auto">
      {/* Daily credits info */}
      <Card className="mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Daily Credits</span>
            <Badge variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              Resets in 12h
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-secondary/50 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-full"></div>
            </div>
            <span className="text-sm">50/50</span>
          </div>
        </CardContent>
      </Card>
      
      {renderToolContent()}
    </div>
  );
};

export default ToolsPanel;
