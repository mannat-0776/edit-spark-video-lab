
import { Play } from 'lucide-react';

const VideoPreview = () => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video video-preview">
      {/* Video placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
            <Play className="w-8 h-8 text-white" />
          </div>
          <p className="text-white/70 text-sm">Import video to start editing</p>
        </div>
      </div>
      
      {/* Video overlay info */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-xs">00:00 / 00:00</span>
      </div>
      
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-white text-xs">1920x1080</span>
      </div>
    </div>
  );
};

export default VideoPreview;
