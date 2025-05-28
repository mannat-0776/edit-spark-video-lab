
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Volume2, VolumeX } from 'lucide-react';

const Timeline = () => {
  return (
    <div className="h-48 border-t border-border bg-card/30 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Timeline</h3>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Volume2 className="w-4 h-4" />
          </Button>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
      </div>
      
      {/* Timeline tracks */}
      <div className="space-y-2">
        {/* Video track */}
        <div className="h-12 bg-secondary/50 rounded border border-border/50 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <span className="text-xs text-muted-foreground">Video</span>
          </div>
        </div>
        
        {/* Audio track */}
        <div className="h-8 bg-secondary/30 rounded border border-border/50 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <span className="text-xs text-muted-foreground">Audio</span>
          </div>
        </div>
        
        {/* Text track */}
        <div className="h-6 bg-secondary/20 rounded border border-border/50 relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <span className="text-xs text-muted-foreground">Text</span>
          </div>
        </div>
      </div>
      
      {/* Playhead */}
      <div className="relative mt-2">
        <div className="w-0.5 h-16 bg-primary absolute left-8 -top-16"></div>
      </div>
    </div>
  );
};

export default Timeline;
